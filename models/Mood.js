const mongoose = require("mongoose");
const Post = require("./Post");

const MoodSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  posts: [Post.schema],
});

const Mood = mongoose.model("Mood", MoodSchema);

module.exports = Mood;
