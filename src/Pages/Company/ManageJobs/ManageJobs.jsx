import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageJobs.css";

function ManageJobs() {
  const navigate = useNavigate();

  const defaultJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "New Delhi",
      type: "Full Time",
      applicants: 24,
      posted: "10 Aug 2026",
      status: "Active",
    },
    {
      id: 2,
      title: "React Developer",
      location: "Remote",
      type: "Full Time",
      applicants: 18,
      posted: "08 Aug 2026",
      status: "Active",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Gurugram",
      type: "Part Time",
      applicants: 12,
      posted: "05 Aug 2026",
      status: "Closed",
    },
  ];

  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobbridgeJobs");

    if (savedJobs) {
      return [...defaultJobs, ...JSON.parse(savedJobs)];
    }

    return defaultJobs;
  });

  useEffect(() => {
    const savedJobs = jobs.filter(
      (job) => job.id > 100000000000
    );

    localStorage.setItem("jobbridgeJobs", JSON.stringify(savedJobs));
  }, [jobs]);

  const toggleStatus = (id) => {
    setJobs(
      jobs.map((job) =>
        job.id === id
          ? {
              ...job,
              status:
                job.status === "Active" ? "Closed" : "Active",
            }
          : job
      )
    );
  };

  const deleteJob = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (confirmDelete) {
      setJobs(jobs.filter((job) => job.id !== id));
    }
  };

  return (
    <div className="manage-jobs-page">

      <div className="manage-jobs-header">

        <div>
          <h1>Manage Jobs</h1>
          <p>View and manage all your posted jobs.</p>
        </div>

        <button
          className="new-job-btn"
          onClick={() => navigate("/company/post-job")}
        >
          + Post New Job
        </button>

      </div>

      <div className="jobs-summary">

        <div className="summary-card">
          <span>Total Jobs</span>
          <strong>{jobs.length}</strong>
        </div>

        <div className="summary-card">
          <span>Active Jobs</span>
          <strong>
            {jobs.filter(
              (job) => job.status === "Active"
            ).length}
          </strong>
        </div>

        <div className="summary-card">
          <span>Total Applicants</span>
          <strong>
            {jobs.reduce(
              (total, job) => total + job.applicants,
              0
            )}
          </strong>
        </div>

      </div>

      <div className="jobs-table-container">

        <table className="jobs-table">

          <thead>
            <tr>
              <th>Job Title</th>
              <th>Location</th>
              <th>Type</th>
              <th>Applicants</th>
              <th>Posted Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {jobs.length > 0 ? (

              jobs.map((job) => (

                <tr key={job.id}>

                  <td>
                    <strong>{job.title}</strong>
                  </td>

                  <td>{job.location}</td>

                  <td>{job.type}</td>

                  <td>{job.applicants}</td>

                  <td>{job.posted}</td>

                  <td>

                    <span
                      className={`job-status ${
                        job.status === "Active"
                          ? "active"
                          : "closed"
                      }`}
                    >
                      {job.status}
                    </span>

                  </td>

                  <td>

                    <div className="job-actions">

                      <button
                        className="view-btn"
                        onClick={() =>
                          alert(
                            `Job: ${job.title}\nLocation: ${job.location}\nType: ${job.type}`
                          )
                        }
                      >
                        View
                      </button>

                      <button
                        className="edit-btn"
                        onClick={() =>
                          alert("Edit feature coming soon!")
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="status-btn"
                        onClick={() =>
                          toggleStatus(job.id)
                        }
                      >
                        {job.status === "Active"
                          ? "Close"
                          : "Activate"}
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteJob(job.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td colSpan="7" className="no-jobs">
                  No jobs found.
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageJobs;