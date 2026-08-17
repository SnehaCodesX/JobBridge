import styles from "../StudentDashboard.module.css";

const DashboardHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Job</span>Bridge
      </div>

      <div className={styles.headerRight}>
        <button className={styles.notificationBtn}>🔔</button>

        <div className={styles.profile}>
          <div className={styles.avatar}>S</div>

          <div>
            <h4>Sneha Mishra</h4>
            <p>Student</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;