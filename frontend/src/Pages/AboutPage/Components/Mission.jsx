import React from "react";
import styles from "../AboutPage.module.css";

const AboutMission = () => {
  return (
    <div className={styles.infoCard}>

      <div className={styles.infoIcon}>
        🎯
      </div>

      <h3>Our Mission</h3>

      <div className={styles.titleLines}>
        <span></span>
        <span></span>
      </div>

      <p>
        To empower students and freshers by providing the right
        tools, resources, and AI-driven guidance to help them
        discover, connect, and grow in their careers.
      </p>

      <button className={styles.cardArrow}>
        →
      </button>

    </div>
  );
};

export default AboutMission;