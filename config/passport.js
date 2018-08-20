const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookStrategy = require("passport-facebook").Strategy; //FB

const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

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
  passport.use(new FacebookStrategy())(
    //FB
    {
      clientID: configAuth.facebookAuth.clientID,
      clientSecret: configAuth.facebookAuth.clientSecret,
      callbackURL: configAuth.facebookAuth.callbackURL
    },
    function(token, refreshToken, profile, done) {
      process.nextTick(function() {
        User.findOne({ "facebook.id": profile.id }, function(err, user) {
          if (err) return done(err);
          if (user) {
            return done(null, user);
          } else {
            var newUser = new User();
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
  );
};
