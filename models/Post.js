const mongoose = require("mongoose");
const User = require("./User");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    image: String,
    link: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
