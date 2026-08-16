import React, { useState } from "react";
import styles from "../ContactPage.module.css";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      className={styles.formWrapper}
      id="contact-form"
    >

      <div className={styles.formTopGlow}></div>

      <div className={styles.formHeader}>

        <span className={styles.formBadge}>
          ✦ GET IN TOUCH
        </span>

        <h2>
          Send us a
          <span> message.</span>
        </h2>

        <p>
          Fill out the form below and our team will get back to you
          as soon as possible.
        </p>

      </div>

      <form
        className={styles.contactForm}
        onSubmit={handleSubmit}
      >

        <div className={styles.inputRow}>

          <div className={styles.inputGroup}>
            <label htmlFor="name">
              Your Name
            </label>

            <div className={styles.inputBox}>
              <span>◯</span>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">
              Email Address
            </label>

            <div className={styles.inputBox}>
              <span>✉</span>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

        </div>

        <div className={styles.inputGroup}>

          <label htmlFor="subject">
            Subject
          </label>

          <div className={styles.inputBox}>
            <span>✦</span>

            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">
                Select a subject
              </option>

              <option value="job">
                Job Opportunities
              </option>

              <option value="internship">
                Internship
              </option>

              <option value="company">
                Company Registration
              </option>

              <option value="account">
                Account Support
              </option>

              <option value="feedback">
                Feedback
              </option>

              <option value="other">
                Other
              </option>
            </select>

          </div>

        </div>

        <div className={styles.inputGroup}>

          <label htmlFor="message">
            Your Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Tell us how we can help you..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>

        </div>

        <button
          type="submit"
          className={styles.submitButton}
        >
          <span>Send Message</span>
          <span className={styles.submitArrow}>
            →
          </span>
        </button>

        <div className={styles.formNote}>
          <span>🔒</span>
          Your information is safe and secure with us.
        </div>

      </form>

    </div>
  );
};

export default ContactForm;