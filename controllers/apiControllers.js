const db = require("../models");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

//this returns a json object of all things in database
const findAll = (req, res) => {
  db.Mood.find({}, (err, allMoods) => {
    if (err) {
      return res.status(400).json({ status: 500, error: "Please try again" });
    }

    res.json(allMoods);
  });
};

// this returns a json object with one mood
const findOne = (req, res) => {
  db.Mood.findById(req.params.moodId, (err, foundMood) => {
    if (err) {
      return res.status(400).json({ status: 400, error: "Mood not found." });
    }

    res.json(foundMood);
  });
};

// const keywordSearch = (req, res) => {
//   db.Mood.find({ title: req.params.keywords }, (err, currentMood) => {
//     if (err) {
//       console.log(err);
//       process.exit();
//     }

//     if (currentMood.length < 1) {
//       res.status(400).json({ message: "That's not the mood!" });
//     }
//     res.json(currentMood);
//   });
// };

const findPost = (req, res) => {
  db.Mood.findById(req.params.moodId, (err, foundMood) => {
    if (err) {
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong" });
    }

    // Find Post
    const foundPost = foundMood.posts.id(req.params.postId);

    // Check if Post
    if (!foundPost) {
      return res
        .status(400)
        .json({ status: 400, error: "Could not find post" });
    }

    res.json(foundPost);
  });
};

const createPost = (req, res) => {
  console.log("------------------------------------------------", req);
  db.Post.create(req.body, (err, newPost) => {
    if (err) {
      return res.status(500).json({ status: 500, error: "database error!" });
    }

    db.Mood.findById(req.params.moodId, (err, foundMood) => {
      if (err) {
        return res
          .status(400)
          .json({ status: 400, error: `That ain't the mood!` });
      }

      foundMood.posts.push(newPost);

      foundMood.save((err, savedMood) => {
        if (err) {
          return res
            .status(400)
            .json({ status: 400, error: "Unable to save Mood." });
        }

        return res.json(newPost);
      });
    });
  });
};

const updatePost = (req, res) => {
  db.Mood.findById(req.params.moodId, (err, foundMood) => {
    if (err) {
      return res.status(400).json({ status: 400, error: "Mood not found!" });
    }

    let updatingPost = foundMood.posts.id(req.params.postId);

    if (!updatingPost) {
      return res
        .status(400)
        .json({ status: 400, message: "could not find post" });
    }

    updatingPost.title = req.body.title;
    updatingPost.content = req.body.content;
    updatingPost.image = req.body.image;
    updatingPost.link = req.body.link;

    foundMood.save((err, savedMood) => {
      if (err) {
        return res
          .status(400)
          .json({ status: 400, error: "Mood was not saved" });
      }

      //Update Post
      db.Post.findByIdAndUpdate(
        req.params.postId,
        req.body,
        { new: true },
        (err, updatedPost) => {
          if (err) {
            return res
              .status(400)
              .json({ status: 400, error: "Post update was not possible." });
          }

          res.json(updatedPost);
        }
      );
    });
  });
};

const deletePost = (req, res) => {
  db.Mood.findById(req.params.moodId, (err, foundMood) => {
    if (err) {
      return res.status(400).json({ status: 400, error: "Mood not found!" });
    }

    // Find By ID
    const removePost = foundMood.posts.id(req.params.postId);

    if (!removePost) {
      return res
        .status(400)
        .json({ status: 400, error: "Could not find post" });
    }
    removePost.remove();

    foundMood.save((err, savedMood) => {
      if (err) {
        return res
          .status(400)
          .json({ status: 400, error: "The mood was not saved" });
      }

      // Delete Post
      db.Post.findByIdAndDelete(req.params.postId, (err, deletedPost) => {
        if (err) {
          return res.status(400).json({
            status: 400,
            error: "Something went wrong, post was not deleted",
          });
        }

        res.json(savedMood);
      });
    });
  });
};

module.exports = {
  findAll,
  findOne,
  // keywordSearch,
  findPost,
  createPost,
  updatePost,
  deletePost,
};
