import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AboutHero from "./Components/AboutHero";
import Mission from "./Components/Mission";
import Vision from "./Components/Vision";
import Features from "./Components/Features";

import styles from "./AboutPage.module.css";

const AboutPage = () => {

  const handleJoin = () => {
    window.location.href = "/register";
  };

  return (
    <main className={styles.aboutPage}>

       {/* Navbar */}
      <Navbar />

      {/* ================= HERO ================= */}

      <AboutHero />


      {/* ================= INFO CARDS ================= */}

      <section
        id="about-features"
        className={styles.infoSection}
      >

        <Mission />

        <Vision />

        <Features />

      </section>


      {/* ================= STATS ================= */}

      <section className={styles.statsSection}>

        <div className={styles.statItem}>

          <div className={styles.statIcon}>
            🏢
          </div>

          <div>
            <strong>5K+</strong>
            <span>Companies</span>
          </div>

        </div>


        <div className={styles.statDivider}></div>


        <div className={styles.statItem}>

          <div className={styles.statIcon}>
            👥
          </div>

          <div>
            <strong>20K+</strong>
            <span>Students</span>
          </div>

        </div>


        <div className={styles.statDivider}></div>


        <div className={styles.statItem}>

          <div className={styles.statIcon}>
            💼
          </div>

          <div>
            <strong>10K+</strong>
            <span>Active Jobs</span>
          </div>

        </div>


        <div className={styles.statDivider}></div>


        <div className={styles.statItem}>

          <div className={styles.statIcon}>
            🛡️
          </div>

          <div>
            <strong>98%</strong>
            <span>Satisfaction Rate</span>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className={styles.ctaSection}>

        <div className={styles.ctaRocket}>
          🚀
        </div>

        <div className={styles.ctaContent}>

          <h2>
            Together, let's build your career
            <br />
            and shape a better tomorrow.
          </h2>

        </div>

        <button
          className={styles.ctaButton}
          onClick={handleJoin}
        >
          Join JobBridge Today
          <span>→</span>
        </button>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className={styles.footer}>

        <p>
          💜 © 2025 JobBridge. All rights reserved.
        </p>

        <div className={styles.footerLinks}>

          <span>Privacy Policy</span>

          <b>|</b>

          <span>Terms of Service</span>

          <b>|</b>

          <span>Contact Us</span>

          <span>in</span>
          <span>𝕏</span>
          <span>◎</span>
          <span>f</span>

        </div>

      </footer>

    </main>
  );
};

export default AboutPage;