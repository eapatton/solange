const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// mongoose.set("useCreateIndex", true);
// const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
