import styles from "../HomePage.module.css";

const WhyJobBridge = () => {
  const features = [
    {
      icon: "✦",
      title: "AI Job Matching",
      text: "Smart recommendations",
    },
    {
      icon: "▣",
      title: "Verified Companies",
      text: "100% trusted",
    },
    {
      icon: "♧",
      title: "Easy Apply",
      text: "One-click apply",
    },
    {
      icon: "✧",
      title: "Career Resources",
      text: "Guides & tips",
    },
  ];

  return (
    <section className={styles.whySection}>
      <div className={styles.whyContainer}>

        {features.map((feature) => (
          <div
            className={styles.featureItem}
            key={feature.title}
          >
            <div className={styles.featureIcon}>
              {feature.icon}
            </div>

            <div>
              <strong>{feature.title}</strong>
              <span>{feature.text}</span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default WhyJobBridge;