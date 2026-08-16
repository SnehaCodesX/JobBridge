import React, { useState } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaLink,
  FaPaperPlane,
  FaEnvelope,
} from "react-icons/fa";

import styles from "./Footer.module.css";

// =========================================
// JOBBRIDGE LOGO
// =========================================
import JobBridgeLogo from "../../assets/Logos/JobBridgeLogo.png";


const Footer = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  // =========================================
  // NEWSLETTER SUBSCRIBE
  // =========================================

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage("You're successfully subscribed!");
    setEmail("");
  };


  // =========================================
  // SCROLL TO TOP
  // =========================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  // =========================================
  // COMPONENT
  // =========================================

  return (
    <footer className={styles.footer}>

      {/* =========================================
          DECORATIVE BACKGROUND
      ========================================= */}

      <div className={styles.footerGlowOne}></div>

      <div className={styles.footerGlowTwo}></div>

      <div className={styles.waveOne}></div>

      <div className={styles.waveTwo}></div>

      <div className={styles.floatingOrbOne}></div>

      <div className={styles.floatingOrbTwo}></div>

      <div className={styles.floatingOrbThree}></div>


      {/* =========================================
          MAIN FOOTER CARD
      ========================================= */}

      <div className={styles.footerCard}>

        {/* =========================================
            TOP FOOTER CONTENT
        ========================================= */}

        <div className={styles.footerMain}>


          {/* =========================================
              BRAND SECTION
          ========================================= */}

          <div className={styles.brandSection}>

            <button
              className={styles.brandLogo}
              onClick={scrollToTop}
              aria-label="Go to top"
            >

              {/* ACTUAL JOBBRIDGE LOGO IMAGE */}

              <img
                src={JobBridgeLogo}
                alt="JobBridge"
                className={styles.logoImage}
              />

            </button>


            {/* TAGLINE */}

            <p className={styles.tagline}>
              Your Career • Our Priority
            </p>


            {/* DESCRIPTION */}

            <p className={styles.brandDescription}>
              Connecting talent with opportunities.
              Building brighter careers for a stronger tomorrow.
            </p>


            {/* =========================================
                SOCIAL ICONS
            ========================================= */}

            <div className={styles.socialIcons}>

              {/* FACEBOOK */}

              <button
                type="button"
                aria-label="Facebook"
                onClick={() =>
                  window.open(
                    "https://facebook.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <FaFacebookF />
              </button>


              {/* TWITTER / X */}

              <button
                type="button"
                aria-label="Twitter"
                onClick={() =>
                  window.open(
                    "https://twitter.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <FaTwitter />
              </button>


              {/* LINKEDIN */}

              <button
                type="button"
                aria-label="LinkedIn"
                onClick={() =>
                  window.open(
                    "https://linkedin.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <FaLinkedinIn />
              </button>


              {/* INSTAGRAM */}

              <button
                type="button"
                aria-label="Instagram"
                onClick={() =>
                  window.open(
                    "https://instagram.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <FaInstagram />
              </button>


              {/* YOUTUBE */}

              <button
                type="button"
                aria-label="YouTube"
                onClick={() =>
                  window.open(
                    "https://youtube.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <FaYoutube />
              </button>

            </div>

          </div>



          {/* =========================================
              QUICK LINKS
          ========================================= */}

          <div className={styles.linksSection}>

            <div className={styles.sectionHeading}>

              <span className={styles.headingIcon}>
                <FaLink />
              </span>

              <h3>
                Quick Links
              </h3>

            </div>


            <div className={styles.linksGrid}>


              {/* FIRST COLUMN */}

              <div className={styles.linkColumn}>

                <button
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  <span>›</span>
                  Home
                </button>


                <button
                  onClick={() => {
                    window.location.href = "/about";
                  }}
                >
                  <span>›</span>
                  About Us
                </button>


                <button
                  onClick={() => {
                    window.location.href = "/jobs";
                  }}
                >
                  <span>›</span>
                  Find Jobs
                </button>

              </div>



              {/* SECOND COLUMN */}

              <div className={styles.linkColumn}>

                <button
                  onClick={() => {
                    window.location.href = "/employers";
                  }}
                >
                  <span>›</span>
                  For Employers
                </button>


                <button
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  <span>›</span>
                  Contact Us
                </button>


                <button
                  onClick={() => {
                    window.location.href = "/faq";
                  }}
                >
                  <span>›</span>
                  FAQs
                </button>

              </div>

            </div>

          </div>



          {/* =========================================
              NEWSLETTER SECTION
          ========================================= */}

          <div className={styles.subscribeSection}>


            {/* HEADING */}

            <div className={styles.subscribeHeading}>

              <span className={styles.subscribeIcon}>
                <FaEnvelope />
              </span>


              <div>

                <h3>
                  Stay Connected
                </h3>

                <p>
                  Get the latest job updates and career tips.
                </p>

              </div>

            </div>



            {/* SUBSCRIBE FORM */}

            <form
              className={styles.subscribeForm}
              onSubmit={handleSubscribe}
            >

              <div className={styles.emailBox}>

                <FaEnvelope />

                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>


              <button
                type="submit"
                className={styles.subscribeButton}
              >

                <span>
                  Subscribe
                </span>

                <FaPaperPlane />

              </button>

            </form>


            {/* MESSAGE */}

            {message && (
              <p className={styles.subscribeMessage}>
                {message}
              </p>
            )}

          </div>

        </div>



        {/* =========================================
            BOTTOM FOOTER
        ========================================= */}

        <div className={styles.footerBottom}>


          {/* COPYRIGHT */}

          <div className={styles.copyright}>
            © 2026 <strong>JobBridge.</strong> All rights reserved.
          </div>



          {/* MADE WITH */}

          <div className={styles.madeWith}>

            <span>
              💜
            </span>

            Made with

            <span>
              💜
            </span>

            for a better career future

          </div>



          {/* LEGAL LINKS */}

          <div className={styles.legalLinks}>

            <button
              onClick={() => {
                window.location.href = "/privacy";
              }}
            >
              Privacy Policy
            </button>


            <span>
              |
            </span>


            <button
              onClick={() => {
                window.location.href = "/terms";
              }}
            >
              Terms & Conditions
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};


export default Footer;