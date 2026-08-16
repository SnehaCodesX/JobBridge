import styles from "../HomePage.module.css";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: "👤",
      title: "Create Your Profile",
      text: "Tell us about your skills, education and career goals.",
    },
    {
      number: "02",
      icon: "✦",
      title: "Get AI Matched",
      text: "Our AI finds jobs that match your profile and skills.",
    },
    {
      number: "03",
      icon: "🚀",
      title: "Apply & Grow",
      text: "Apply to verified opportunities and start your career.",
    },
  ];

  return (
    <section className={styles.howSection}>
      <div className={styles.sectionTitleCenter}>
        <span>HOW IT WORKS</span>
        <h2>Start Your Career Journey</h2>
        <p>
          Getting your dream job is easier with JobBridge.
        </p>
      </div>

      <div className={styles.stepsContainer}>

        {steps.map((step) => (
          <div
            className={styles.stepCard}
            key={step.number}
          >
            <div className={styles.stepNumber}>
              {step.number}
            </div>

            <div className={styles.stepIcon}>
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default HowItWorks;