const mongoose = require("mongoose");

const DB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/solange1";

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(`MongoDB error: ${err}`));

module.exports = {
  Mood: require("./mood"),
  Post: require("./post"),
  User: require("./user"),
};

mongoose.set("debug", true);
