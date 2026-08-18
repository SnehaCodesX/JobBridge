import styles from "../StudentDashboard.module.css";

const RecentApplications = () => {
  const applications = [
    {
      job: "Frontend Developer",
      company: "ABC Technologies",
      status: "Shortlisted",
    },
    {
      job: "React Developer",
      company: "XYZ Solutions",
      status: "Pending",
    },
    {
      job: "Web Developer",
      company: "Digital Works",
      status: "Rejected",
    },
  ];

  return (
    <section className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <div>
          <h2>Recent Applications</h2>
          <p>Your latest job applications</p>
        </div>

        <button className={styles.viewAll}>View All</button>
      </div>

      <div className={styles.applicationList}>
        {applications.map((application, index) => (
          <div className={styles.applicationItem} key={index}>
            <div className={styles.applicationLogo}>
              {application.company.charAt(0)}
            </div>

            <div className={styles.applicationInfo}>
              <h3>{application.job}</h3>
              <p>{application.company}</p>
            </div>

            <span
              className={`${styles.status} ${
                application.status === "Shortlisted"
                  ? styles.shortlisted
                  : application.status === "Pending"
                  ? styles.pending
                  : styles.rejected
              }`}
            >
              {application.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentApplications;