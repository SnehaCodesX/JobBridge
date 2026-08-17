import styles from "../StudentProfile.module.css";

const Education = () => {
  return (
    <section className={styles.profileCard}>
      <div className={styles.cardTitle}>
        <h2>🎓 Education</h2>
        <span>02</span>
      </div>

      <div className={styles.educationItem}>
        <div className={styles.educationIcon}>🎓</div>

        <div>
          <h3>Bachelor of Computer Applications</h3>
          <p>CSJMU • Computer Applications</p>
          <span>2023 – Present</span>
        </div>
      </div>
    </section>
  );
};

export default Education;