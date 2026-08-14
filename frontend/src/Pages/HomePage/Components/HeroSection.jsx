import { Link } from "react-router-dom";
import styles from "../HomePage.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>

        {/* LEFT CONTENT */}
        <div className={styles.heroContent}>

          <div className={styles.heroBadge}>
            ✨ AI POWERED JOB MATCHING
          </div>

          <h1 className={styles.heroTitle}>
            Find the Right Start
            <br />
            for Your{" "}
            <span>Career 🚀</span>
          </h1>

          <p className={styles.heroDescription}>
            JobBridge connects talented freshers with top companies.
            <br />
            AI-powered matching, verified jobs, and career support —
            all in one place.
          </p>

          <div className={styles.heroStats}>
            <div>
              <strong>10K+</strong>
              <span>Active Jobs</span>
            </div>

            <div>
              <strong>5K+</strong>
              <span>Companies</span>
            </div>

            <div>
              <strong>20K+</strong>
              <span>Students</span>
            </div>
          </div>

          <Link to="/jobs" className={styles.heroButton}>
            Explore Jobs →
          </Link>

        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className={styles.heroVisual}>

          <div className={styles.purpleCircle}></div>

          <div className={styles.aiCard}>
            <span>AI Match Score</span>
            <strong>95%</strong>
            <small>Great Match</small>
          </div>

          <div className={styles.heroPerson}>
            <div className={styles.personHead}>
              👩🏻‍💻
            </div>

            <div className={styles.personBody}>
              <div className={styles.laptop}>
                JobBridge
              </div>
            </div>
          </div>

          <div className={styles.recommendedCard}>
            <span>✦ Recommended for you</span>
            <strong>Frontend Developer</strong>
            <small>TechNova Solutions</small>
            <Link to="/jobs">View Job</Link>
          </div>

          <div className={styles.floatingIcon}>💼</div>
          <div className={styles.floatingChart}>▥</div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;