import React from "react";
import styles from "../AboutPage.module.css";

import discussionImage from "../../../assets/images/discussionImage.png";

const AboutHero = () => {
  const goToJobs = () => {
    window.location.href = "/jobs";
  };

  const scrollToFeatures = () => {
    document.getElementById("about-features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.heroSection}>

      <div className={styles.heroBackground}></div>

      {/* LEFT CONTENT */}
      <div className={styles.heroContent}>

        <div className={styles.aboutBadge}>
          <span>👥</span>
          ABOUT US
        </div>

        <h1 className={styles.heroTitle}>
          About
          <br />
          <span>JobBridge</span>
        </h1>

        <p className={styles.heroDescription}>
          JobBridge is an AI-powered platform built to connect
          students & freshers with the right job opportunities.
          <br />
          <br />
          We bridge the gap between talent and opportunities to
          <strong> build a better future together.</strong>
        </p>

        <div className={styles.heroButtons}>

          <button
            className={styles.primaryButton}
            onClick={goToJobs}
          >
            Explore Opportunities
            <span>→</span>
          </button>

          <button
            className={styles.secondaryButton}
            onClick={scrollToFeatures}
          >
            <span>▶</span>
            Discover JobBridge
          </button>

        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div className={styles.heroVisual}>

        <div className={styles.heroGlow}></div>

        <div className={styles.circleRing}></div>

        <img
          src={discussionImage}
          alt="JobBridge students"
          className={styles.discussionImage}
        />

        {/* FLOATING CARDS */}

        <div className={`${styles.floatingCard} ${styles.careerCard}`}>
          <span>💼</span>
          <strong>Career</strong>
        </div>

        <div className={`${styles.floatingCard} ${styles.successCard}`}>
          <span>📊</span>
          <strong>98%</strong>
          <small>Success</small>
        </div>

        <div className={`${styles.floatingCard} ${styles.helloCard}`}>
          <strong>Hi! 👋</strong>
        </div>

        <div className={`${styles.floatingCard} ${styles.studentsCard}`}>
          <span>👥</span>
          <strong>20K+</strong>
          <small>Students</small>
        </div>

        <div className={`${styles.floatingCard} ${styles.growCard}`}>
          <strong>Let's grow 🚀</strong>
        </div>

      </div>

    </section>
  );
};

export default AboutHero;