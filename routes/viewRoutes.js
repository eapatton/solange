const express = require("express");
const router = express.Router();

//Home page view
router.get("/", (req, res) => {
  res.sendFile("views/home.html", {
    root: __dirname + "/../",
  });
});

//About page view
//TODO:about.html
router.get("/about", (req, res) => {
  res.sendFile("views/about.html", {
    root: __dirname + "/../",
  });
});

//Mood index page view
router.get("/moods", (req, res) => {
  res.sendFile("views/moodsIndex.html", {
    root: __dirname + "/../",
  });
});

//Mood show page
router.get("/moods/:moodId", (req, res) => {
  res.sendFile("views/moodInfo.html", {
    root: __dirname + "/../",
  });
});

//register page view
router.get("/register", (req, res) => {
  res.sendFile("views/register.html", {
    root: __dirname + "/../",
  });
});

//---------------------------  POST ---------------------  //
//new post page view
router.get("/moods/:moodId/posts/new", (req, res) => {
  res.sendFile("#", {
    root: __dirname + "/../",
  });
});

//edit post view
router.get("/moods/:moodId/posts/:postId/edit", (req, res) => {
  res.sendFile("views/postEdit.html", {
    root: __dirname + "/../",
  });
});

module.exports = router;
