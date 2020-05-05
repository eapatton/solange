const bcrypt = require("bcryptjs");
const db = require("../models");

//POST Register - User Create
const register = (req, res) => {
  db.User.findOne({ username: req.body.username }, (err, foundUser) => {
    console.log(req.body);
    if (err)
      return res.status(400).json({
        status: 400,
        message: "Something went wrong, please try again",
      });

    if (foundUser) {
      return res.status(400).json({
        status: 400,
        message: "Account already registered, please login",
      });
    }

    bcrypt.genSalt(10, (err, salt) => {
      if (err)
        return res.status(400).json({
          status: 400,
          message: "genSalt issue",
        });

      // Hash User Password
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err)
          return res.status(400).json({
            status: 400,
            message: "hash issue",
          });

        const userData = {
          username: req.body.username,
          password: hash,
        };

        // Create New user
        db.User.create(userData, (err, newUser) => {
          if (err) console.log(err);
          return res.status(400).json({
            status: 400,
            message: "create issue",
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

    bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
      if (err)
        return res.status(400).json({
          status: 400,
          message: "Something went wrong. Please try again",
        });
      if (isMatch) {
        req.session.currentUser = {
          _id: foundUser._id,
          username: foundUser.username,
          // password: foundUser.password,
        };
        res.status(200).json({
          status: 200,
          message: "Success",
          user: req.session.currentUser,
        });
      } else {
        return res
          .status(400)
          .json({ status: 400, message: "Username or password is incorrect" });
      }
    });
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

// const findUser = (req, res) => {
//   db.User.findById(req.session.currentUser.id, (err, foundUser) => {
//     if (err) {
//       return res.status(400).json({ status: 400, error: "User not found! :(" });
//     }
//     res.json(foundUser);
//   });
// };

module.exports = {
  register,
  login,
  logout,
  verify,
  //findUser,
};
