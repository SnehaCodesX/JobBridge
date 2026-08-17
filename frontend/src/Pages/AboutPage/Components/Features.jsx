import React from "react";
import styles from "../AboutPage.module.css";

const AboutFeatures = () => {
  return (
    <>

      <div className={styles.infoCard}>

        <div className={styles.infoIcon}>
          💎
        </div>

        <h3>Our Values</h3>

        <div className={styles.titleLines}>
          <span></span>
          <span></span>
        </div>

        <div className={styles.valuesList}>

          <div>
            <span>✓</span>
            Transparency
          </div>

          <div>
            <span>✓</span>
            Inclusivity
          </div>

          <div>
            <span>✓</span>
            Innovation
          </div>

          <div>
            <span>✓</span>
            Growth
          </div>

        </div>

        <button className={styles.cardArrow}>
          →
        </button>

      </div>

    </>
  );
};

export default AboutFeatures;