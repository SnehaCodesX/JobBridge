import styles from "../Reports.module.css";

const ReportFilters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filterGroup}>
        <label>Time Period</label>

        <select>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 3 Months</option>
          <option>Last 6 Months</option>
          <option>This Year</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>Report Type</label>

        <select>
          <option>All Reports</option>
          <option>Applications</option>
          <option>Jobs</option>
          <option>Users</option>
        </select>
      </div>

      <button className={styles.applyButton}>
        Apply Filters
      </button>
    </div>
  );
};

export default ReportFilters;
/* // Hero Section component */