const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/profile");
  }
);

router.get("auth/logout", (req, res) => {
  res.send(req.user);
});

router.get("/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
