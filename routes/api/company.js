const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Validation
const validateCompanyInput = require("../../validation/company");
const validateJobInput = require("../../validation/jobs");

//Load User Model
const User = require("../../models/User");
//Load Company Model
const Company = require("../../models/Company");
//Load Job Model
const Job = require("../../models/Jobs");

//@route GET api/company/all
//@descr Get All Companies
//@access public
router.get("/all", (req, res) => {
  const errors = {};

  Company.find()
    .populate("user", ["name", "avatar"])
    .populate("jobs")
    .then(companies => {
      if (!companies) {
        errors.noncompany = "There are no companies";
        return res.status(404).json(errors);
      }
      res.json(companies);
    })
    .catch(err => res.status(400).json({ profile: "There are no companies" }));
});

//@route GET api/company/:_id
//@descr Get Company by id
//@access private
router.get(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Company.findOne({ _id: req.params._id })
      .populate("jobs")
      .then(company => {
        if (!company) {
          errors.noncompany = "There are no companies";
          return res.status(404).json(errors);
        }
        res.json(company);
      })
      .catch(err =>
        res.status(400).json({ company: "There is no company for this user" })
      );
  }
);
//@route POST api/company/jobs/add/:_id
//@descr POST Job to a Company
//@access private
router.post(
  "/jobs/add/:_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateJobInput(req.body);
    //Check Validation
    if (!isValid) {
      //Return any errors with 400 status
      return res.status(400).json(errors);
    }
    Company.findOne({ _id: req.params._id })
      .populate("jobs")
      .then(company => {
        const newJob = new Job();
        newJob.title = req.body.title;
        newJob.save((err, job) => {
          if (err) {
            res.send(err);
          }
          //ADD to Job array
          company.jobs.unshift(newJob);
          company.save().then(company => res.json(company));
        });
      });
  }
);

module.exports = router;
