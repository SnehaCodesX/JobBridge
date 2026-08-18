import { useState } from "react";
import styles from "../Resume.module.css";

const UploadResume = () => {

  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <section className={styles.uploadCard}>

      <div className={styles.cardTop}>
        <div>
          <span className={styles.smallTitle}>
            RESUME
          </span>

          <h2>Upload Resume</h2>
        </div>

        <div className={styles.uploadIcon}>
          📤
        </div>
      </div>

      <label className={styles.uploadBox}>

        <div className={styles.uploadCloud}>
          ☁️
        </div>

        <h3>
          {fileName ? "Resume Selected" : "Drop your resume here"}
        </h3>

        <p>
          PDF, DOC or DOCX • Maximum 5MB
        </p>

        <span className={styles.chooseButton}>
          Choose File
        </span>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          hidden
        />

      </label>

      {fileName && (
        <div className={styles.selectedFile}>
          <span>📄</span>
          <strong>{fileName}</strong>
          <span className={styles.check}>✓</span>
        </div>
      )}

    </section>
  );
};

export default UploadResume;