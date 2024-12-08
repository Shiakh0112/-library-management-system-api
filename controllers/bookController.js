const Book = require("../models/Book");

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author", "name");
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new book
const addBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a book
const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Book updated successfully", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBooks, addBook, updateBook, deleteBook };
