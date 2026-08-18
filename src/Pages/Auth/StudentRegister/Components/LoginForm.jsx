import React, { useState } from "react";
import SkillsInput from "./SkillsInput";
import styles from "../StudentRegister.module.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>

      {/* Full Name */}
      <div className={styles.formGroup}>
        <label>Full Name</label>

        <div className={styles.inputWrapper}>
          <span className={styles.inputIcon}>👤</span>

          <input
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>
      </div>


      {/* Email */}
      <div className={styles.formGroup}>
        <label>Email Address</label>

        <div className={styles.inputWrapper}>
          <span className={styles.inputIcon}>✉</span>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>


      {/* Phone */}
      <div className={styles.formGroup}>
        <label>Phone Number</label>

        <div className={styles.inputWrapper}>
          <span className={styles.inputIcon}>☎</span>

          <input
            type="tel"
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>


      {/* Password */}
      <div className={styles.formGroup}>
        <label>Password</label>

        <div className={styles.inputWrapper}>
          <span className={styles.inputIcon}>🔒</span>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            required
          />

          <button
            type="button"
            className={styles.eyeButton}
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? "◉" : "◌"}
          </button>
        </div>
      </div>


      {/* Confirm Password */}
      <div className={styles.formGroup}>
        <label>Confirm Password</label>

        <div className={styles.inputWrapper}>
          <span className={styles.inputIcon}>🔒</span>

          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm password"
            required
          />

          <button
            type="button"
            className={styles.eyeButton}
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
          >
            {showConfirmPassword ? "◉" : "◌"}
          </button>
        </div>
      </div>


      {/* Skills */}
      <SkillsInput />


      {/* Terms */}
      <div className={styles.termsRow}>
        <input type="checkbox" required />

        <span>
          I agree to the{" "}
          <a href="/terms">Terms & Conditions</a>{" "}
          and{" "}
          <a href="/privacy">Privacy Policy</a>
        </span>
      </div>


      {/* Register Button */}
      <button
        type="submit"
        className={styles.registerButton}
      >
        Create Student Account
        <span>→</span>
      </button>


      {/* Login */}
      <div className={styles.loginDivider}>
        <span></span>

        <p>Already have an account?</p>

        <span></span>
      </div>


      <button
        type="button"
        className={styles.loginPortalButton}
        onClick={() => {
          window.location.href = "/student-login";
        }}
      >
        Login to Student Portal
      </button>

    </form>
  );
};

export default LoginForm;