const Job = require("../models/Job");
const Company = require("../models/Company");

// ===============================
// CREATE JOB
// ===============================
const createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      skills,
      location,
      jobType,
      experience,
      salary,
      openings,
      deadline,
      category,
    } = req.body;

    if (!title || !description || !location || !jobType) {
      return res.status(400).json({
        message: "Title, description, location and job type are required",
      });
    }

    const company = await Company.findOne({
      user: req.user._id,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company profile not found",
      });
    }

    const job = await Job.create({
      company: company._id,
      title,
      description,
      skills,
      location,
      jobType,
      experience,
      salary,
      openings,
      deadline,
      category,
    });

    res.status(201).json({
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    console.error("Create Job Error:", error);

    res.status(500).json({
      message: "Server error while creating job",
    });
  }
};

// ===============================
// GET ALL JOBS
// ===============================
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      status: "Active",
    })
      .populate(
        "company",
        "companyName industry location logo website"
      )
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "Jobs fetched successfully",
      count: jobs.length,
      jobs,
    });
  } catch (error) {
    console.error("Get All Jobs Error:", error);

    res.status(500).json({
      message: "Server error while fetching jobs",
    });
  }
};

// ===============================
// GET SINGLE JOB
// ===============================
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "company",
      "companyName industry location logo website description"
    );

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json({
      message: "Job fetched successfully",
      job,
    });
  } catch (error) {
    console.error("Get Job Error:", error);

    res.status(500).json({
      message: "Server error while fetching job",
    });
  }
};

// ===============================
// UPDATE JOB
// ===============================
const updateJob = async (req, res) => {
  try {
    const company = await Company.findOne({
      user: req.user._id,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company profile not found",
      });
    }

    const job = await Job.findOne({
      _id: req.params.id,
      company: company._id,
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found or you are not authorized",
      });
    }

    const allowedFields = [
      "title",
      "description",
      "skills",
      "location",
      "jobType",
      "experience",
      "salary",
      "openings",
      "deadline",
      "category",
      "status",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        job[field] = req.body[field];
      }
    });

    await job.save();

    res.status(200).json({
      message: "Job updated successfully",
      job,
    });
  } catch (error) {
    console.error("Update Job Error:", error);

    res.status(500).json({
      message: "Server error while updating job",
    });
  }
};

// ===============================
// DELETE JOB
// ===============================
const deleteJob = async (req, res) => {
  try {
    const company = await Company.findOne({
      user: req.user._id,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company profile not found",
      });
    }

    const job = await Job.findOne({
      _id: req.params.id,
      company: company._id,
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found or you are not authorized",
      });
    }

    await job.deleteOne();

    res.status(200).json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error("Delete Job Error:", error);

    res.status(500).json({
      message: "Server error while deleting job",
    });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
};