import React from "react";
import styles from "../Jobs.module.css";

function JobCard({ title, value, type }) {
  return (
    <div className={styles.jobCard}>

      <div className={`${styles.cardIcon} ${styles[type]}`}>
        {type === "total" && "💼"}
        {type === "active" && "✓"}
        {type === "closed" && "✕"}
        {type === "draft" && "📝"}
      </div>

      <div>
        <p className={styles.cardTitle}>{title}</p>
        <h2 className={styles.cardValue}>{value}</h2>
      </div>

    </div>
  );
}

export default JobCard;
/* // Hero Section component */