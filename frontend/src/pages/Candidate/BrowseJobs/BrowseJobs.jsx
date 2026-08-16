import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BrowseJobs.css";

function BrowseJobs() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [jobs] = useState([
    {
      id: 1,
      title: "React Developer",
      company: "Tech Solutions",
      location: "New Delhi",
      type: "Full Time",
      experience: "0-2 Years",
      salary: "₹4 - ₹6 LPA",
      skills: "React, JavaScript, HTML, CSS",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital India Pvt Ltd",
      location: "Remote",
      type: "Full Time",
      experience: "1-3 Years",
      salary: "₹5 - ₹8 LPA",
      skills: "HTML, CSS, JavaScript, React",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Gurugram",
      type: "Part Time",
      experience: "1-2 Years",
      salary: "₹3 - ₹5 LPA",
      skills: "Figma, UI Design, UX Research",
    },
    {
      id: 4,
      title: "Python Developer",
      company: "CodeTech Solutions",
      location: "Bangalore",
      type: "Full Time",
      experience: "0-2 Years",
      salary: "₹4 - ₹7 LPA",
      skills: "Python, Django, SQL",
    },
  ]);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="browse-jobs-page">

      <div className="browse-header">
        <div>
          <h1>Browse Jobs</h1>
          <p>Find the right opportunity for your career.</p>
        </div>

        <button
          className="application-btn"
          onClick={() => navigate("/candidate/applications")}
        >
          My Applications
        </button>
      </div>

      <div className="job-search-section">

        <input
          type="text"
          placeholder="Search job title, company or skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          placeholder="📍 Location"
        />

        <button>Search</button>

      </div>

      <div className="jobs-heading">
        <h2>Available Jobs</h2>
        <span>{filteredJobs.length} jobs found</span>
      </div>

      <div className="jobs-grid">

        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (

            <div className="job-card" key={job.id}>

              <div className="job-card-top">

                <div className="company-logo">
                  {job.company.charAt(0)}
                </div>

                <button className="save-job">
                  ♡
                </button>

              </div>

              <h2>{job.title}</h2>

              <h3>{job.company}</h3>

              <div className="job-details">
                <span>📍 {job.location}</span>
                <span>💼 {job.type}</span>
                <span>🎯 {job.experience}</span>
                <span>💰 {job.salary}</span>
              </div>

              <div className="skills">
                {job.skills.split(",").map((skill) => (
                  <span key={skill}>
                    {skill.trim()}
                  </span>
                ))}
              </div>

              <button
                className="apply-btn"
                onClick={() =>
                  navigate(`/candidate/job/${job.id}`)
                }
              >
                Apply Now
              </button>

            </div>

          ))
        ) : (
          <div className="no-jobs">
            <h2>No jobs found 😔</h2>
            <p>Try searching with another keyword.</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default BrowseJobs;