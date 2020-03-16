const db = require("./db");
const axios = require("axios");
const config = require("../config");
const credentials = require("../credentials");

module.exports = async code => {
	//Get Document
	const doc = await db.Document.findOne({
		where: {
			code
		}
	});
	if (!doc) return;

	//Get Author
	var author;
	try {
		author = (
			await axios.get(`${config.apiUrl}/user?id=${doc.user}`, {
				auth: {
					username: credentials.allesOAuth.id,
					password: credentials.allesOAuth.secret
				}
			})
		).data;
	} catch (err) {
		return;
	}
	doc.author = author;

	return doc;
};
