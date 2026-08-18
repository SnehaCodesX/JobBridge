const dns = require("dns");

// MongoDB Atlas DNS issue ke liye Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
require("dotenv").config();

const adminOnly = require("./middleware/adminMiddleware");

const protect = require("./middleware/authMiddleware");

const mongoose = require("mongoose");


const app = express();

const PORT = process.env.PORT || 5000;

// ===============================
// MONGODB CONNECTION
// ===============================
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully ✅"))
  .catch((err) => console.log("MongoDB Connection Error ❌", err));

// ===============================
// MIDDLEWARE
// ===============================
app.use(express.json());

// ===============================
// AUTH ROUTES
// ===============================
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// student ROUTES
// 
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

// company ROUTES
// 

const companyRoutes = require("./routes/companyRoutes");
app.use("/api/companies", companyRoutes);

// job ROUTES
// 

const jobRoutes = require("./routes/jobRoutes");

app.use("/api/jobs", jobRoutes);

// ===============================
// TEST ROUTE
// ===============================
app.get("/", (req, res) => {
  res.send("JobBridge Backend is Running 🚀");
});

app.get("/api/test-protected", protect, (req, res) => {
  res.status(200).json({
    message: "Protected route working successfully ✅",
    user: req.user,
  });
});

app.get("/api/test-admin", protect, adminOnly, (req, res) => {
  res.status(200).json({
    message: "Admin route working successfully ✅",
    user: req.user,
  });
});

// ===============================
// SERVER START
// ===============================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});