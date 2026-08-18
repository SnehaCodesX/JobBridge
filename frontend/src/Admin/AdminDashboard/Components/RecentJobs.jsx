import styles from "../AdminDashboard.module.css";

const jobs = [
  { title: "Frontend Developer", company: "TechNova", count: "124 Applicants" },
  { title: "Software Engineer", company: "CodeCraft", count: "98 Applicants" },
  { title: "UI/UX Designer", company: "PixelPerfect", count: "72 Applicants" },
  { title: "Data Analyst", company: "Insight Labs", count: "65 Applicants" },
];

function RecentJobs() {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <div>
          <h3>Recent Jobs</h3>
          <p>Recently posted jobs</p>
        </div>
        <button>View All →</button>
      </div>

      <div className={styles.jobList}>
        {jobs.map((job) => (
          <div className={styles.jobItem} key={job.title}>
            <div className={styles.jobIcon}>💼</div>

            <div>
              <h4>{job.title}</h4>
              <p>{job.company}</p>
            </div>

            <span>{job.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentJobs;