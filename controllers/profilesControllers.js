const db = require("../models");

// create new user profile at url/api/v1/profiles
const create = (req, res) => {
  db.Profile.create(req.body, (err, newProfile) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: "Something went wrong, please try again.",
      });
    }
    res.status(201).json(newProfile);
  });
}; // works

// get user profile at url/api/v1/profile/id
const show = (req, res) => {
  const profileID = req.params.id;
  db.Profile.findById(profileID, (err, foundProfile) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: "Something went wrong, please try again.",
      });
    }
    res.json(foundProfile);
  });
}; // works

// update user profile at url/api/v1/profile/id

const update = (req, res) => {
  db.Profile.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, updatedProfile) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: "Something went wrong, please try again.",
        });
      }
      res.json(updatedProfile);
    }
  );
}; // works

// delete user profile at url/api/v1/profile/id

const remove = (req, res) => {
  db.Profile.deleteOne({ _id: req.params.id }, (err, deletedProfile) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: "Something went wrong, please try again.",
      });
    }
    res.json(deletedProfile);
  });
}; // works

module.exports = {
  create,
  show,
  update,
  remove,
};
