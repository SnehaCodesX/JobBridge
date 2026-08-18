import React from "react";
import styles from "../Applications.module.css";

function ApplicationActions({ application }) {
  const handleView = () => {
    alert(`Viewing application of ${application.applicant}`);
  };

  const handleDelete = () => {
    alert(`Delete action for ${application.applicant}`);
  };

  return (
    <div className={styles.actionButtons}>
      <button
        type="button"
        className={styles.viewButton}
        onClick={handleView}
      >
        View
      </button>

      <button
        type="button"
        className={styles.deleteButton}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default ApplicationActions;