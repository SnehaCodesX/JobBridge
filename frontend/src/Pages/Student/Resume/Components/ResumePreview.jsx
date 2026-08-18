import styles from "../Resume.module.css";

const ResumePreview = () => {

  return (
    <section className={styles.previewCard}>

      <div className={styles.cardTop}>

        <div>
          <span className={styles.smallTitle}>
            PREVIEW
          </span>

          <h2>Resume Preview</h2>
        </div>

        <div className={styles.previewIcon}>
          👀
        </div>

      </div>

      <div className={styles.resumePaper}>

        <div className={styles.resumeTop}>
          <div className={styles.resumeAvatar}>
            S
          </div>

          <div>
            <h3>Sneha Mishra</h3>
            <p>Frontend Developer</p>
          </div>
        </div>

        <div className={styles.resumeLine}></div>

        <div className={styles.previewSection}>
          <h4>Education</h4>

          <p>
            Bachelor of Computer Applications
          </p>

          <span>
            CSJMU • 2023 – Present
          </span>
        </div>

        <div className={styles.previewSection}>
          <h4>Skills</h4>

          <div className={styles.previewSkills}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        <div className={styles.previewSection}>
          <h4>Profile</h4>

          <p>
            BCA student interested in frontend web development
            and modern user interface design.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Resume;