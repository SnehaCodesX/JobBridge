const Student = require("../models/Student");

// ===============================
// GET STUDENT PROFILE
// ===============================
const getStudentProfile = async (req, res) => {
  try {
    const student = await Student.findOne({
      user: req.user._id,
    }).populate("user", "name email role");

    if (!student) {
      return res.status(404).json({
        message: "Student profile not found",
      });
    }

    res.status(200).json({
      message: "Student profile fetched successfully",
      student,
    });
  } catch (error) {
    console.error("Get Student Profile Error:", error);

    res.status(500).json({
      message: "Server error while fetching student profile",
    });
  }
};

// ===============================
// CREATE / UPDATE STUDENT PROFILE
// ===============================
const createOrUpdateStudentProfile = async (req, res) => {
  try {
    const {
      phone,
      college,
      course,
      skills,
      education,
      location,
      profilePhoto,
      resume,
      bio,
    } = req.body;

    let student = await Student.findOne({
      user: req.user._id,
    });

    if (student) {
      student.phone = phone ?? student.phone;
      student.college = college ?? student.college;
      student.course = course ?? student.course;
      student.skills = skills ?? student.skills;
      student.education = education ?? student.education;
      student.location = location ?? student.location;
      student.profilePhoto = profilePhoto ?? student.profilePhoto;
      student.resume = resume ?? student.resume;
      student.bio = bio ?? student.bio;

      await student.save();

      return res.status(200).json({
        message: "Student profile updated successfully",
        student,
      });
    }

    student = await Student.create({
      user: req.user._id,
      phone,
      college,
      course,
      skills,
      education,
      location,
      profilePhoto,
      resume,
      bio,
    });

    res.status(201).json({
      message: "Student profile created successfully",
      student,
    });
  } catch (error) {
    console.error("Student Profile Error:", error);

    res.status(500).json({
      message: "Server error while saving student profile",
    });
  }
};

module.exports = {
  getStudentProfile,
  createOrUpdateStudentProfile,
};