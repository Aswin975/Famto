const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createMerchant,
  getMerchants,
  getMerchantById,
  updateMerchant,
  deleteMerchant,
} = require("../controllers/merchantController");

router.post("/", protect, createMerchant);

router.get("/", protect, getMerchants);

router.get("/:id", protect, getMerchantById);

router.patch("/edit/:id", protect, updateMerchant);

router.delete("/:id", protect, deleteMerchant);

module.exports = router;