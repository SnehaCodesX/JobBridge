import React, { useState } from "react";
import styles from "../StudentRegister.module.css";

const SkillsInput = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    const newSkill = skill.trim();

    if (
      newSkill &&
      !skills.includes(newSkill)
    ) {
      setSkills([...skills, newSkill]);
      setSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(
      skills.filter(
        (item) => item !== skillToRemove
      )
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className={styles.formGroup}>

      <label>Skills</label>

      <div className={styles.skillsWrapper}>

        <div className={styles.skillsInputRow}>

          <span className={styles.inputIcon}>
            ✦
          </span>

          <input
            type="text"
            value={skill}
            placeholder="Add your skills"
            onChange={(e) =>
              setSkill(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />

          <button
            type="button"
            className={styles.addSkillButton}
            onClick={addSkill}
          >
            +
          </button>

        </div>


        {skills.length > 0 && (
          <div className={styles.skillTags}>

            {skills.map((item) => (
              <span
                key={item}
                className={styles.skillTag}
              >
                {item}

                <button
                  type="button"
                  onClick={() =>
                    removeSkill(item)
                  }
                >
                  ×
                </button>
              </span>
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default SkillsInput;