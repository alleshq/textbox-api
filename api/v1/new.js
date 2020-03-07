const db = require("../../util/db");
const Sequelize = require("sequelize");
const uuid = require("uuid/v4");
const randomString = require("randomstring").generate;

module.exports = async (req, res) => {
    //Parameters
    if (typeof req.body.title !== "string" || typeof req.body.content !== "string" || typeof req.body.markdown !== "boolean" || typeof req.body.highlight !== "boolean") return res.status(400).json({err: "invalidBodyParameters"});
    if (req.body.title.trim().length < 3 || req.body.title.length > 100) return res.status(400).json({err: "titleLength"});
    if (req.body.content.trim().length < 10 || req.body.content.length > 10000) return res.status(400).json({err: "contentLength"});

    //Ratelimiting
    const since = new Date(new Date().getTime() - 1000 * 60);
    const recentDocs = await db.Document.count({
        where: {
            user: req.user.id,
            createdAt: {
                [Sequelize.Op.gte]: since
            }
        }
    }, {
        paranoid: false
    });
    if (recentDocs >= 5) return res.status(429).json({err: "cooldown"});

    //Create Document
    const doc = await db.Document.create({
        id: uuid(),
        code: randomString(6),
        user: req.user.id,
        name: req.body.title,
        content: req.body.content,
        markdown: req.body.markdown,
        highlight: req.body.highlight
    });

    //Response
    res.json({
        code: doc.code
    });
};