import styles from "../Reports.module.css";

const ApplicationsChart = () => {
  const data = [35, 48, 42, 65, 55, 78, 68];

  return (
    <div className={styles.chartCard}>
      <div className={styles.chartHeader}>
        <div>
          <h3>Applications</h3>
          <p>Application activity</p>
        </div>

        <span className={styles.chartValue}>3,642</span>
      </div>

      <div className={styles.barChart}>
        {data.map((height, index) => (
          <div className={styles.barItem} key={index}>
            <div
              className={styles.bar}
              style={{ height: `${height}%` }}
            ></div>
            <span>Day {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsChart;
/* // Hero Section component */