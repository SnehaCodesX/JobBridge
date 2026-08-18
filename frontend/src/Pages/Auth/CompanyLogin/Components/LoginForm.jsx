import { useState } from "react";
import styles from "../CompanyLogin.module.css";

function Icon({ type }) {
  const icons = {
    crown: (
      <>
        <path d="m3 6 4.5 4L12 3l4.5 7L21 6l-2 13H5L3 6Z" />
        <path d="M5 19h14M7 14h10" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    eye: (
      <>
        <path d="m3 3 18 18" />
        <path d="M10.5 10.5a2 2 0 0 0 3 3" />
        <path d="M6.5 6.5C4 8.3 2.5 12 2.5 12s3.4 6 9.5 6c1 0 2-.2 2.9-.5" />
        <path d="M10 6.1A10 10 0 0 1 12 6c6.1 0 9.5 6 9.5 6a18 18 0 0 1-2.7 3.7" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    shield: (
      <>
        <path d="M12 3 20 6v6c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.1 2.1 4.9-5" />
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

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setForm((oldForm) => ({
      ...oldForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Yahan apna company-login backend API call add karna hai.
    console.log(form);
  };

  return (
    <div className={styles.loginFormBox}>
      <div className={styles.crownIcon}>
        <Icon type="crown" />
      </div>

      <h2>Company Login</h2>

      <p className={styles.loginSubText}>
        Sign in to access your company hiring dashboard
      </p>

      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Work Email Address

          <div className={styles.inputBox}>
            <Icon type="email" />

            <input
              type="email"
              name="email"
              placeholder="Enter company email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </label>

        <label className={styles.formLabel}>
          Password

          <button type="button" className={styles.forgotButton}>
            Forgot Password?
          </button>

          <div className={styles.inputBox}>
            <Icon type="lock" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className={styles.eyeButton}
              onClick={() => setShowPassword(!showPassword)}
            >
              <Icon type="eye" />
            </button>
          </div>
        </label>

        <div className={styles.loginOptions}>
          <label className={styles.rememberMe}>
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            Remember me
          </label>

          <span className={styles.secureText}>
            <Icon type="lock" />
            Secure Login
          </span>
        </div>

        <button type="submit" className={styles.loginButton}>
          Login Company Portal
          <Icon type="arrow" />
        </button>
      </form>

      <div className={styles.authorizedAccess}>
        <span />
        Authorized Access Only
        <span />
      </div>

      <div className={styles.securityBox}>
        <span>
          <Icon type="shield" />
        </span>
        Your login credentials are encrypted and securely protected.
      </div>
    </div>
  );
}