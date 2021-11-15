const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
// const GoogleStrategy = require("passport-google-oauth2").Strategy;
// const FacebookStrategy = require("passport-facebook");

const ExtractJwt = require("passport-jwt").ExtractJwt;

const keys = require("./keys");

const { google, facebook } = keys;
const { serverURL, apiURL } = keys.app;

const User = require("../models/userModel.js");
const secret = keys.jwt.secret;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secret;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      User.findById(payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }

          return done(null, false);
        })
        .catch((err) => {
          return done(err, false);
        });
    })
  );

  //   passport.use(
  //     new GoogleStrategy(
  //       {
  //         clientID: google.clientID,
  //         clientSecret: google.clientSecret,
  //         callbackURL: `${serverURL}/${apiURL}/${google.callbackURL}`,
  //       },

  //       async (accessToken, refreshToken, profile, done) => {
  //         const name = profile.displayName.split(" ");

  //         const newUser = {
  //           provider: "google",
  //           googleId: profile.id,
  //           email: profile.email,
  //           firstName: name[0],
  //           lastName: name[1],
  //           avatar: profile.picture,
  //           password: null,
  //           isActivated: true,
  //         };
  //         try {
  //           let user = await User.findOne({ email: profile.email });
  //           if (user) {
  //             return done(null, user);
  //           } else {
  //             user = await User.create(newUser);
  //             return done(null, user);
  //           }
  //         } catch (err) {
  //           console.error(err);
  //         }
  //       }
  //     )
  //   );
};

passport.serializeUser((user, done) => {
  console.log("Serialized " + user);
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("Deserialized " + id);
  return User.findById(id, (err, user) => done(err, user));
});
