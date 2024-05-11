const surah = require("../content/surah")
const alfatihah = require("../content/alfatihah")

exports.surah = (req, res, next) => {
	res.json(surah)
}

exports.alfatihah = (req, res, next) => {
	res.json(alfatihah)
}

exports.id = (req, res, next)=> {
	const id = parseInt(req.params.id);
	const a = surah.surah
	const item = a.find(item => 
		item.id === id
	);

	if (item) {
		res.json(item)
	}
	else {
		res.send("Not Found 404")
	}
}
