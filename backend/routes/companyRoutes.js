const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  getCompanyProfile,
  createOrUpdateCompanyProfile,
} = require("../controllers/companyController");

const router = express.Router();

// ===============================
// COMPANY PROFILE
// ===============================

router.get("/profile", protect, getCompanyProfile);

router.put("/profile", protect, createOrUpdateCompanyProfile);

module.exports = router;