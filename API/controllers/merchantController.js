const Merchant = require("../models/Merchant");

const createMerchant = async (req, res) => {
  try {
    const merchant = await Merchant.create(req.body);

    res.status(201).json(merchant);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMerchants = async (req, res) => {
  try {
    const merchants = await Merchant.find().populate("category");

    res.status(200).json(merchants);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMerchantById = async (req, res) => {
  try {
    const merchant = await Merchant.findById(req.params.id)
      .populate("category");

    if (!merchant) {
      return res.status(404).json({
        message: "Merchant not found",
      });
    }

    res.status(200).json(merchant);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateMerchant = async (req, res) => {
  try {
    const merchant = await Merchant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(merchant);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteMerchant = async (req, res) => {
  try {
    await Merchant.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Merchant Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMerchant, getMerchants, getMerchantById, updateMerchant,    deleteMerchant,
};