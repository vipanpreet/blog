var express = require("express");
var router = express.Router();

const { uploadImage } = require("../controllers/storageController");

router.route("/").post(uploadImage);

module.exports = router;
