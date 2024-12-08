const express = require("express");
const {
  borrowBook,
  returnBook,
} = require("../controllers/borrowingController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.use(authMiddleware);

router.post("/borrow", borrowBook);
router.post("/return/:id", returnBook);

module.exports = router;
