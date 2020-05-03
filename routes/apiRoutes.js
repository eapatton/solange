const express = require("express");
const router = express.Router();
const db = require("../models");
const ctrl = require("../controllers");

//Get moods index
router.get("/moods", ctrl.apiCtrl.findAll);

//Get mood info
router.get("/moods/:moodId", ctrl.apiCtrl.findOne);

//get mood by name
//router.post("/moods/search/:keywords", ctrl.apiCtrl.keywordSearch);

// Get all posts
// router.get("/posts", ctrl.apiCtrl.findAll);

//Get post
router.get("/moods/:moodId/posts/:postId", ctrl.apiCtrl.findPost);

//post a post
router.post("/moods/:moodId/posts", ctrl.apiCtrl.createPost);

//update a post
router.put("/moods/:moodId/posts/:postId", ctrl.apiCtrl.updatePost);

//delete a post
router.delete("/moods/:moodId/posts/:postId", ctrl.apiCtrl.deletePost);

// USER ROUTES

// create user
router.post("/register", ctrl.authCtrl.register);

//create user session(?)
router.post("/login", ctrl.authCtrl.login);

//end user session
router.delete("/logout", ctrl.authCtrl.logout);

//check user login
router.get("/verify", ctrl.authCtrl.verify);

//find user
router.get("/profile", ctrl.authCtrl.findUser);

module.exports = router;
