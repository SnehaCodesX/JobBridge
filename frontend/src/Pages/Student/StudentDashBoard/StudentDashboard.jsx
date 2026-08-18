import styles from "./StudentDashboard.module.css";

const jobs = [
  {
    logo: "G",
    logoClass: "google",
    title: "Frontend Developer Intern",
    company: "Google",
    location: "Bangalore, India",
    type: "Internship",
    salary: "₹ 20,000/month",
    time: "2 days ago",
  },
  {
    logo: "a",
    logoClass: "amazon",
    title: "Software Development Engineer",
    company: "Amazon",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹ 8,00,000/year",
    time: "1 week ago",
  },
  {
    logo: "▦",
    logoClass: "microsoft",
    title: "Data Analyst Intern",
    company: "Microsoft",
    location: "Noida, India",
    type: "Internship",
    salary: "₹ 25,000/month",
    time: "3 days ago",
  },
  {
    logo: "tcs",
    logoClass: "tcs",
    title: "System Engineer",
    company: "TCS",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "₹ 3,50,000/year",
    time: "5 days ago",
  },
];

const applications = [
  {
    logo: "G",
    logoClass: "google",
    title: "Frontend Developer Intern",
    company: "Google",
    time: "Applied 2 days ago",
    status: "Shortlisted",
    statusClass: "shortlisted",
  },
  {
    logo: "a",
    logoClass: "amazon",
    title: "SDE Intern",
    company: "Amazon",
    time: "Applied 1 week ago",
    status: "Pending",
    statusClass: "pending",
  },
  {
    logo: "▦",
    logoClass: "microsoft",
    title: "Data Analyst Intern",
    company: "Microsoft",
    time: "Applied 3 days ago",
    status: "Shortlisted",
    statusClass: "shortlisted",
  },
  {
    logo: "tcs",
    logoClass: "tcs",
    title: "System Engineer",
    company: "TCS",
    time: "Applied 5 days ago",
    status: "Rejected",
    statusClass: "rejected",
  },
];

function StudentDashboard() {
  return (
    <div className={styles.dashboard}>

      {/* HEADER */}
      <header className={styles.header}>

        <div className={styles.logo}>
          Job<span>Bridge</span>
        </div>

        <div className={styles.headerRight}>

          <button className={styles.notification}>
            🔔
            <span>3</span>
          </button>

          <div className={styles.profile}>
            <div className={styles.avatar}>SM</div>

            <div>
              <h4>Sneha Mishra</h4>
              <p>Student</p>
            </div>

            <span className={styles.arrow}>⌄</span>
          </div>

        </div>

      </header>


      {/* MAIN */}
      <main className={styles.main}>

        {/* WELCOME */}
        <section className={styles.welcome}>

          <h1>
            Welcome back, Sneha! <span>👋</span>
          </h1>

          <p>
            Find your next opportunity and take the next step in your career.
          </p>

        </section>


        {/* STATS */}
        <section className={styles.statsGrid}>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>💼</div>
            <div>
              <h2>12</h2>
              <h3>Recommended Jobs</h3>
              <p>For you</p>
            </div>
          </div>


          <div className={styles.statCard}>
            <div className={styles.statIcon}>📄</div>
            <div>
              <h2>4</h2>
              <h3>Applications Sent</h3>
              <p>Total applications</p>
            </div>
          </div>


          <div className={styles.statCard}>
            <div className={styles.statIcon}>⭐</div>
            <div>
              <h2>2</h2>
              <h3>Shortlisted</h3>
              <p>Great progress!</p>
            </div>
          </div>


          <div className={styles.statCard}>
            <div className={styles.statIcon}>👁</div>
            <div>
              <h2>56</h2>
              <h3>Profile Views</h3>
              <p>This week</p>
            </div>
          </div>

        </section>


        {/* CONTENT */}
        <section className={styles.contentGrid}>

          {/* RECOMMENDED JOBS */}
          <div className={styles.jobsSection}>

            <div className={styles.sectionHeader}>
              <div>
                <h2>Recommended for You</h2>
                <p>Jobs matching your profile and preferences</p>
              </div>

              <button className={styles.viewAll}>
                View All Jobs →
              </button>
            </div>


            <div className={styles.jobsList}>

              {jobs.map((job, index) => (

                <div className={styles.jobCard} key={index}>

                  <div
                    className={`${styles.companyLogo} ${
                      styles[job.logoClass]
                    }`}
                  >
                    {job.logo}
                  </div>


                  <div className={styles.jobInfo}>

                    <h3>{job.title}</h3>

                    <p className={styles.company}>
                      {job.company}
                    </p>

                    <div className={styles.meta}>
                      <span>📍 {job.location}</span>
                      <span>💼 {job.type}</span>
                      <span>₹ {job.salary.replace("₹ ", "")}</span>
                    </div>

                  </div>


                  <div className={styles.jobAction}>

                    <button className={styles.applyBtn}>
                      Apply Now
                    </button>

                    <span>{job.time}</span>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* APPLICATIONS */}
          <div className={styles.applicationSection}>

            <div className={styles.sectionHeader}>
              <div>
                <h2>Recent Applications</h2>
                <p>Track your application status</p>
              </div>
            </div>


            <div className={styles.applicationList}>

              {applications.map((application, index) => (

                <div
                  className={styles.applicationItem}
                  key={index}
                >

                  <div
                    className={`${styles.companyLogoSmall} ${
                      styles[application.logoClass]
                    }`}
                  >
                    {application.logo}
                  </div>


                  <div className={styles.applicationInfo}>

                    <h3>{application.title}</h3>

                    <p>{application.company}</p>

                    <span>{application.time}</span>

                  </div>


                  <span
                    className={`${styles.status} ${
                      styles[application.statusClass]
                    }`}
                  >
                    {application.status}
                  </span>

                </div>

              ))}

            </div>


            <button className={styles.allApplications}>
              View All Applications →
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StudentDashboard;