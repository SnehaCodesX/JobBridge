const Company = require("../models/Company");

// ===============================
// GET COMPANY PROFILE
// ===============================
const getCompanyProfile = async (req, res) => {
  try {
    const company = await Company.findOne({
      user: req.user._id,
    }).populate("user", "name email role");

    if (!company) {
      return res.status(404).json({
        message: "Company profile not found",
      });
    }

    res.status(200).json({
      message: "Company profile fetched successfully",
      company,
    });
  } catch (error) {
    console.error("Get Company Profile Error:", error);

    res.status(500).json({
      message: "Server error while fetching company profile",
    });
  }
};

// ===============================
// CREATE / UPDATE COMPANY PROFILE
// ===============================
const createOrUpdateCompanyProfile = async (req, res) => {
  try {
    const {
      companyName,
      description,
      industry,
      website,
      phone,
      location,
      logo,
      companySize,
      foundedYear,
    } = req.body;

    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
      });
    }

    let company = await Company.findOne({
      user: req.user._id,
    });

    if (company) {
      company.companyName = companyName ?? company.companyName;
      company.description = description ?? company.description;
      company.industry = industry ?? company.industry;
      company.website = website ?? company.website;
      company.phone = phone ?? company.phone;
      company.location = location ?? company.location;
      company.logo = logo ?? company.logo;
      company.companySize = companySize ?? company.companySize;
      company.foundedYear = foundedYear ?? company.foundedYear;

      await company.save();

      return res.status(200).json({
        message: "Company profile updated successfully",
        company,
      });
    }

    company = await Company.create({
      user: req.user._id,
      companyName,
      description,
      industry,
      website,
      phone,
      location,
      logo,
      companySize,
      foundedYear,
    });

    res.status(201).json({
      message: "Company profile created successfully",
      company,
    });
  } catch (error) {
    console.error("Company Profile Error:", error);

    res.status(500).json({
      message: "Server error while saving company profile",
    });
  }
};

module.exports = {
  getCompanyProfile,
  createOrUpdateCompanyProfile,
};