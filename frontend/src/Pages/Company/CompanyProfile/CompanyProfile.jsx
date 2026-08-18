import { useState } from "react";
import "./CompanyProfile.css";

function CompanyProfile() {
  const [editing, setEditing] = useState(false);

  const [company, setCompany] = useState({
    name: "JobBridge Company",
    email: "company@jobbridge.com",
    phone: "+91 9876543210",
    location: "New Delhi, India",
    website: "www.jobbridge.com",
    industry: "Information Technology",
    employees: "50-100",
    founded: "2020",
    description:
      "JobBridge Company is a growing technology company focused on connecting talented professionals with great career opportunities. We build innovative solutions and help businesses find the right talent.",
  });

  const handleChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setEditing(false);
    alert("Company profile updated successfully!");
  };

  return (
    <div className="company-profile-page">

      {/* ================= HEADER ================= */}
      <div className="profile-header">

        <div>
          <span className="page-badge">
            COMPANY PROFILE
          </span>

          <h1>Company Profile</h1>

          <p>
            Manage your company information and hiring presence.
          </p>
        </div>

        {!editing ? (
          <button
            className="edit-profile-btn"
            onClick={() => setEditing(true)}
          >
            ✏️ Edit Profile
          </button>
        ) : (
          <button
            className="save-profile-btn"
            onClick={handleSave}
          >
            ✓ Save Changes
          </button>
        )}

      </div>


      {/* ================= PROFILE HERO ================= */}
      <div className="profile-hero">

        <div className="hero-background"></div>

        <div className="profile-hero-content">

          <div className="company-logo-wrapper">

            <div className="company-logo">
              {company.name.charAt(0).toUpperCase()}
            </div>

            {editing && (
              <button className="logo-edit">
                📷
              </button>
            )}

          </div>


          <div className="company-main-info">

            <div className="company-title-row">

              <h2>
                {company.name}
              </h2>

              <span className="verified-badge">
                ✓ Verified
              </span>

            </div>

            <p className="company-industry">
              {company.industry}
            </p>

            <div className="company-meta">

              <span>
                📍 {company.location}
              </span>

              <span>
                👥 {company.employees} Employees
              </span>

              <span>
                📅 Since {company.founded}
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* ================= STATS ================= */}
      <div className="profile-stats">

        <div className="profile-stat-card purple-card">

          <div className="stat-icon">
            💼
          </div>

          <div>
            <span>Total Jobs</span>
            <h2>12</h2>
            <small>+12% this month</small>
          </div>

        </div>


        <div className="profile-stat-card blue-card">

          <div className="stat-icon">
            ⚡
          </div>

          <div>
            <span>Active Jobs</span>
            <h2>8</h2>
            <small>Currently active</small>
          </div>

        </div>


        <div className="profile-stat-card orange-card">

          <div className="stat-icon">
            👥
          </div>

          <div>
            <span>Applications</span>
            <h2>156</h2>
            <small>+18% this month</small>
          </div>

        </div>


        <div className="profile-stat-card green-card">

          <div className="stat-icon">
            ⭐
          </div>

          <div>
            <span>Shortlisted</span>
            <h2>24</h2>
            <small>Selected candidates</small>
          </div>

        </div>

      </div>


      {/* ================= CONTENT GRID ================= */}
      <div className="profile-content-grid">

        {/* LEFT COLUMN */}
        <div className="profile-left">


          {/* About */}
          <section className="profile-box">

            <div className="box-header">

              <div>
                <span className="section-icon">
                  🏢
                </span>

                <div>
                  <h3>About Company</h3>
                  <p>Company overview</p>
                </div>
              </div>

            </div>

            {editing ? (
              <textarea
                className="about-textarea"
                name="description"
                value={company.description}
                onChange={handleChange}
              />
            ) : (
              <p className="about-text">
                {company.description}
              </p>
            )}

          </section>


          {/* Company Information */}
          <section className="profile-box">

            <div className="box-header">

              <div>
                <span className="section-icon">
                  📋
                </span>

                <div>
                  <h3>Company Information</h3>
                  <p>Basic company details</p>
                </div>
              </div>

            </div>


            <div className="information-grid">

              <div className="info-field">

                <label>Company Name</label>

                <input
                  type="text"
                  name="name"
                  value={company.name}
                  onChange={handleChange}
                  disabled={!editing}
                />

              </div>


              <div className="info-field">

                <label>Industry</label>

                <input
                  type="text"
                  name="industry"
                  value={company.industry}
                  onChange={handleChange}
                  disabled={!editing}
                />

              </div>


              <div className="info-field">

                <label>Company Size</label>

                <select
                  name="employees"
                  value={company.employees}
                  onChange={handleChange}
                  disabled={!editing}
                >
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>50-100</option>
                  <option>100-500</option>
                  <option>500+</option>
                </select>

              </div>


              <div className="info-field">

                <label>Founded</label>

                <input
                  type="text"
                  name="founded"
                  value={company.founded}
                  onChange={handleChange}
                  disabled={!editing}
                />

              </div>


              <div className="info-field full-field">

                <label>Location</label>

                <input
                  type="text"
                  name="location"
                  value={company.location}
                  onChange={handleChange}
                  disabled={!editing}
                />

              </div>

            </div>

          </section>


          {/* Hiring Preferences */}
          <section className="profile-box">

            <div className="box-header">

              <div>
                <span className="section-icon">
                  🎯
                </span>

                <div>
                  <h3>Hiring Preferences</h3>
                  <p>What your company is looking for</p>
                </div>
              </div>

            </div>


            <div className="preference-tags">

              <span>React</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>UI/UX Design</span>
              <span>Frontend</span>
              <span>Backend</span>
              <span>Full Stack</span>

            </div>

          </section>

        </div>


        {/* RIGHT COLUMN */}
        <div className="profile-right">


          {/* Contact */}
          <section className="profile-box">

            <div className="box-header">

              <div>
                <span className="section-icon">
                  📞
                </span>

                <div>
                  <h3>Contact Information</h3>
                  <p>How candidates can reach you</p>
                </div>
              </div>

            </div>


            <div className="contact-list">

              <div className="contact-row">

                <div className="contact-icon">
                  📧
                </div>

                <div>
                  <small>Email Address</small>

                  {editing ? (
                    <input
                      type="email"
                      name="email"
                      value={company.email}
                      onChange={handleChange}
                    />
                  ) : (
                    <strong>{company.email}</strong>
                  )}
                </div>

              </div>


              <div className="contact-row">

                <div className="contact-icon">
                  📞
                </div>

                <div>
                  <small>Phone Number</small>

                  {editing ? (
                    <input
                      type="text"
                      name="phone"
                      value={company.phone}
                      onChange={handleChange}
                    />
                  ) : (
                    <strong>{company.phone}</strong>
                  )}
                </div>

              </div>


              <div className="contact-row">

                <div className="contact-icon">
                  🌐
                </div>

                <div>
                  <small>Website</small>

                  {editing ? (
                    <input
                      type="text"
                      name="website"
                      value={company.website}
                      onChange={handleChange}
                    />
                  ) : (
                    <strong>{company.website}</strong>
                  )}
                </div>

              </div>


              <div className="contact-row">

                <div className="contact-icon">
                  📍
                </div>

                <div>
                  <small>Location</small>
                  <strong>{company.location}</strong>
                </div>

              </div>

            </div>

          </section>


          {/* Profile Completion */}
          <section className="profile-box completion-box">

            <div className="completion-header">

              <div>
                <h3>Profile Completion</h3>
                <p>Your company profile is almost complete.</p>
              </div>

              <strong>85%</strong>

            </div>


            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{ width: "85%" }}
              ></div>

            </div>


            <span className="completion-message">
              Add company logo to reach 100%.
            </span>

          </section>


          {/* Account Status */}
          <section className="profile-box account-box">

            <div className="account-icon">
              ✓
            </div>

            <div>
              <h3>Company Account</h3>

              <p>
                Your company account is verified and active.
              </p>

              <span className="active-status">
                ● Active
              </span>
            </div>

          </section>

        </div>

      </div>

    </div>
  );
}

export default CompanyProfile;