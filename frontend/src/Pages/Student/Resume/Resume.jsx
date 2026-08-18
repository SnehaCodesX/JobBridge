import styles from "./Resume.module.css";
import UploadResume from "./Components/UploadResume";
import ResumePreview from "./Components/ResumePreview";
import ResumeActions from "./Components/ResumeActions";

const Resume = () => {
  return (
    <div className={styles.resumePage}>
      <div className={styles.container}>

        <div className={styles.pageHeader}>
          <div>
            <span className={styles.badge}>STUDENT PROFILE</span>
            <h1>My Resume</h1>
            <p>
              Upload, preview and manage your professional resume.
            </p>
          </div>

          <div className={styles.headerIcon}>
            📄
          </div>
        </div>

        <div className={styles.resumeGrid}>

          <UploadResume />

          <ResumePreview />

        </div>

        <ResumeActions />

      </div>
    </div>
  );
};

export default Resume;