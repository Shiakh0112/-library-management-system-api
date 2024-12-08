const BorrowingTransaction = require("../models/BorrowingTransaction");

// Borrow a book
const borrowBook = async (req, res) => {
  const { bookId, dueDate } = req.body;

  try {
    const transaction = new BorrowingTransaction({
      book: bookId,
      member: req.user._id,
      dueDate,
    });

    await transaction.save();
    res
      .status(201)
      .json({ message: "Book borrowed successfully", transaction });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Return a book
const returnBook = async (req, res) => {
  try {
    const transaction = await BorrowingTransaction.findByIdAndUpdate(
      req.params.id,
      { status: "Returned", returnDate: new Date() },
      { new: true }
    );

    res.json({ message: "Book returned successfully", transaction });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { borrowBook, returnBook };
