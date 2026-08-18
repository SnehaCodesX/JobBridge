import styles from "../StudentDashboard.module.css";

const StatsCards = () => {
  const stats = [
    {
      icon: "📄",
      number: "12",
      title: "Applications",
    },
    {
      icon: "⭐",
      number: "4",
      title: "Shortlisted",
    },
    {
      icon: "⏳",
      number: "6",
      title: "Pending",
    },
    {
      icon: "🎉",
      number: "1",
      title: "Selected",
    },
  ];

  return (
    <section className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <div className={styles.statCard} key={index}>
          <div className={styles.statIcon}>{stat.icon}</div>

          <div>
            <h2>{stat.number}</h2>
            <p>{stat.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsCards;