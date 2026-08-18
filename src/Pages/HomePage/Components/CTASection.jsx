import { Link } from "react-router-dom";
import styles from "../HomePage.module.css";

const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>

        <div>
          <span>🚀 START YOUR JOURNEY</span>

          <h2>
            Ready to Find Your
            <br />
            Dream Career?
          </h2>

          <p>
            Join thousands of students who are already
            building their careers with JobBridge.
          </p>

          <div className={styles.ctaButtons}>
            <Link
              to="/signup"
              className={styles.ctaPrimary}
            >
              Create Profile →
            </Link>

            <Link
              to="/jobs"
              className={styles.ctaSecondary}
            >
              Explore Jobs
            </Link>
          </div>
        </div>

        <div className={styles.ctaVisual}>
          <div>10K+</div>
          <span>Students placed</span>
        </div>

      </div>
    </section>
  );
};

export default CTA;