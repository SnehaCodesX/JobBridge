import styles from "../StudentProfile.module.css";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Git",
    "GitHub",
  ];

  return (
    <section className={styles.profileCard}>
      <div className={styles.cardTitle}>
        <h2>💻 Skills</h2>
        <span>03</span>
      </div>

      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <span className={styles.skill} key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;