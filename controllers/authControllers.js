const bcrypt = require("bcryptjs");
const db = require("../models");

// POST Register - User Create
const register = (req, res) => {
  db.User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err)
      return res.status(400).json({
        status: 400,
        message: "Something went wrong, please try again",
      });

    // Verify User Does Not Already Exist
    if (foundUser) {
      return res.status(400).json({
        status: 400,
        message: "Account already registered, please login",
      });
    }

    // Generate Salt
    bcrypt.genSalt(10, (err, salt) => {
      if (err)
        return res.status(400).json({
          status: 400,
          message: "Something went wrong, please try again",
        });

      // Hash User Password
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err)
          return res.status(400).json({
            status: 400,
            message: "Something went wrong, please try again",
          });

        // Construct User Object with Hashed Password
        const userData = {
          username: req.body.username,
          password: hash,
        };

        // Create New user
        db.User.create(userData, (err, newUser) => {
          if (err)
            return res.status(400).json({
              status: 400,
              message: "Something went wrong, please try again",
            });

          res.status(201).json({ status: 201, message: "Success" });
        });
      });
    });
  });
};

const login = (req, res) => {
  res.status(200);
  db.User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err)
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong, please try again" });

    // Verify User Account Exists
    if (!foundUser) {
      return res
        .status(400)
        .json({ status: 400, message: "Invalid credentials" });
    }

    if (foundUser.password == req.body.password) {
      req.session.currentUser = {
        _id: foundUser._id,
        username: foundUser.username,
      };
      res.status(200).json({ status: 200, user: req.session.currentUser });
    } else {
      res
        .status(400)
        .json({ status: 400, error: "Invalid credentials, please try again" });
    }
  });
};

// DELETE Session Destroy
const logout = (req, res) => {
  if (!req.session.currentUser) {
    // Not Authorized
    return res
      .status(401)
      .json({ status: 401, error: "Unauthorized, please login and try again" });
  }

  // Destroy Session and Respond with Success
  req.session.destroy((err) => {
    if (err)
      return res.status(400).json({
        status: 400,
        message: "Something went wrong, please try again",
      });

    res.status(200).json({ status: 200, message: "Success" });
  });
};

// Verify Route for Development/Testing
const verify = (req, res) => {
  if (!req.session.currentUser) {
    // Not Authorized
    return res
      .status(401)
      .json({ status: 401, error: "Unauthorized, please login and try again" });
  }

  return res.json({
    status: 200,
    message: "Authorized",
    currentUser: req.session.currentUser,
  });
};

const findUser = (req, res) => {
  db.User.findById(req.session.currentUser.id, (err, foundUser) => {
    if (err) {
      return res.status(400).json({ status: 400, error: "User not found! :(" });
    }
    res.json(foundUser);
  });
};

module.exports = {
  register,
  login,
  logout,
  verify,
  findUser,
};
