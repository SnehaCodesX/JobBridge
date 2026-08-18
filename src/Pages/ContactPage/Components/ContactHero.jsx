import React from "react";
import styles from "../ContactPage.module.css";
import contactHero from "../../../assets/images/contactHero.png";

const ContactHero = () => {
  return (
    <section className={styles.contactHero}>

      {/* Decorative shapes */}
      <div className={styles.heroShapeOne}></div>
      <div className={styles.heroShapeTwo}></div>

      <div className={styles.heroContent}>

        <div className={styles.heroBadge}>
          <span className={styles.badgeIcon}>✦</span>
          WE'RE HERE TO HELP
        </div>

        <h1 className={styles.heroTitle}>
          Let's Talk About
          <span> Your Career.</span>
        </h1>

        <p className={styles.heroDescription}>
          Have questions about jobs, internships, companies or your
          career journey? Reach out to the JobBridge team and we'll
          help you find the right direction.
        </p>

        <div className={styles.heroStats}>

          <div className={styles.heroStat}>
            <strong>24/7</strong>
            <span>Support</span>
          </div>

          <div className={styles.statDivider}></div>

          <div className={styles.heroStat}>
            <strong>10K+</strong>
            <span>Students</span>
          </div>

          <div className={styles.statDivider}></div>

          <div className={styles.heroStat}>
            <strong>5K+</strong>
            <span>Companies</span>
          </div>

        </div>

      </div>

      {/* RIGHT VISUAL */}
      <div className={styles.heroVisual}>

        <div className={styles.visualGlow}></div>

        {/* Main illustration */}
        <div className={styles.illustrationWrapper}>

          <img src={contactHero}
          alt="JobBridge career support"
          className={styles.heroImage}
          />

        </div>

        {/* Floating card 1 */}
        <div className={`${styles.floatingCard} ${styles.cardOne}`}>
          <div className={styles.cardIcon}>✉</div>

          <div>
            <strong>Quick Response</strong>
            <span>We reply within 24 hrs</span>
          </div>
        </div>

        {/* Floating card 2 */}
        <div className={`${styles.floatingCard} ${styles.cardTwo}`}>
          <div className={styles.cardIcon}>✓</div>

          <div>
            <strong>Career Support</strong>
            <span>We're here for you</span>
          </div>
        </div>

        {/* Floating card 3 */}
        <div className={`${styles.floatingCard} ${styles.cardThree}`}>
          <span>💜</span>
          <strong>Let's Connect!</strong>
        </div>

        {/* Paper plane */}
        <div className={styles.paperPlane}>➤</div>

        {/* Small particles */}
        <span className={styles.heroParticleOne}></span>
        <span className={styles.heroParticleTwo}></span>
        <span className={styles.heroParticleThree}></span>

      </div>

    </section>
  );
};

export default ContactHero;