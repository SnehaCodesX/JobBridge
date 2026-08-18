import styles from "../Reports.module.css";

const JobsChart = () => {
  const data = [45, 60, 52, 72, 65, 82, 76];

  return (
    <div className={styles.chartCard}>
      <div className={styles.chartHeader}>
        <div>
          <h3>Jobs Posted</h3>
          <p>New jobs posted</p>
        </div>

        <span className={styles.chartValue}>486</span>
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

export default JobsChart;
/* // Hero Section component */