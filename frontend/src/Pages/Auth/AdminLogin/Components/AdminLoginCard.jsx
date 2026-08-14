import { useState } from "react";
import Icon from "./Icon";
import AdminSecurity from "./AdminSecurity";
import styles from "../AdminLogin.module.css";

const AdminLoginCard = ({
  email,
  password,
  rememberMe,
  setEmail,
  setPassword,
  setRememberMe,
  handleLogin,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.loginCard}>

      {/* Crown Icon */}
      <div className={styles.loginIcon}>
        <Icon name="crown" size={43} />
      </div>

      {/* Heading */}
      <h2>Admin Login</h2>

      <p className={styles.loginSubtitle}>
        Sign in to access your administration dashboard
      </p>

      {/* Login Form */}
      <form onSubmit={handleLogin}>

        {/* Email */}
        <div className={styles.inputGroup}>
          <label>Email Address</label>

          <div className={styles.inputWrapper}>
            <Icon name="mail" size={21} />

            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className={styles.inputGroup}>

          <div className={styles.passwordLabel}>
            <label>Password</label>

            <button
              type="button"
              className={styles.forgotPassword}
              onClick={() => alert("Forgot password clicked")}
            >
              Forgot Password?
            </button>
          </div>

          <div className={styles.inputWrapper}>
            <Icon name="lock" size={21} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className={styles.eyeButton}
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              <Icon
                name={showPassword ? "eyeOff" : "eye"}
                size={21}
              />
            </button>
          </div>

        </div>

        {/* Remember + Secure */}
        <div className={styles.loginOptions}>

          <label className={styles.rememberMe}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />

            <span className={styles.customCheckbox}>
              {rememberMe && <Icon name="check" size={14} />}
            </span>

            <span>Remember me</span>
          </label>

          <div className={styles.secureLogin}>
            <Icon name="lock" size={16} />
            <span>Secure Login</span>
          </div>

        </div>

        {/* Login Button */}
        <button
          type="submit"
          className={styles.loginButton}
        >
          <span>Login to Dashboard</span>

          <Icon name="arrowRight" size={24} />
        </button>

      </form>

      {/* Divider */}
      <div className={styles.accessDivider}>
        <span></span>
        <p>Authorized Access Only</p>
        <span></span>
      </div>

      {/* Security Box */}
      <AdminSecurity />

    </div>
  );
};

export default AdminLoginCard;