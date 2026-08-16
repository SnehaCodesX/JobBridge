import styles from "../Reports.module.css";

const ReportHeader = () => {
  return (
    <div className={styles.header}>
      <div>
        <h1>Reports & Analytics</h1>
        <p>Monitor platform performance and activity</p>
      </div>

      <button className={styles.exportButton}>
        Export Report
      </button>
    </div>
  );
};

export default ReportHeader;
/* // Hero Section component */