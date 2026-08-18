import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostJob.css";

function PostJob() {
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    company: "JobBridge Company",
    location: "",
    jobType: "Full Time",
    experience: "",
    salary: "",
    category: "",
    description: "",
    skills: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      title: job.title,
      location: job.location,
      type: job.jobType,
      applicants: 0,
      posted: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "Active",
      experience: job.experience,
      salary: job.salary,
      category: job.category,
      description: job.description,
      skills: job.skills,
      company: job.company,
    };

    const existingJobs =
      JSON.parse(localStorage.getItem("jobbridgeJobs")) || [];

    localStorage.setItem(
      "jobbridgeJobs",
      JSON.stringify([...existingJobs, newJob])
    );

    alert("Job posted successfully!");

    navigate("/company/manage-jobs");
  };

  const skillList = job.skills
    ? job.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill !== "")
    : [];

  return (
    <div className="post-job-page">

      {/* ================= HEADER ================= */}

      <div className="post-job-header">

        <div className="post-job-title">

          <div className="post-job-icon">
            ＋
          </div>

          <div>

            <span className="post-job-badge">
              COMPANY PANEL
            </span>

            <h1>Post a New Job</h1>

            <p>
              Create a new opportunity and connect with talented candidates.
            </p>

          </div>

        </div>

      </div>


      {/* ================= MAIN LAYOUT ================= */}

      <div className="post-job-layout">

        {/* ================= FORM ================= */}

        <form
          className="job-form"
          onSubmit={handleSubmit}
        >

          {/* ================= JOB INFORMATION ================= */}

          <div className="form-section">

            <div className="form-section-header">

              <div className="form-section-icon">
                💼
              </div>

              <div>
                <h2>Job Information</h2>

                <p>
                  Add the basic details about this job.
                </p>
              </div>

            </div>


            <div className="form-grid">

              {/* Job Title */}

              <div className="form-group">

                <label>
                  Job Title
                  <span className="required">*</span>
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Frontend Developer"
                  value={job.title}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Company */}

              <div className="form-group">

                <label>
                  Company Name
                  <span className="required">*</span>
                </label>

                <input
                  type="text"
                  name="company"
                  value={job.company}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Location */}

              <div className="form-group">

                <label>
                  Location
                  <span className="required">*</span>
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="e.g. New Delhi / Remote"
                  value={job.location}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Job Type */}

              <div className="form-group">

                <label>
                  Job Type
                </label>

                <select
                  name="jobType"
                  value={job.jobType}
                  onChange={handleChange}
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                  <option>Contract</option>
                  <option>Remote</option>
                </select>

              </div>


              {/* Experience */}

              <div className="form-group">

                <label>
                  Experience
                  <span className="required">*</span>
                </label>

                <input
                  type="text"
                  name="experience"
                  placeholder="e.g. 0-2 Years"
                  value={job.experience}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Salary */}

              <div className="form-group">

                <label>
                  Salary
                </label>

                <input
                  type="text"
                  name="salary"
                  placeholder="e.g. ₹4 - ₹6 LPA"
                  value={job.salary}
                  onChange={handleChange}
                />

              </div>


              {/* Category */}

              <div className="form-group">

                <label>
                  Job Category
                  <span className="required">*</span>
                </label>

                <select
                  name="category"
                  value={job.category}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Category
                  </option>

                  <option>
                    Software Development
                  </option>

                  <option>
                    Design
                  </option>

                  <option>
                    Marketing
                  </option>

                  <option>
                    Sales
                  </option>

                  <option>
                    Human Resources
                  </option>

                  <option>
                    Finance
                  </option>

                  <option>
                    Other
                  </option>

                </select>

              </div>

            </div>

          </div>


          {/* ================= DESCRIPTION ================= */}

          <div className="form-section">

            <div className="form-section-header">

              <div className="form-section-icon">
                📝
              </div>

              <div>
                <h2>Job Description</h2>

                <p>
                  Tell candidates about the role and responsibilities.
                </p>
              </div>

            </div>


            <div className="form-group full-width">

              <label>
                Description
                <span className="required">*</span>
              </label>

              <textarea
                name="description"
                rows="7"
                placeholder="Describe the job role, responsibilities, requirements and what the candidate will be working on..."
                value={job.description}
                onChange={handleChange}
                required
              ></textarea>

              <small>
                A detailed description helps candidates understand the role better.
              </small>

            </div>

          </div>


          {/* ================= SKILLS ================= */}

          <div className="form-section">

            <div className="form-section-header">

              <div className="form-section-icon">
                🎯
              </div>

              <div>
                <h2>Required Skills</h2>

                <p>
                  Add the skills required for this position.
                </p>
              </div>

            </div>


            <div className="form-group">

              <label>
                Skills
                <span className="required">*</span>
              </label>

              <input
                type="text"
                name="skills"
                placeholder="e.g. React, JavaScript, HTML, CSS"
                value={job.skills}
                onChange={handleChange}
                required
              />

              <small>
                Separate multiple skills using commas.
              </small>

            </div>


            {/* Skill Preview */}

            {skillList.length > 0 && (

              <div className="preview-skills">

                {skillList.map((skill, index) => (

                  <span key={index}>
                    {skill}
                  </span>

                ))}

              </div>

            )}

          </div>


          {/* ================= ACTIONS ================= */}

          <div className="form-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={() =>
                navigate("/company/dashboard")
              }
            >
              Cancel
            </button>


            <button
              type="button"
              className="draft-btn"
              onClick={() => alert("Job saved as draft!")}
            >
              💾 Save Draft
            </button>


            <button
              type="submit"
              className="submit-job-btn"
            >
              🚀 Post Job
            </button>

          </div>

        </form>


        {/* ================= RIGHT SIDEBAR ================= */}

        <aside className="job-sidebar">


          {/* Job Preview */}

          <div className="job-preview-card">

            <span className="preview-label">
              LIVE PREVIEW
            </span>

            <h3>
              {job.title || "Your Job Title"}
            </h3>

            <div className="preview-company">
              {job.company || "Company Name"}
            </div>


            <div className="preview-details">

              <span>
                📍 {job.location || "Location"}
              </span>

              <span>
                💼 {job.jobType}
              </span>

              <span>
                🎯 {job.experience || "Experience"}
              </span>

              <span>
                💰 {job.salary || "Salary not specified"}
              </span>

              <span>
                🏷️ {job.category || "Job Category"}
              </span>

            </div>


            {skillList.length > 0 && (

              <div className="preview-skills">

                {skillList.map((skill, index) => (

                  <span key={index}>
                    {skill}
                  </span>

                ))}

              </div>

            )}

          </div>


          {/* Hiring Tips */}

          <div className="job-tip-card">

            <h3>
              💡 Hiring Tip
            </h3>

            <p>
              Write a clear job description and mention
              the most important skills. Detailed job posts
              attract better candidates.
            </p>

          </div>


          {/* Posting Checklist */}

          <div className="job-preview-card">

            <span className="preview-label">
              POSTING CHECKLIST
            </span>

            <div className="preview-details">

              <span>
                {job.title ? "✓" : "○"} Job title
              </span>

              <span>
                {job.location ? "✓" : "○"} Location
              </span>

              <span>
                {job.experience ? "✓" : "○"} Experience
              </span>

              <span>
                {job.description ? "✓" : "○"} Description
              </span>

              <span>
                {job.skills ? "✓" : "○"} Required skills
              </span>

            </div>

          </div>

        </aside>

      </div>

    </div>
  );
}

export default PostJob;