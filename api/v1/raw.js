const getDoc = require("../../util/doc");

module.exports = async (req, res) => {
	const doc = await getDoc(req.params.code);
	if (!doc) return res.status(400).json({err: "invalidDocument"});

	res
		.status(200)
		.type("text/plain")
		.send(doc.content);
};
