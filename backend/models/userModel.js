const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: () => {
        return this.provider !== "email" ? false : true;
      },
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    password: {
      type: String,
    },
    token: {
      type: String,
    },

    role: {
      type: String,
      default: "ROLE_CUSTOMER",
      enum: ["ROLE_CUSTOMER", "ROLE_ADMIN"],
      index: true,
    },
    // Security trigger
    isBanned: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
