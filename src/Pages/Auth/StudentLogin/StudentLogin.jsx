import React from "react";
import LoginForm from "./Components/LoginForm";
import styles from "./StudentLogin.module.css";

const StudentLogin = () => {
  return (
    <div className={styles.studentLoginPage}>

      <main className={styles.mainContainer}>

        {/* ================= LEFT SIDE ================= */}

        <section className={styles.leftPanel}>

          <div className={styles.decorCircle}></div>
          <div className={styles.smallCircle}></div>

          <div className={styles.leftContent}>

            {/* Heading */}
            <h1>
              Start Your Career,
              <br />
              <span>Find Great Opportunities</span>
            </h1>

            {/* Description */}
            <p className={styles.description}>
              Build your career with powerful tools designed to help you
              find jobs, connect with companies and grow your professional
              journey in one place.
            </p>


            {/* Feature 1 */}
            <div className={styles.feature}>

              <div className={styles.featureIcon}>
                ✦
              </div>

              <div>
                <h3>Find Great Opportunities</h3>

                <p>
                  Discover the right jobs matching your skills
                </p>
              </div>

            </div>


            {/* Feature 2 */}
            <div className={styles.feature}>

              <div className={styles.featureIcon}>
                ♢
              </div>

              <div>
                <h3>Verified Companies</h3>

                <p>
                  Connect with trusted companies and recruiters
                </p>
              </div>

            </div>


            {/* Feature 3 */}
            <div className={styles.feature}>

              <div className={styles.featureIcon}>
                ↗
              </div>

              <div>
                <h3>Grow Your Career</h3>

                <p>
                  Build your skills and take the next step
                </p>
              </div>

            </div>


            {/* ================= STATS ================= */}

            <div className={styles.statsBox}>

              {/* Stat 1 */}
              <div className={styles.stat}>

                <div className={styles.statIcon}>
                  ✦
                </div>

                <div>
                  <strong>10K+</strong>
                  <small>Active Jobs</small>
                </div>

              </div>


              <div className={styles.statDivider}></div>


              {/* Stat 2 */}
              <div className={styles.stat}>

                <div className={styles.statIcon}>
                  ▣
                </div>

                <div>
                  <strong>5K+</strong>
                  <small>Companies</small>
                </div>

              </div>


              <div className={styles.statDivider}></div>


              {/* Stat 3 */}
              <div className={styles.stat}>

                <div className={styles.statIcon}>
                  ♧
                </div>

                <div>
                  <strong>20K+</strong>
                  <small>Students</small>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= RIGHT SIDE ================= */}

        <section className={styles.rightPanel}>

          {/* Student Icon */}
          <div className={styles.studentIconCircle}>

            <div className={styles.studentIcon}>
              🎓
            </div>

          </div>


          {/* Login Content */}
          <div className={styles.loginContent}>

            <h2>
              Student Login
            </h2>

            <p className={styles.loginSubtitle}>
              Sign in to access your student career dashboard
            </p>

            <LoginForm />

          </div>


          {/* Purple Decorative Shape */}
          <div className={styles.purpleShape}></div>

        </section>

      </main>

    </div>
  );
};

export default StudentLogin;