const express = require("express");
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { roleMiddleware } = require("../middlewares/roleMiddleware");
const router = express.Router();

router.use(authMiddleware);

router.get("/", roleMiddleware(["Admin"]), getUsers);
router.get("/:id", roleMiddleware(["Admin"]), getUserById);
router.put("/:id", roleMiddleware(["Admin"]), updateUser);
router.delete("/:id", roleMiddleware(["Admin"]), deleteUser);

module.exports = router;
