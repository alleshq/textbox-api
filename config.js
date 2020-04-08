const dev = process.env.NODE_ENV === "development";

module.exports = {
	dev,
	apiUrl: "https://1api.alles.cx/v1",
	inputBounds: {
		title: {
			min: 3,
			max: 100
		},
		content: {
			min: 10,
			max: 25000
		}
	}
};
