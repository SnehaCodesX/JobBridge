import { useEffect, useState } from "react";
import "./BrowseJobs.css";

function BrowseJobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);

  const defaultJobs = [
    {
      id: 1,
      title: "React Developer",
      company: "Tech Solutions",
      location: "New Delhi",
      type: "Full Time",
      experience: "1-3 Years",
      salary: "₹4 - ₹6 LPA",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital India Pvt Ltd",
      location: "Remote",
      type: "Full Time",
      experience: "2-4 Years",
      salary: "₹5 - ₹8 LPA",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Gurugram",
      type: "Full Time",
      experience: "1-3 Years",
      salary: "₹3 - ₹5 LPA",
    },
    {
      id: 4,
      title: "Python Developer",
      company: "CodeTech Solutions",
      location: "Bangalore",
      type: "Full Time",
      experience: "2-4 Years",
      salary: "₹4 - ₹7 LPA",
    },
  ];

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobbridgeJobs");

    if (storedJobs) {
      try {
        const parsedJobs = JSON.parse(storedJobs);
        setJobs(parsedJobs.length > 0 ? parsedJobs : defaultJobs);
      } catch {
        setJobs(defaultJobs);
      }
    } else {
      setJobs(defaultJobs);
    }

    const storedSavedJobs = localStorage.getItem("jobbridgeSavedJobs");

    if (storedSavedJobs) {
      try {
        setSavedJobs(JSON.parse(storedSavedJobs));
      } catch {
        setSavedJobs([]);
      }
    }
  }, []);

  const handleSaveJob = (job) => {
    const alreadySaved = savedJobs.some(
      (savedJob) => savedJob.id === job.id
    );

    let updatedSavedJobs;

    if (alreadySaved) {
      updatedSavedJobs = savedJobs.filter(
        (savedJob) => savedJob.id !== job.id
      );
    } else {
      updatedSavedJobs = [...savedJobs, job];
    }

    setSavedJobs(updatedSavedJobs);

    localStorage.setItem(
      "jobbridgeSavedJobs",
      JSON.stringify(updatedSavedJobs)
    );
  };

  const handleApply = (job) => {
    const existingApplications =
      JSON.parse(localStorage.getItem("jobbridgeApplications")) || [];

    const alreadyApplied = existingApplications.some(
      (application) => application.jobId === job.id
    );

    if (alreadyApplied) {
      alert("You have already applied for this job.");
      return;
    }

    const newApplication = {
      id: Date.now(),
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      jobType: job.type,
      experience: job.experience,
      candidateName: "Shivani",
      status: "Pending",
      appliedAt: new Date().toISOString(),
    };

    const updatedApplications = [
      ...existingApplications,
      newApplication,
    ];

    localStorage.setItem(
      "jobbridgeApplications",
      JSON.stringify(updatedApplications)
    );

    alert(`Application submitted for ${job.title}`);
  };

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase();
    const locationText = location.toLowerCase();

    const matchesSearch =
      job.title?.toLowerCase().includes(searchText) ||
      job.company?.toLowerCase().includes(searchText);

    const matchesLocation =
      job.location?.toLowerCase().includes(locationText);

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="browse-jobs-page">

      <div className="browse-jobs-header">
        <div>
          <h1>Browse Jobs</h1>
          <p>
            Find your dream job and take the next step in your career.
          </p>
        </div>
      </div>

      <div className="job-search-box">

        <div className="search-input">
          <label>Search Jobs</label>

          <input
            type="text"
            placeholder="Job title or company"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="search-input">
          <label>Location</label>

          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button className="search-btn">
          Search
        </button>

      </div>

      <div className="jobs-section">

        <div className="jobs-section-header">
          <h2>Available Jobs</h2>
          <span>{filteredJobs.length} Jobs Found</span>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="no-jobs">
            <h3>No jobs found</h3>
            <p>
              Try searching with a different job title or location.
            </p>
          </div>
        ) : (
          <div className="jobs-grid">

            {filteredJobs.map((job) => {

              const isSaved = savedJobs.some(
                (savedJob) => savedJob.id === job.id
              );

              return (
                <div className="job-card" key={job.id}>

                  <div className="job-card-top">

                    <div className="company-logo">
                      {job.company?.charAt(0) || "J"}
                    </div>

                    <button
                      className={`save-job-btn ${
                        isSaved ? "saved" : ""
                      }`}
                      onClick={() => handleSaveJob(job)}
                    >
                      {isSaved ? "♥" : "♡"}
                    </button>

                  </div>

                  <h3>{job.title}</h3>

                  <p className="company-name">
                    {job.company}
                  </p>

                  <div className="job-info">
                    <span>📍 {job.location}</span>
                    <span>💼 {job.type}</span>
                    <span>⏱ {job.experience}</span>
                  </div>

                  <div className="job-salary">
                    {job.salary}
                  </div>

                  <button
                    className="apply-btn"
                    onClick={() => handleApply(job)}
                  >
                    Apply Now
                  </button>

                </div>
              );
            })}

          </div>
        )}

      </div>

    </div>
  );
}

export default BrowseJobs;