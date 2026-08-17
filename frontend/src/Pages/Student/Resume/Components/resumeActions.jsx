import styles from "../Resume.module.css";

const ResumeActions = () => {

  const handleDownload = () => {
    alert("Download feature will be connected with backend later.");
  };

  const handleUpdate = () => {
    alert("Resume update feature will be available soon.");
  };

  return (
    <div className={styles.actions}>

      <button
        className={`${styles.actionBtn} ${styles.downloadBtn}`}
        onClick={handleDownload}
      >
        ⬇️ Download Resume
      </button>

      <button
        className={`${styles.actionBtn} ${styles.updateBtn}`}
        onClick={handleUpdate}
      >
        🔄 Update Resume
      </button>

    </div>
  );
};

export default ResumeActions;