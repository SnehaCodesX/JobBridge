import React from "react";
import styles from "./JobDetails.module.css";

const JobDetails = () => {
  return (
    <div className={styles.page}>

      {/* ================= TOP BANNER ================= */}
      <div className={styles.banner}>
        <div>
          <p className={styles.breadcrumb}>
            JOBBRIDGE • STUDENT • JOB DETAILS
          </p>

          <h1 className={styles.bannerTitle}>
            Frontend Developer <span>💜</span>
          </h1>

          <p className={styles.bannerSubtitle}>
            TechNova Solutions • Noida, India
          </p>
        </div>

        <div className={styles.bannerIcon}>💼</div>
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div className={styles.layout}>

        {/* ================= LEFT CONTENT ================= */}
        <main className={styles.mainContent}>

          {/* JOB HEADER */}
          <div className={styles.jobHeader}>
            <div className={styles.companyLogo}>T</div>

            <div className={styles.jobInfo}>
              <h2>Frontend Developer</h2>

              <h3>TechNova Solutions</h3>

              <div className={styles.meta}>
                <span>📍 Noida, India</span>
                <span>💰 ₹4 - 6 LPA</span>
                <span>💼 Full-time</span>
                <span>🎓 Fresher / 0-2 Years</span>
              </div>
            </div>

            <button className={styles.saveButton}>
              ♡
            </button>
          </div>

          {/* ABOUT THE JOB */}
          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <span>01</span>
              <h2>About the Job</h2>
            </div>

            <p>
              We are looking for a passionate Frontend Developer to join our
              team. You will work on building modern, responsive and
              user-friendly web applications using React and JavaScript.
            </p>
          </section>

          {/* RESPONSIBILITIES */}
          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <span>02</span>
              <h2>Responsibilities</h2>
            </div>

            <ul className={styles.list}>
              <li>Build responsive and user-friendly web interfaces.</li>
              <li>Develop reusable React components.</li>
              <li>Work with designers and backend developers.</li>
              <li>Write clean and maintainable code.</li>
              <li>Fix bugs and improve application performance.</li>
            </ul>
          </section>

          {/* REQUIREMENTS */}
          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <span>03</span>
              <h2>Requirements</h2>
            </div>

            <ul className={styles.list}>
              <li>Basic knowledge of React and JavaScript.</li>
              <li>Good understanding of HTML and CSS.</li>
              <li>Knowledge of Git and version control.</li>
              <li>Good problem-solving skills.</li>
              <li>Ability to work in a team environment.</li>
            </ul>
          </section>

          {/* REQUIRED SKILLS */}
          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <span>04</span>
              <h2>Required Skills</h2>
            </div>

            <div className={styles.skills}>
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Git</span>
            </div>
          </section>

          {/* BACK BUTTON */}
          <button className={styles.backButton}>
            ← Back to Jobs
          </button>

        </main>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className={styles.sidebar}>

          {/* APPLY CARD */}
          <div className={styles.applyCard}>
            <p className={styles.applyLabel}>
              READY TO APPLY?
            </p>

            <h2>Start your application</h2>

            <p>
              Take the next step toward your career goals.
            </p>

            <button className={styles.applyButton}>
              Apply Now <span>→</span>
            </button>

            <div className={styles.posted}>
              📅
              <span>Posted 2 days ago</span>
            </div>
          </div>

          {/* JOB OVERVIEW */}
          <div className={styles.overviewCard}>
            <h2>Job Overview</h2>

            <div className={styles.overviewItem}>
              <div className={styles.overviewIcon}>📍</div>

              <div>
                <small>Location</small>
                <strong>Noida, India</strong>
              </div>
            </div>

            <div className={styles.overviewItem}>
              <div className={styles.overviewIcon}>💰</div>

              <div>
                <small>Salary</small>
                <strong>₹4 - 6 LPA</strong>
              </div>
            </div>

            <div className={styles.overviewItem}>
              <div className={styles.overviewIcon}>💼</div>

              <div>
                <small>Job Type</small>
                <strong>Full-time</strong>
              </div>
            </div>

            <div className={styles.overviewItem}>
              <div className={styles.overviewIcon}>🎓</div>

              <div>
                <small>Experience</small>
                <strong>Fresher / 0-2 Years</strong>
              </div>
            </div>
          </div>

        </aside>
      </div>

      {/* SHARE BUTTON */}
      <button className={styles.shareButton}>
        ↗ Share Job
      </button>

    </div>
  );
};

export default JobDetails;