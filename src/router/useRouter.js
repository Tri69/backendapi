const express = require("express");
const router = express.Router();
const controller = require("../controllers/useController");
const fs = require("fs");
const view = require("../../views/index.ejs")
const surah = require("../content/surah");
const hadist = require("../controllers/useControllerHadist")

router.get("/", (req, res, next) => {
	const a = controller.surah;
	console.log(a)
	res.send("<h1>Test Rest API</h1> <br> <a href='localhost:3002/surah' >Surah</a>")
})

router.get("/datasurah/:id", controller.id)

router.get("/datasurah", controller.surah)

router.get("/alfatihah", controller.alfatihah);



router.get('/hadist', hadist.hadistalilmu);
router.get('/hadist/:id', hadist.id)

router.use("/", (req, res) => {
	res.send("404 not Found")
})

module.exports = router;