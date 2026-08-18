import React from "react";
import styles from "../Jobs.module.css";

function JobActions({ job }) {

  const handleView = () => {
    alert(`Viewing ${job.title}`);
  };

  const handleEdit = () => {
    alert(`Editing ${job.title}`);
  };

  const handleDelete = () => {
    alert(`Delete action for ${job.title}`);
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
        className={styles.editButton}
        onClick={handleEdit}
      >
        Edit
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

export default JobActions;
/* // Hero Section component */