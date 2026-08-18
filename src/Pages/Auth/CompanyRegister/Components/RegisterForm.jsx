import styles from "../companyRegister.module.css";

export default function RegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Company registration submitted!");
  };

  return (
    <div className={styles.registerCard}>

      {/* Icon */}
      <div className={styles.registerIcon}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      </div>

      <h2 className={styles.formTitle}>
        Register Your Company
      </h2>

      <p className={styles.formSubtitle}>
        Create your company account and start hiring great talent
      </p>

      <form onSubmit={handleSubmit}>

        {/* Company Name */}
        <div className={styles.inputGroup}>
          <label>Company Name</label>

          <div className={styles.inputBox}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M8 20V8h8v12M8 12h8M8 16h8" />
            </svg>

            <input
              type="text"
              placeholder="Enter company name"
              required
            />
          </div>
        </div>

        {/* Company Email */}
        <div className={styles.inputGroup}>
          <label>Company Email</label>

          <div className={styles.inputBox}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>

            <input
              type="email"
              placeholder="Enter company email"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div className={styles.inputGroup}>
          <label>Company Phone</label>

          <div className={styles.inputBox}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
            </svg>

            <input
              type="tel"
              placeholder="Enter company phone"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className={styles.inputGroup}>
          <label>Password</label>

          <div className={styles.inputBox}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>

            <input
              type="password"
              placeholder="Create password"
              required
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className={styles.inputGroup}>
          <label>Confirm Password</label>

          <div className={styles.inputBox}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>

            <input
              type="password"
              placeholder="Confirm password"
              required
            />
          </div>
        </div>

        {/* Terms */}
        <label className={styles.terms}>
          <input type="checkbox" required />
          <span>
            I agree to the Terms & Conditions and Privacy Policy
          </span>
        </label>

        {/* Button */}
        <button type="submit" className={styles.registerButton}>
          Create Company Account
          <span>→</span>
        </button>

        <div className={styles.divider}>
          <span></span>
          <p>Already have an account?</p>
          <span></span>
        </div>

        <button
          type="button"
          className={styles.loginButton}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Login to Company Portal
        </button>

      </form>
    </div>
  );
}