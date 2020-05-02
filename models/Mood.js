const mongoose = require("mongoose");
const Post = require("./post");
Schema = mongoose.Schema;

const moodSchema = new Schema({
  title: String,
  description: String,
  image: String,
  posts: [Post.schema],
});

const Mood = mongoose.model("Mood", moodSchema);
module.exports = Mood;
