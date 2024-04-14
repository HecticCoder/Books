const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bookSchema = require("../models/bookModel");

router.get("/", async (req, res, next) => {
  const books = await bookSchema.find({});
  return res.status(200).json({
    msg: "this is the get request",
    count: books.length,
    books: books,
  });
});

router.get("/:bookId", async (req, res, next) => {
  const id = req.params.bookId;
  try {
    const book = await bookSchema.findById(id);
    return res.status(200).json({
      msg: "this is the get request",
      book: book,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "book not found" });
  }
});

router.delete("/:bookId", async (req, res, next) => {
  const id = req.params.bookId;
  try {
    const book = await bookSchema.deleteOne({ _id: id });
    return res.status(200).json({
      msg: "this is the delete request",
      book: book,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "book not deleted" });
  }
});
router.put("/:bookId", async (req, res, next) => {
  //PUT can also be used but user will have to specify all attributes
  const id = req.params.bookId;
  try {
    const book = await bookSchema.findByIdAndUpdate(id, req.body);
    return res.status(200).json({
      msg: "this is the update request",
      book: book,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "book not updated" });
  }
});

router.post("/", (req, res, next) => {
  const book = new bookSchema({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    author: req.body.author,
    publishYear: req.body.publishYear,
  });
  book.save().then((result) => {
    console.log(result);
  });
  res.status(200).json({
    msg: "this is the post request",
    book: book,
  });
});

module.exports = router;
