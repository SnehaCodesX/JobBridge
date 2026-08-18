import { useNavigate } from "react-router-dom";
import "./CandidateDashboard.css";

function CandidateDashboard() {
  const navigate = useNavigate();

  return (
    <div className="candidate-dashboard">

      {/* Header */}
      <div className="candidate-header">
        <div>
          <h1>Welcome to JobBridge 👋</h1>
          <p>Find your dream job and grow your career.</p>
        </div>

        <button
          className="browse-job-btn"
          onClick={() => navigate("/candidate/jobs")}
        >
          🔍 Browse Jobs
        </button>
      </div>

      {/* Statistics */}
      <div className="candidate-cards">

        <div className="candidate-card">
          <div className="card-icon">💼</div>
          <div>
            <h3>Applied Jobs</h3>
            <h2>8</h2>
            <p>Total applications</p>
          </div>
        </div>

        <div className="candidate-card">
          <div className="card-icon">❤️</div>
          <div>
            <h3>Saved Jobs</h3>
            <h2>5</h2>
            <p>Jobs saved</p>
          </div>
        </div>

        <div className="candidate-card">
          <div className="card-icon">⭐</div>
          <div>
            <h3>Shortlisted</h3>
            <h2>3</h2>
            <p>Applications shortlisted</p>
          </div>
        </div>

        <div className="candidate-card">
          <div className="card-icon">🎯</div>
          <div>
            <h3>Interviews</h3>
            <h2>2</h2>
            <p>Upcoming interviews</p>
          </div>
        </div>

      </div>

      {/* Search */}
      <div className="candidate-search">

        <h2>Find Your Next Opportunity</h2>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search job title, skills..."
          />

          <input
            type="text"
            placeholder="Location"
          />

          <button
            onClick={() => navigate("/candidate/jobs")}
          >
            Search Jobs
          </button>

        </div>

      </div>

      {/* Recent Applications */}
      <div className="recent-candidate-applications">

        <div className="candidate-section-header">
          <h2>Recent Applications</h2>

          <button
            onClick={() => navigate("/candidate/applications")}
          >
            View All
          </button>
        </div>

        <table>

          <thead>
            <tr>
              <th>Job</th>
              <th>Company</th>
              <th>Applied Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>React Developer</td>
              <td>Tech Solutions</td>
              <td>12 Aug 2026</td>
              <td>
                <span className="candidate-status pending">
                  Pending
                </span>
              </td>
            </tr>

            <tr>
              <td>Frontend Developer</td>
              <td>Digital India Pvt Ltd</td>
              <td>10 Aug 2026</td>
              <td>
                <span className="candidate-status shortlisted">
                  Shortlisted
                </span>
              </td>
            </tr>

            <tr>
              <td>UI/UX Designer</td>
              <td>Creative Studio</td>
              <td>08 Aug 2026</td>
              <td>
                <span className="candidate-status rejected">
                  Rejected
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default CandidateDashboard;