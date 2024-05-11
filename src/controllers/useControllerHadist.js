const hadist = require("../content/hadist");

exports.hadistalilmu = (req, res, next) => {
	res.json(hadist.hadistalilmu);
}
exports.id = (req, res, next) => {
	const id = parseInt(req.params.id);
	const data = hadist.hadistalilmu;
	const item = data.find(item => item.id == id);
	if (item) {
		res.json(item)
	}
}