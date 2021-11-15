const express = require("express");
const router = express.Router();

// Loading Controllers
const { loginUser } = require("../controllers/authController.js");

router.post("/login", loginUser);

module.exports = router;
