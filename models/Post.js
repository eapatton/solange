const mongoose = require("mongoose");
Schema = mongoose.Schema;
//const User = require("./User");

const postSchema = new Schema(
  {
    title: String,
    content: String,
    image: String,
    link: String,
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
