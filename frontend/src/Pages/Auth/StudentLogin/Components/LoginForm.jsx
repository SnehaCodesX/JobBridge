import React, { useState } from "react";
import styles from "../StudentLogin.module.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>

      {/* Email */}
      <div className={styles.inputGroup}>
        <label>Email or Phone Number</label>

        <div className={styles.inputWrapper}>
          <span className={styles.inputIcon}>✉</span>

          <input
            type="text"
            placeholder="Enter your email or phone number"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div className={styles.inputGroup}>

        <div className={styles.passwordHeader}>
          <label>Password</label>

          <a href="/forgot-password">
            Forgot Password?
          </a>
        </div>

        <div className={styles.inputWrapper}>
          <span className={styles.inputIcon}>🔒</span>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            required
          />

          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "◉" : "◌"}
          </button>
        </div>
      </div>

      {/* Remember Me */}
      <div className={styles.rememberRow}>
        <label>
          <input type="checkbox" />
          <span>Remember me</span>
        </label>
      </div>

      {/* Login Button */}
      <button type="submit" className={styles.loginButton}>
        Login Student Portal
        <span>→</span>
      </button>

      {/* Authorized Access */}
      <div className={styles.authorizedLine}>
        <span></span>

        <p>Authorized Access Only</p>

        <span></span>
      </div>

      {/* Security */}
      <div className={styles.securityBox}>
        <div className={styles.securityIcon}>
          ♢
        </div>

        <p>
          Your login credentials are encrypted and securely protected.
        </p>
      </div>

    </form>
  );
};

export default LoginForm;