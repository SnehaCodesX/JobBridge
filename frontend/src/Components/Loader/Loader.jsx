import React from "react";
import styles from "./Loader.module.css";

// Apne actual logo path ke according filename change karo
import logo from "../../assets/Logos/JobBridgeLogo.png";

const Loader = () => {
  return (
    <div className={styles.loaderPage}>

      {/* Background Glow */}
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>

      {/* Floating Particles */}
      <span className={`${styles.particle} ${styles.particleOne}`}>✦</span>
      <span className={`${styles.particle} ${styles.particleTwo}`}>·</span>
      <span className={`${styles.particle} ${styles.particleThree}`}>·</span>
      <span className={`${styles.particle} ${styles.particleFour}`}>✦</span>

      {/* Main Loader */}
      <div className={styles.loaderContainer}>

        {/* Rotating Outer Ring */}
        <div className={styles.outerRing}></div>

        {/* Glass Loader Card */}
        <div className={styles.loaderCard}>

          {/* Inner Glow */}
          <div className={styles.innerGlow}></div>

          {/* Logo */}
          <div className={styles.logoWrapper}>
            <img
              src={logo}
              alt="JobBridge"
              className={styles.logo}
            />
          </div>

          {/* Loading Dots */}
          <div className={styles.loadingDots}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>

      {/* Brand */}
      <h2 className={styles.brandName}>
        Job<span>Bridge</span>
      </h2>

      {/* Loading Text */}
      <p className={styles.loadingText}>
        Finding opportunities
      </p>

      {/* Animated Progress */}
      <div className={styles.progressWrapper}>
        <div className={styles.progressBar}>
          <div className={styles.progressGlow}></div>
        </div>
      </div>

    </div>
  );
};

export default Loader;