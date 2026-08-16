import DashboardHeader from "./Components/DashboardHeader";
import StatsCards from "./Components/StatsCards";
import RecentApplications from "./Components/RecentApplications";
import RecentJobs from "./Components/RecentJobs";
import RecentUsers from "./Components/RecentUsers";
import styles from "./AdminDashboard.module.css";

function AdminDashboard() {
  return (
    <div className={styles.dashboard}>
      <DashboardHeader />

      <StatsCards />

      <section className={styles.middleSection}>
        <RecentApplications />
        <RecentJobs />
      </section>

      <RecentUsers />
    </div>
  );
}

export default AdminDashboard;