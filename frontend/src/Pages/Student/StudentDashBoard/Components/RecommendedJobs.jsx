import styles from "../StudentDashboard.module.css";

const RecommendedJobs = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "TechNova Solutions",
      location: "Bangalore",
      type: "Full-time",
    },
    {
      title: "React Developer",
      company: "CodeCraft Technologies",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Web Development Intern",
      company: "Innovate Labs",
      location: "Delhi",
      type: "Internship",
    },
  ];

  return (
    <section className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <div>
          <h2>Recommended Jobs</h2>
          <p>Jobs that match your profile</p>
        </div>

        <button className={styles.viewAll}>View All</button>
      </div>

      <div className={styles.jobsList}>
        {jobs.map((job, index) => (
          <div className={styles.jobCard} key={index}>
            <div className={styles.companyLogo}>
              {job.company.charAt(0)}
            </div>

            <div className={styles.jobInfo}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>

              <div className={styles.jobMeta}>
                <span>📍 {job.location}</span>
                <span>💼 {job.type}</span>
              </div>
            </div>

            <button className={styles.applyBtn}>View Job</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedJobs;