import React from "react";
import styles from "../ContactPage.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>

      <div className={styles.sectionLabel}>
        <span>CONTACT US</span>
      </div>

      <h2 className={styles.infoTitle}>
        We'd love to
        <span> hear from you.</span>
      </h2>

      <p className={styles.infoDescription}>
        Whether you're a student looking for your first opportunity
        or a company searching for fresh talent, our team is ready
        to help.
      </p>

      {/* Email */}
      <div className={styles.infoCard}>

        <div className={styles.infoIcon}>
          ✉
        </div>

        <div>
          <span className={styles.infoCardLabel}>
            Email Us
          </span>

          <strong>
            support@jobbridge.com
          </strong>

          <small>
            We usually respond within 24 hours
          </small>
        </div>

      </div>

      {/* Phone */}
      <div className={styles.infoCard}>

        <div className={styles.infoIcon}>
          ☎
        </div>

        <div>
          <span className={styles.infoCardLabel}>
            Call Us
          </span>

          <strong>
            +91 98765 43210
          </strong>

          <small>
            Mon – Fri, 10 AM – 6 PM
          </small>
        </div>

      </div>

      {/* Location */}
      <div className={styles.infoCard}>

        <div className={styles.infoIcon}>
          ⌖
        </div>

        <div>
          <span className={styles.infoCardLabel}>
            Visit Us
          </span>

          <strong>
            Kanpur, Uttar Pradesh
          </strong>

          <small>
            India
          </small>
        </div>

      </div>

      {/* Social */}
      <div className={styles.socialArea}>

        <span>Follow JobBridge</span>

        <div className={styles.socialIcons}>

          <button aria-label="LinkedIn">in</button>
          <button aria-label="Instagram">◎</button>
          <button aria-label="Twitter">𝕏</button>
          <button aria-label="Facebook">f</button>

        </div>

      </div>

    </div>
  );
};

export default ContactInfo;