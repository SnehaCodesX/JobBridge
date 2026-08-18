import styles from "./CompanyLogin.module.css";
import LoginForm from "./Components/LoginForm";

function FeatureIcon({ type }) {
  const icons = {
    job: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v6c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.1 2.1 4.9-5" />
      </>
    ),
    chart: (
      <>
        <path d="m4 16 6-6 4 4 6-7" />
        <path d="M15 7h5v5" />
      </>
    ),
    building: (
      <path d="M4 21V4h12v17M16 9h4v12M8 8h4M8 12h4M8 16h4M2 21h20" />
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5a3 3 0 0 1 0 6M18 14c2 1 3 3.2 3 6" />
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

const features = [
  {
    icon: "job",
    title: "Post Job Openings",
    text: "Reach the right talent for your company",
  },
  {
    icon: "shield",
    title: "Verified Candidates",
    text: "Review profiles and find the best match",
  },
  {
    icon: "chart",
    title: "Track Hiring Progress",
    text: "Monitor applications and team performance",
  },
];

export default function CompanyLogin() {
  return (
    <main className={styles.companyLoginPage}>
      <div className={styles.companyLayout}>
        <section className={styles.leftPanel}>
          <div className={styles.bigCircle} />
          <div className={styles.smallDotOne} />
          <div className={styles.smallDotTwo} />

          <div className={styles.leftContent}>
            <h1>
              Build Your Team,
              <span>Find Great Talent</span>
            </h1>

            <p className={styles.description}>
              Grow your team with powerful hiring tools designed to help you
              post jobs, review candidates and manage recruitment in one place.
            </p>

            <div className={styles.features}>
              {features.map((feature) => (
                <article className={styles.featureItem} key={feature.title}>
                  <span className={styles.featureIcon}>
                    <FeatureIcon type={feature.icon} />
                  </span>

                  <div>
                    <h2>{feature.title}</h2>
                    <p>{feature.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.statsBox}>
              <div className={styles.stat}>
                <span className={styles.statIcon}>
                  <FeatureIcon type="job" />
                </span>
                <div>
                  <strong>10K+</strong>
                  <small>Active Jobs</small>
                </div>
              </div>

              <div className={styles.stat}>
                <span className={styles.statIcon}>
                  <FeatureIcon type="building" />
                </span>
                <div>
                  <strong>5K+</strong>
                  <small>Companies</small>
                </div>
              </div>

              <div className={styles.stat}>
                <span className={styles.statIcon}>
                  <FeatureIcon type="users" />
                </span>
                <div>
                  <strong>20K+</strong>
                  <small>Candidates</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.rightPanel}>
          <div className={styles.bottomShape} />
          <LoginForm />
        </section>
      </div>
    </main>
  );
}