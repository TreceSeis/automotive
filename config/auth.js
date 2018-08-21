module.exports = {
  facebookAuth: {
    clientID: "480519705750299",
    clientSecret: "ca29e1256db907fd039d311c16c096a2",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileURL:
      "https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email",
    profileFields: ["id", "email", "name"]
  },
  googleAuth: {
    clientID:
      "964808011168-29vqsooppd769hk90kjbjm5gld0glssb.apps.googleusercontent.com",
    clientSecret: "KnH-rZC23z4fr2CN4ISK4srN"
  }
};
