const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require("./Post");
// mongoose.set("useCreateIndex", true);
// const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      // sparse: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [Post.schema],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
