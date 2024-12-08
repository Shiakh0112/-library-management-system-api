const Author = require("../models/Author");

// Get all authors
const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new author
const addAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json({ message: "Author added successfully", author });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an author
const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Author updated successfully", author });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an author
const deleteAuthor = async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);
    res.json({ message: "Author deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAuthors, addAuthor, updateAuthor, deleteAuthor };
