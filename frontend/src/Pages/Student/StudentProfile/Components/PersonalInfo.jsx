import styles from "../StudentProfile.module.css";

const PersonalInfo = () => {
  return (
    <section className={styles.profileCard}>
      <div className={styles.cardTitle}>
        <h2>👤 Personal Information</h2>
        <span>01</span>
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <label>Full Name</label>
          <p>Sneha Mishra</p>
        </div>

        <div className={styles.infoItem}>
          <label>Email</label>
          <p>sneha@example.com</p>
        </div>

        <div className={styles.infoItem}>
          <label>Phone</label>
          <p>+91 XXXXX XXXXX</p>
        </div>

        <div className={styles.infoItem}>
          <label>Location</label>
          <p>Kanpur, Uttar Pradesh</p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;