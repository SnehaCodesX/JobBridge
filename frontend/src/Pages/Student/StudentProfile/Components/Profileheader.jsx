import styles from "../StudentProfile.module.css";

const ProfileHeader = () => {
  return (
    <section className={styles.profileHeader}>
      <div className={styles.avatarLarge}>S</div>

      <div className={styles.headerInfo}>
        <h1>Sneha Mishra</h1>
        <p>BCA Student • Frontend Developer</p>
        <span>📍 Kanpur, Uttar Pradesh</span>
      </div>

      <button className={styles.editBtn}>
        ✏️ Edit Profile
      </button>
    </section>
  );
};

export default ProfileHeader;