import styles from "../StudentProfile.module.css";

const Experience = () => {
  return (
    <section className={styles.profileCard}>
      <div className={styles.cardTitle}>
        <h2>💼 Experience</h2>
        <span>04</span>
      </div>

      <div className={styles.experienceBox}>
        <div className={styles.experienceIcon}>💻</div>

        <div>
          <h3>Frontend Web Development</h3>
          <p>
            Experience with building responsive web interfaces using
            HTML, CSS, JavaScript and React.
          </p>

          <div className={styles.experienceTags}>
            <span>Frontend</span>
            <span>React</span>
            <span>Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;