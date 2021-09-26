const mongoose = require("mongoose");

const liqaa = mongoose.Schema({
  title: { type: String },
  image: { type: String, required: true },
  content: { type: String },
  tag: { type: String },
  author: { type: String },
  comments: { type: Array },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Liqaa", liqaa);
