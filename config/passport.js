const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const config = require("../models/oauth");

passport.use(
  new GoogleStrategy(
    {
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL,
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOne({ googleId: profile.id }, function (err, user) {
        if (err) return cb(err);
        if (user) {
          return cb(null, user);
        } else {
          // we have a new user via OAuth!
          var newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          newUser.save(function (err) {
            if (err) return cb(err);
            return cb(null, newUser);
          });
        }
      });
    }
  )
);
