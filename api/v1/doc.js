const getDoc = require("../../util/doc");

module.exports = async (req, res) => {
    const doc = await getDoc(req.params.code);
    if (!doc) return res.status(400).json({err: "invalidDocument"});

    res.json({
        id: doc.code,
        name: doc.name,
        content: doc.content,
        author: doc.author.username,
        createdAt: doc.createdAt,
        editedAt: doc.updatedAt.getTime() !== doc.createdAt.getTime() ? doc.updatedAt : null,
        highlight: doc.highlight,
        markdown: doc.markdown
    });
};