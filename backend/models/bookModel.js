const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("book", bookSchema); //("/name/", /Schema/)
