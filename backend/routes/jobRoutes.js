const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const router = express.Router();

// ===============================
// JOB ROUTES
// ===============================

// Create Job
router.post("/", protect, createJob);

// Get All Active Jobs
router.get("/", getAllJobs);

// Get Single Job
router.get("/:id", getJobById);

// Update Job
router.put("/:id", protect, updateJob);

// Delete Job
router.delete("/:id", protect, deleteJob);

module.exports = router;