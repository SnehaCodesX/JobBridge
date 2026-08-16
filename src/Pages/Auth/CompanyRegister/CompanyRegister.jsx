import styles from "./companyRegister.module.css";
import RegisterForm from "./Components/RegisterForm";

function Icon({ type }) {
  const icons = {
    job: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </>
    ),

    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5a3 3 0 0 1 0 6M18 14c2 1 3 3.2 3 6" />
      </>
    ),

    chart: (
      <>
        <path d="m4 16 6-6 4 4 6-7" />
        <path d="M15 7h5v5" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[type]}
    </svg>
  );
}

const benefits = [
  ["job", "Post Jobs Easily", "Find skilled candidates for your open roles"],
  [
    "users",
    "Manage Applicants",
    "Review and organise every application in one place",
  ],
  [
    "chart",
    "Grow Your Team",
    "Track hiring progress with smart insights",
  ],
];

export default function CompanyRegister() {
  return (
    <main className={styles.companyRegisterPage}>
      <div className={styles.pageLayout}>

        {/* LEFT SIDE */}
        <section className={styles.leftPanel}>
          <div className={styles.largeCircle}></div>
          <div className={styles.dotOne}></div>
          <div className={styles.dotTwo}></div>

          <div className={styles.leftContent}>
            <p className={styles.smallTitle}>
              START HIRING WITH JOBBRIDGE
            </p>

            <h1>
              Build Your Dream Team,
              <span>Hire Smarter.</span>
            </h1>

            <p className={styles.description}>
              Create your company profile, publish opportunities and connect
              with talented candidates who are ready to grow with you.
            </p>

            {/* Illustration */}
            <div className={styles.illustration}>
              <div className={styles.laptop}>
                <div className={styles.laptopTop}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className={styles.laptopScreen}>
                  <div className={styles.screenHeader}>
                    <div></div>
                    <div></div>
                  </div>

                  <div className={styles.screenLines}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className={styles.screenCard}>
                    Your Company
                  </div>
                </div>

                <div className={styles.laptopBase}></div>
              </div>

              <div className={styles.floatingCard}>
                <b>+12 New Candidates</b>
                <small>Matched for your jobs</small>
              </div>
            </div>

            {/* Benefits */}
            <div className={styles.benefitList}>
              {benefits.map(([icon, title, text]) => (
                <article className={styles.benefit} key={title}>
                  <span className={styles.benefitIcon}>
                    <Icon type={icon} />
                  </span>

                  <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className={styles.rightPanel}>
          <div className={styles.purpleShape}></div>

          <div className={styles.formWrapper}>
            <RegisterForm />
          </div>
        </section>

      </div>
    </main>
  );
}