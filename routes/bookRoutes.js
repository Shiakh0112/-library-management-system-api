const express = require("express");
const {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.use(authMiddleware);

router.get("/", getBooks);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
