const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      minLength: 11,
      maxLength: 11,
    },
    password: {
      type: String,
      minLength: 6,
      required: true,
    },
    avater: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const People = mongoose.model("People", peopleSchema);
People.syncIndexes();

module.exports = People;
