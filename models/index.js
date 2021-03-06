const mongoose = require("mongoose");

const DB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/solange711";

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(`MongoDB error: ${err}`));

module.exports = {
  Mood: require("./Mood"),
  Post: require("./Post"),
  User: require("./User"),
};

mongoose.set("debug", true);
