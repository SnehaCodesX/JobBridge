import React from "react";
import styles from "../AboutPage.module.css";

const AboutVision = () => {
  return (
    <div className={styles.infoCard}>

      <div className={styles.infoIcon}>
        👁️
      </div>

      <h3>Our Vision</h3>

      <div className={styles.titleLines}>
        <span></span>
        <span></span>
      </div>

      <p>
        To become the most trusted platform for fresh talent and
        companies, creating a future where every individual finds
        meaningful opportunities.
      </p>

      <button className={styles.cardArrow}>
        →
      </button>

    </div>
  );
};

export default AboutVision;