import React from "react";
import styles from "../Applications.module.css";

function ApplicationCard({ title, value, type }) {
  return (
    <div className={styles.applicationCard}>
      <div className={`${styles.cardIcon} ${styles[type]}`}>
        {type === "total" && "📄"}
        {type === "pending" && "⏳"}
        {type === "shortlisted" && "✓"}
        {type === "rejected" && "✕"}
      </div>

      <div>
        <p className={styles.cardTitle}>{title}</p>
        <h2 className={styles.cardValue}>{value}</h2>
      </div>
    </div>
  );
}

export default ApplicationCard;