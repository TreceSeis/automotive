const mongoose = require("mongoose");
const company = require("./Company");
const Schema = mongoose.Schema;

//Create Schema

const JobsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Jobs = mongoose.model("jobs", JobsSchema);
