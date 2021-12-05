const mongoose = require("mongoose");

//BOOK SCHEMA
const BookSchema = mongoose.Schema({
  ISBN: String,
  title: String,
  pubDate: String,
  language: String,
  numPage: Number,
  author: [String],
  publications: Number,
  category: [String]
});

const BookModel = mongoose.model("books",BookSchema);

module.exports = BookModel;
