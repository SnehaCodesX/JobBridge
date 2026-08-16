import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import JobBridgeLogo from "../../assets/logos/JobBridgeLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsResourceOpen(false);
  };

  const toggleResources = () => {
    setIsResourceOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <Link
          to="/"
          className={styles.logo}
          onClick={closeMenu}
        >
          <img
            src={JobBridgeLogo}
            alt="JobBridge"
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`${styles.navLinks} ${
            isMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >

          {/* Home */}
          <Link
            to="/"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* Jobs */}
          <Link
            to="/jobs"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Jobs
          </Link>

          {/* Internships */}
          <Link
            to="/internships"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Internships
          </Link>

          {/* Companies */}
          <Link
            to="/companies"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Companies
          </Link>

          {/* Resources Dropdown */}
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownButton}
              onClick={toggleResources}
              type="button"
            >
              Resources

              <span
                className={`${styles.arrow} ${
                  isResourceOpen ? styles.arrowUp : ""
                }`}
              >
                ▾
              </span>
            </button>

            {isResourceOpen && (
              <div className={styles.dropdownMenu}>

                <Link
                  to="/career-resources"
                  onClick={closeMenu}
                >
                  Career Resources
                </Link>

                <Link
                  to="/resume-builder"
                  onClick={closeMenu}
                >
                  Resume Builder
                </Link>

                <Link
                  to="/interview-preparation"
                  onClick={closeMenu}
                >
                  Interview Preparation
                </Link>

                <Link
                  to="/career-tips"
                  onClick={closeMenu}
                >
                  Career Tips
                </Link>

              </div>
            )}
          </div>

          {/* About */}
          <Link
            to="/about"
            className={styles.navLink}
            onClick={closeMenu}
          >
            About Us
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Contact
          </Link>

          {/* Mobile Auth Buttons */}
          <div className={styles.mobileAuthButtons}>

            <Link
              to="/login"
              className={styles.mobileLogin}
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className={styles.mobileSignup}
              onClick={closeMenu}
            >
              Sign Up
            </Link>

          </div>

        </nav>

        {/* Right Side */}
        <div className={styles.rightSection}>

          {/* Theme Button */}
          <button
            type="button"
            className={styles.themeButton}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          {/* Desktop Auth */}
          <div className={styles.authButtons}>

            <Link
              to="/login"
              className={styles.loginButton}
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className={styles.signupButton}
              onClick={closeMenu}
            >
              Sign Up
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`${styles.menuButton} ${
              isMenuOpen ? styles.menuActive : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;