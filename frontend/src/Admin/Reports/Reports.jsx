import ReportHeader from "./Components/ReportHeader";
import ReportFilters from "./Components/ReportFilters";
import StatisticsCards from "./Components/StatisticsCards";
import ApplicationsChart from "./Components/ApplicationsChart";
import JobsChart from "./Components/JobsChart";
import UsersChart from "./Components/UsersChart";
import styles from "./Reports.module.css";

const Reports = () => {
  return (
    <div className={styles.reportsPage}>
      <ReportHeader />

      <ReportFilters />

      <StatisticsCards />

      <div className={styles.chartsGrid}>
        <ApplicationsChart />
        <JobsChart />
      </div>

      <div className={styles.fullChart}>
        <UsersChart />
      </div>
    </div>
  );
};

export default Reports;
/* // Hero Section component */