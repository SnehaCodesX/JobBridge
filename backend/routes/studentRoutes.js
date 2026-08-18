const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  getStudentProfile,
  createOrUpdateStudentProfile,
} = require("../controllers/studentController");

const router = express.Router();

// ===============================
// STUDENT PROFILE
// ===============================

router.get("/profile", protect, getStudentProfile);

router.put("/profile", protect, createOrUpdateStudentProfile);

module.exports = router;