<<<<<<< HEAD
module.exports = {
  'facebookAuth' : {
    'clientID'      : '480519705750299', // your App ID
    'clientSecret'  : 'ca29e1256db907fd039d311c16c096a2', // your App Secret
    'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
    'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
},
googleAuth: {
  clientID:
    "964808011168-29vqsooppd769hk90kjbjm5gld0glssb.apps.googleusercontent.com",
  clientSecret: "KnH-rZC23z4fr2CN4ISK4srN",
  callbackURL: "http://localhost:8080/auth/facebook/callback"
},
  mongoURI:
    "mongodb://abarbosa:adrian100@ds137601.mlab.com:37601/automotiveadrian",
  secretOrKey: "secret"
};
=======
if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
>>>>>>> f391ed205c365ebe5e18d6adcb499cc835d55289
