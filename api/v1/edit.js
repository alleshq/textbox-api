const getDoc = require("../../util/doc");

module.exports = async (req, res) => {
    //Parameters
    if (typeof req.body.content !== "string") return res.status(400).json({err: "invalidBodyParameters"});
    if (req.body.content.trim().length < 10 || req.body.content.length > 10000) return res.status(400).json({err: "contentLength"});

    //Get Document
    const doc = await getDoc(req.params.code);
    if (!doc) return res.status(400).json({err: "invalidDocument"});
    if (doc.user !== req.user.id) return res.status(400).json({err: "mustOwnDocument"});

    //Update Document
    doc.update({
        content: req.body.content
    });

    //Response
    res.json({});
};