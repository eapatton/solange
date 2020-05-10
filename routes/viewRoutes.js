const express = require("express");
const router = express.Router();
const passport = require("passport");

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

// Privacy Policy
router.get("/privacy", (req, res) => {
  res.sendFile("views/privacy.html", {
    root: __dirname + "/../",
  });
});

//Mood index page view
router.get("/moods", (req, res) => {
  res.sendFile("/views/moodsIndex.html", {
    root: __dirname + "/../",
  });
});

//Mood show page
router.get("/moods/:moodId", (req, res) => {
  res.sendFile("/views/moodInfo.html", {
    root: __dirname + "/../",
  });
});

//---------------------------  POST ---------------------  //
//new post page view
router.get("/moods/:moodId/add", (req, res) => {
  res.sendFile("/views/postNew.html", {
    root: __dirname + "/../",
  });
});

//edit post view
router.get("/moods/:moodId/posts/:postId", (req, res) => {
  res.sendFile("/views/postEdit.html", {
    root: __dirname + "/../",
  });
});

//// ------------------ GOOGLE AUTH

// GET /auth/google

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/plus.login",
      "https://www.googleapis.com/auth/plus.profile.emails.read",
    ],
  })
);

// GET /auth/google/callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/profile");
  }
);

/////////------------------------ AUTH

//register page view
router.get("/register", (req, res) => {
  res.sendFile("/views/register.html", {
    root: __dirname + "/../",
  });
});

router.get("/login", (req, res) => {
  res.sendFile("/views/login.html", {
    root: __dirname + "/../",
  });
});

router.get("/profile", (req, res) => {
  if (!req.session.currentUser) {
    // Unauthorized, Redirect to Login Page
    return res.redirect("/login");
  }

  res.sendFile("/views/profile.html", {
    root: __dirname + "/../",
  });
});

module.exports = router;
