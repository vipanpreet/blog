const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    repetitionType: {
      type: String,
      enum: ["ONE_TIME", "QUARTERLY", "MONTHLY"],
      uppercase: true,
      required: true,
    },
    eventDate: { type: Date, required: true },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isDraft: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
