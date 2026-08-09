const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully ✅"))
  .catch((err) => console.log("MongoDB Connection Error ❌", err));

// JSON data read karne ke liye
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("JobBridge Backend is Running 🚀");
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});