const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getMe,
} = require("../controllers/userController.js");

const { protect } = require("../middleware/authMiddleware");
// Register Route
router.post("/", registerUser);
// Login Route
router.post("/login", loginUser);
// Authentication Route
router.get("/me", protect, getMe);

module.exports = router;
