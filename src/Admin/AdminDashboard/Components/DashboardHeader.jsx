import styles from "../AdminDashboard.module.css";

function DashboardHeader() {
  return (
    <div className={styles.header}>
      <div>
        <p className={styles.welcome}>Welcome back, Admin 👋</p>
        <h1>Dashboard Overview</h1>
        <p className={styles.subText}>
          Manage students, companies, jobs and applications.
        </p>
      </div>

      <div className={styles.profileBox}>
        <button className={styles.notification}>🔔</button>

        <div className={styles.adminAvatar}>A</div>

        <div>
          <h4>Admin User</h4>
          <span>Super Admin</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;