const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Loading User Model and helpers
const User = require("../models/userModel.js");
const keys = require("../config/keys");

const { secret, tokenExp } = keys.jwt;

require("../config/passport")(passport);

exports.loginUser = async (req, res) => {
  const { email, password, token, phoneNumber, otp } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ msg: "No user found for this email address." });
    }

    if (user.isBanned === true) {
      return res
        .status(400)
        .send({ msg: "Your account has been banned, please contact administrator" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      id: user.id,
    };

    jwt.sign(payload, secret, { expiresIn: tokenExp }, (err, token) => {
      res.status(200).json({
        success: true,
        token: `Bearer ${token}`,
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        isFirstTime: isFirstTime,
        phoneNumber: user.phoneNumber,
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "There is an error authenticating" });
  }
};
