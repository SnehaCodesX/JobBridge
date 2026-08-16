import styles from "../Reports.module.css";

const UsersChart = () => {
  const data = [30, 45, 38, 58, 50, 72, 65, 82, 75, 90, 84, 96];

  return (
    <div className={styles.chartCard}>
      <div className={styles.chartHeader}>
        <div>
          <h3>User Growth</h3>
          <p>Monthly registered users</p>
        </div>

        <span className={styles.chartValue}>2,845</span>
      </div>

      <div className={styles.lineChart}>
        {data.map((height, index) => (
          <div className={styles.lineItem} key={index}>
            <div
              className={styles.linePoint}
              style={{ bottom: `${height}%` }}
            ></div>

            <div
              className={styles.line}
              style={{ height: `${height}%` }}
            ></div>

            <span>{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersChart;
/* // Hero Section component */