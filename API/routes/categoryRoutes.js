const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const { addCategory } = require("../controllers/categoryController");

router.post("/", protect, addCategory);

module.exports = router;