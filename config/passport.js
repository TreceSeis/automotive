const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookStrategy = require("passport-facebook").Strategy; //FB
const GoogleStrategy = require("passport-google-oauth20").Strategy; //G
const configAuth = require("./auth");
const passport = require("passport");

const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

//fb login
passport.serializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  passport.use(
    //G
    new GoogleStrategy(
      {
        callbackURL: "/auth/google/callback",
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const existingUser = await User.findOne({ googleId: profile.id });
          if (existingUser) {
            return done(null, existingUser);
          }
          const user = await new User({
            googleId: profile.id,
            displayName: profile.displayName
          }).save();
          done(null, user);
        } catch (err) {
          done(err, null);
        }
      }
    )
  );

  passport.use(
    //FB
    new FacebookStrategy(
      {
        clientID: configAuth.facebookAuth.clientID,
        clientSecret: configAuth.facebookAuth.clientSecret,
        callbackURL: configAuth.facebookAuth.callbackURL,
        profileFields: ["id", "first_name", "last_name", "email"]
      },
      function(token, refreshToken, profile, done) {
        process.nextTick(function() {
          User.findOne({ "facebook.id": profile.id }, function(err, user) {
            if (err) return done(err);

            if (user) {
              return done(null, user);
            } else {
              const newUser = new User();
              newUser.facebook.id = profile.id;
              newUser.facebook.token = token;
              newUser.facebook.name =
                profile.name.givenName + " " + profile.name.familyName;
              newUser.facebook.email = profile.emails[0].value;

              newUser.save(function(err) {
                if (err) throw err;
                return done(null, newUser);
              });
            }
          });
        });
      }
    )
  );
};
