const express = require("express");
const router = express.Router();
const hadist =require("../content/hadist");

router.get('/hadist', hadist.hadist);

router.use("/", (req, res) => {
	res.send("404 not Found")
})