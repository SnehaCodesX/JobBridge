import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ContactHero from "./Components/ContactHero";
import ContactForm from "./Components/ContactForm";
import ContactInfo from "./Components/ContactInfo";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <main className={styles.contactPage}>

       {/* Navbar */}
      <Navbar />

      {/* Background decoration */}
      <div className={styles.backgroundGlowOne}></div>
      <div className={styles.backgroundGlowTwo}></div>
      <div className={styles.backgroundGlowThree}></div>

      <span className={styles.floatingOrbOne}></span>
      <span className={styles.floatingOrbTwo}></span>
      <span className={styles.floatingOrbThree}></span>

      {/* HERO */}
      <ContactHero />

      {/* CONTACT AREA */}
      <section className={styles.contactSection}>

        <ContactInfo />

        <ContactForm />

      </section>

      {/* Bottom CTA */}
      <section className={styles.contactCTA}>

        <div className={styles.ctaGlow}></div>

        <span className={styles.ctaParticleOne}></span>
        <span className={styles.ctaParticleTwo}></span>
        <span className={styles.ctaParticleThree}></span>

        <div className={styles.ctaContent}>

          <div>
            <span className={styles.ctaSmallText}>
              BUILD YOUR CAREER WITH JOBBRIDGE
            </span>

            <h2>
              Your next opportunity
              <span> starts here.</span>
            </h2>

            <p>
              Have a question, suggestion, or need career guidance?
              We're always happy to hear from you.
            </p>
          </div>

          <button
            className={styles.ctaButton}
            onClick={() =>
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
            <span>→</span>
          </button>

        </div>

      </section>

    </main>
  );
};

export default ContactPage;