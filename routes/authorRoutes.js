const express = require("express");
const {
  getAuthors,
  addAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.use(authMiddleware);

router.get("/", getAuthors);
router.post("/", addAuthor);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);

module.exports = router;
