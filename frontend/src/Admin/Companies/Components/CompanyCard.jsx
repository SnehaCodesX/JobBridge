import React from "react";
import styles from "../Companies.module.css";

const CompanyCard = ({ icon, title, value, growth, type }) => {
  return (
    <div className={styles.companyCard}>
      <div className={`${styles.cardIcon} ${styles[type]}`}>
        {icon}
      </div>

      <div className={styles.cardContent}>
        <p>{title}</p>

        <h2>{value}</h2>

        <span className={styles.growth}>
          ↑ {growth} this month
        </span>
      </div>
    </div>
  );
};

export default CompanyCard;