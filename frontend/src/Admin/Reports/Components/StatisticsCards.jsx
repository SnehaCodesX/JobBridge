import styles from "../Reports.module.css";

const StatisticsCards = () => {
  const statistics = [
    {
      title: "Total Users",
      value: "2,845",
      change: "+12.5%",
      text: "vs last month",
    },
    {
      title: "Total Jobs",
      value: "486",
      change: "+8.2%",
      text: "vs last month",
    },
    {
      title: "Applications",
      value: "3,642",
      change: "+15.8%",
      text: "vs last month",
    },
    {
      title: "Companies",
      value: "324",
      change: "+6.4%",
      text: "vs last month",
    },
  ];

  return (
    <div className={styles.statisticsGrid}>
      {statistics.map((item, index) => (
        <div className={styles.statCard} key={index}>
          <div className={styles.statTop}>
            <span>{item.title}</span>
            <div className={styles.statIcon}>↗</div>
          </div>

          <h2>{item.value}</h2>

          <p>
            <span className={styles.change}>{item.change}</span>{" "}
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards;
/* // Hero Section component */