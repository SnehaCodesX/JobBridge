import { useState } from "react";
import styles from "../HomePage.module.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    company: "TechNova Solutions",
    avatar: "👩🏻",
    text:
      "JobBridge helped me find the perfect fresher opportunity. The AI recommendations were surprisingly accurate!",
  },
  {
    name: "Rahul Verma",
    role: "Software Engineer",
    company: "CodeCraft",
    avatar: "👨🏻",
    text:
      "I applied to multiple verified companies through JobBridge and finally got my first job.",
  },
  {
    name: "Ananya Singh",
    role: "UI/UX Designer",
    company: "PixelPerfect",
    avatar: "👩🏻‍💻",
    text:
      "The career resources and job recommendations made my job search much easier.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const testimonial = testimonials[active];

  const next = () => {
    setActive((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className={styles.testimonialSection}>

      <div className={styles.sectionTitleCenter}>
        <span>SUCCESS STORIES</span>
        <h2>What Students Say</h2>
        <p>Real experiences from JobBridge users.</p>
      </div>

      <div className={styles.testimonialCard}>

        <button
          className={styles.testimonialArrow}
          onClick={previous}
        >
          ←
        </button>

        <div className={styles.testimonialContent}>

          <div className={styles.stars}>
            ★★★★★
          </div>

          <p>"{testimonial.text}"</p>

          <div className={styles.testimonialUser}>
            <div className={styles.avatar}>
              {testimonial.avatar}
            </div>

            <div>
              <strong>{testimonial.name}</strong>
              <span>
                {testimonial.role} · {testimonial.company}
              </span>
            </div>
          </div>

        </div>

        <button
          className={styles.testimonialArrow}
          onClick={next}
        >
          →
        </button>

      </div>

      <div className={styles.testimonialDots}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={
              index === active
                ? styles.activeDot
                : ""
            }
            onClick={() => setActive(index)}
          />
        ))}
      </div>

    </section>
  );
};

export default Testimonials;