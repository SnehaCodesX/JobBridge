import { useNavigate } from "react-router-dom";
import "./CompanyDashboard.css";
import CompanySidebar from "../CompanySidebar/CompanySidebar";

function CompanyDashboard() {
  const navigate = useNavigate();

  return (
    <div className="company-dashboard">

      {/* Sidebar */}
      <CompanySidebar />

      {/* Main Content */}
      <main className="dashboard-content">

        {/* Header */}
        <div className="dashboard-header">

          <div className="dashboard-welcome">
            <span className="welcome-badge">
              Company Panel
            </span>

            <h1>Company Dashboard 👋</h1>

            <p>
              Welcome back! Manage your jobs and find the best candidates.
            </p>
          </div>

          <button
            className="post-job-btn"
            onClick={() => navigate("/company/post-job")}
          >
            <span>＋</span>
            Post New Job
          </button>

        </div>


        {/* Statistics */}
        <div className="dashboard-cards">

          {/* Total Jobs */}
          <div className="dashboard-card">

            <div className="card-top">

              <div className="dashboard-card-icon purple">
                💼
              </div>

              <span className="card-growth">
                +12%
              </span>

            </div>

            <p className="card-title">
              Total Jobs
            </p>

            <h2>
              12
            </h2>

            <span className="card-subtitle">
              All posted jobs
            </span>

          </div>


          {/* Active Jobs */}
          <div className="dashboard-card">

            <div className="card-top">

              <div className="dashboard-card-icon blue">
                ⚡
              </div>

              <span className="card-growth">
                +8%
              </span>

            </div>

            <p className="card-title">
              Active Jobs
            </p>

            <h2>
              8
            </h2>

            <span className="card-subtitle">
              Currently active
            </span>

          </div>


          {/* Applications */}
          <div className="dashboard-card">

            <div className="card-top">

              <div className="dashboard-card-icon orange">
                👥
              </div>

              <span className="card-growth">
                +18%
              </span>

            </div>

            <p className="card-title">
              Applications
            </p>

            <h2>
              156
            </h2>

            <span className="card-subtitle">
              Applications received
            </span>

          </div>


          {/* Shortlisted */}
          <div className="dashboard-card">

            <div className="card-top">

              <div className="dashboard-card-icon green">
                ⭐
              </div>

              <span className="card-growth">
                +6%
              </span>

            </div>

            <p className="card-title">
              Shortlisted
            </p>

            <h2>
              24
            </h2>

            <span className="card-subtitle">
              Selected candidates
            </span>

          </div>

        </div>


        {/* Quick Actions */}
        <div className="quick-actions">

          <div>
            <h2>
              Quick Actions
            </h2>

            <p>
              Manage your hiring activities quickly.
            </p>
          </div>


          <div className="quick-action-buttons">

            {/* 1. Post Job */}
            <button
              onClick={() => navigate("/company/post-job")}
            >
              <span>＋</span>
              Post Job
            </button>


            {/* 2. Manage Jobs */}
            <button
              onClick={() => navigate("/company/manage-jobs")}
            >
              <span>📋</span>
              Manage Jobs
            </button>


            {/* 3. View Applicants */}
            <button
              onClick={() => navigate("/company/applicants")}
            >
              <span>👥</span>
              View Applicants
            </button>


            {/* 4. Company Profile */}
            <button
              onClick={() => navigate("/company/profile")}
            >
              <span>👤</span>
              Company Profile
            </button>


            {/* 5. Notifications */}
            <button
              onClick={() => navigate("/company/notifications")}
            >
              <span>🔔</span>
              Notifications
            </button>


            {/* 6. Hiring Analytics */}
            <button
              onClick={() => navigate("/company/analytics")}
            >
              <span>📊</span>
              Hiring Analytics
            </button>

          </div>

        </div>


        {/* Recent Applications */}
        <div className="recent-applications">

          <div className="section-header">

            <div>

              <h2>
                Recent Applications
              </h2>

              <p>
                Latest candidates who applied for your jobs.
              </p>

            </div>


            <button
              onClick={() => navigate("/company/applicants")}
            >
              View All →
            </button>

          </div>


          {/* Applications Table */}
          <div className="applications-table-wrapper">

            <table>

              <thead>

                <tr>
                  <th>
                    Candidate
                  </th>

                  <th>
                    Job Position
                  </th>

                  <th>
                    Experience
                  </th>

                  <th>
                    Status
                  </th>
                </tr>

              </thead>


              <tbody>

                {/* Rahul */}
                <tr>

                  <td>

                    <div className="candidate-cell">

                      <div className="candidate-avatar">
                        R
                      </div>

                      <div>

                        <strong>
                          Rahul Sharma
                        </strong>

                        <small>
                          rahul@gmail.com
                        </small>

                      </div>

                    </div>

                  </td>


                  <td>
                    React Developer
                  </td>


                  <td>
                    Fresher
                  </td>


                  <td>

                    <span className="status pending">
                      Pending
                    </span>

                  </td>

                </tr>


                {/* Aman */}
                <tr>

                  <td>

                    <div className="candidate-cell">

                      <div className="candidate-avatar blue-avatar">
                        A
                      </div>

                      <div>

                        <strong>
                          Aman Verma
                        </strong>

                        <small>
                          aman@gmail.com
                        </small>

                      </div>

                    </div>

                  </td>


                  <td>
                    Frontend Developer
                  </td>


                  <td>
                    1 Year
                  </td>


                  <td>

                    <span className="status shortlisted">
                      Shortlisted
                    </span>

                  </td>

                </tr>


                {/* Priya */}
                <tr>

                  <td>

                    <div className="candidate-cell">

                      <div className="candidate-avatar pink-avatar">
                        P
                      </div>

                      <div>

                        <strong>
                          Priya Singh
                        </strong>

                        <small>
                          priya@gmail.com
                        </small>

                      </div>

                    </div>

                  </td>


                  <td>
                    UI/UX Designer
                  </td>


                  <td>
                    2 Years
                  </td>


                  <td>

                    <span className="status rejected">
                      Rejected
                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>
  );
}

export default CompanyDashboard;