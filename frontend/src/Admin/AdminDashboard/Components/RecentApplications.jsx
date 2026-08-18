import styles from "../AdminDashboard.module.css";

const applications = [
  {
    name: "Aarav Sharma",
    job: "Frontend Developer",
    company: "TechNova Solutions",
    status: "Pending",
  },
  {
    name: "Priya Patel",
    job: "UI/UX Designer",
    company: "PixelPerfect Studio",
    status: "Shortlisted",
  },
  {
    name: "Rohan Verma",
    job: "Software Engineer",
    company: "CodeCraft Technologies",
    status: "Rejected",
  },
];

function RecentApplications() {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <div>
          <h3>Recent Applications</h3>
          <p>Latest student job applications</p>
        </div>
        <button>View All →</button>
      </div>

      <div className={styles.applicationList}>
        {applications.map((item) => (
          <div className={styles.applicationItem} key={item.name}>
            <div className={styles.userAvatar}>{item.name.charAt(0)}</div>

            <div className={styles.applicationInfo}>
              <h4>{item.name}</h4>
              <p>
                {item.job} • {item.company}
              </p>
            </div>

            <span
              className={`${styles.status} ${
                item.status === "Pending"
                  ? styles.pending
                  : item.status === "Shortlisted"
                  ? styles.shortlisted
                  : styles.rejected
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentApplications;