import React from "react";
import LoginForm from "./Components/LoginForm";
import styles from "./StudentRegister.module.css";

const StudentRegister = () => {
  return (
    <div className={styles.studentRegisterPage}>

      <main className={styles.registerLayout}>

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <section className={styles.leftPanel}>

          {/* Decorative circles */}
          <div className={styles.bigCircle}></div>
          <div className={styles.smallCircle}></div>


          <div className={styles.leftContent}>

            {/* Small heading */}
            <div className={styles.topLabel}>
              START YOUR CAREER WITH JOBBRIDGE
            </div>


            {/* Main heading */}
            <h1>
              Build Your Career,
              <br />
              <span>Dream Bigger.</span>
            </h1>


            {/* Description */}
            <p className={styles.description}>
              Create your student profile, discover exciting
              opportunities and connect with companies that
              are ready to help you grow.
            </p>


            {/* Student Illustration */}
            <div className={styles.studentIllustration}>

              <div className={styles.laptop}>
                <div className={styles.laptopTop}>
                  <div className={styles.laptopLine}></div>
                  <div className={styles.laptopLine}></div>
                  <div className={styles.laptopLine}></div>

                  <div className={styles.laptopButton}>
                    Your Profile
                  </div>
                </div>

                <div className={styles.laptopBase}></div>
              </div>


              <div className={styles.matchCard}>
                <strong>
                  +12 New Opportunities
                </strong>

                <small>
                  Matched for you
                </small>
              </div>

            </div>


            {/* Features */}

            <div className={styles.featureList}>

              <div className={styles.featureItem}>

                <div className={styles.featureIcon}>
                  💼
                </div>

                <div>
                  <h3>
                    Find Jobs Easily
                  </h3>

                  <p>
                    Discover opportunities that match your skills
                  </p>
                </div>

              </div>


              <div className={styles.featureItem}>

                <div className={styles.featureIcon}>
                  👥
                </div>

                <div>
                  <h3>
                    Connect With Companies
                  </h3>

                  <p>
                    Build connections with verified recruiters
                  </p>
                </div>

              </div>


              <div className={styles.featureItem}>

                <div className={styles.featureIcon}>
                  ↗
                </div>

                <div>
                  <h3>
                    Grow Your Career
                  </h3>

                  <p>
                    Take the next step toward your dream career
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <section className={styles.rightPanel}>

          {/* Top icon */}

          <div className={styles.registerIcon}>
            🎓
          </div>


          <div className={styles.formContainer}>

            <h2>
              Register as Student
            </h2>

            <p className={styles.formSubtitle}>
              Create your account and start your career journey
            </p>


            <LoginForm />

          </div>


          {/* Purple decoration */}

          <div className={styles.purpleShape}></div>

        </section>

      </main>

    </div>
  );
};

export default StudentRegister;