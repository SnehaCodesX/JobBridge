import { useState } from "react";
import "./Applicants.css";

function Applicants() {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      job: "React Developer",
      experience: "Fresher",
      status: "Pending",
    },
    {
      id: 2,
      name: "Aman Verma",
      email: "aman@gmail.com",
      job: "Frontend Developer",
      experience: "1 Year",
      status: "Shortlisted",
    },
    {
      id: 3,
      name: "Priya Singh",
      email: "priya@gmail.com",
      job: "UI/UX Designer",
      experience: "2 Years",
      status: "Rejected",
    },
    {
      id: 4,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      job: "Frontend Developer",
      experience: "1 Year",
      status: "Pending",
    },
  ]);

  const updateStatus = (id, status) => {
    setApplicants(
      applicants.map((applicant) =>
        applicant.id === id
          ? { ...applicant, status }
          : applicant
      )
    );
  };

  return (
    <div className="applicants-page">

      <div className="applicants-header">
        <div>
          <h1>Applicants</h1>
          <p>Manage candidates who applied for your jobs.</p>
        </div>
      </div>

      <div className="applicant-summary">

        <div className="applicant-summary-card">
          <span>Total Applicants</span>
          <strong>{applicants.length}</strong>
        </div>

        <div className="applicant-summary-card">
          <span>Pending</span>
          <strong>
            {
              applicants.filter(
                (a) => a.status === "Pending"
              ).length
            }
          </strong>
        </div>

        <div className="applicant-summary-card">
          <span>Shortlisted</span>
          <strong>
            {
              applicants.filter(
                (a) => a.status === "Shortlisted"
              ).length
            }
          </strong>
        </div>

      </div>

      <div className="applicants-card">

        <table className="applicants-table">

          <thead>
            <tr>
              <th>Candidate</th>
              <th>Job</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {applicants.map((applicant) => (

              <tr key={applicant.id}>

                <td>
                  <div className="candidate-info">

                    <div className="candidate-avatar">
                      {applicant.name.charAt(0)}
                    </div>

                    <div>
                      <strong className="applicant-name">
                        {applicant.name}
                      </strong>

                      <small>
                        {applicant.email}
                      </small>
                    </div>

                  </div>
                </td>

                <td>{applicant.job}</td>

                <td>{applicant.experience}</td>

                <td>
                  <span
                    className={`applicant-status ${applicant.status.toLowerCase()}`}
                  >
                    {applicant.status}
                  </span>
                </td>

                <td>

                  <div className="applicant-actions">

                    <button
                      className="shortlist-btn"
                      onClick={() =>
                        updateStatus(
                          applicant.id,
                          "Shortlisted"
                        )
                      }
                    >
                      Shortlist
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() =>
                        updateStatus(
                          applicant.id,
                          "Rejected"
                        )
                      }
                    >
                      Reject
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Applicants;