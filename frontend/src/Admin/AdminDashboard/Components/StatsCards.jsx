import styles from "../AdminDashboard.module.css";

const stats = [
  {
    icon: "👩‍🎓",
    title: "Total Students",
    value: "12,840",
    growth: "+12.5%",
  },
  {
    icon: "🏢",
    title: "Active Companies",
    value: "1,286",
    growth: "+8.2%",
  },
  {
    icon: "💼",
    title: "Active Jobs",
    value: "3,482",
    growth: "+18.4%",
  },
  {
    icon: "📄",
    title: "Applications",
    value: "8,640",
    growth: "+10.3%",
  },
];

function StatsCards() {
  return (
    <div className={styles.statsGrid}>
      {stats.map((item) => (
        <div className={styles.statCard} key={item.title}>
          <div className={styles.statIcon}>{item.icon}</div>

          <div>
            <p>{item.title}</p>
            <h2>{item.value}</h2>
            <span className={styles.growth}>↗ {item.growth} this month</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;