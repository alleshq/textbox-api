const getDoc = require("../../util/doc");

module.exports = async (req, res) => {
    //Get Document
    const doc = await getDoc(req.params.code);
    if (!doc) return res.status(400).json({err: "invalidDocument"});
    if (doc.user !== req.user.id) return res.status(400).json({err: "mustOwnDocument"});

    //Delete Document
    doc.destroy();

    //Response
    res.json({});
};