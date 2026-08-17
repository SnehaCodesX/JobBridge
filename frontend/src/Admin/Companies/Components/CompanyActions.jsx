import React from "react";
import styles from "../Companies.module.css";

const CompanyActions = ({
  company,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={styles.actionButtons}>

      <button
        className={styles.actionButton}
        onClick={() => onView(company)}
        title="View Company"
      >
        👁
      </button>

      <button
        className={styles.actionButton}
        onClick={() => onEdit(company)}
        title="Edit Company"
      >
        ✎
      </button>

      <button
        className={`${styles.actionButton} ${styles.deleteAction}`}
        onClick={() => onDelete(company)}
        title="Delete Company"
      >
        🗑
      </button>

    </div>
  );
};

export default CompanyActions;