import React from "react";
import styles from "../Applications.module.css";

function ApplicationFilters({ value, onChange }) {
  return (
    <div className={styles.filterContainer}>
      <label htmlFor="application-status">Status</label>

      <select
        id="application-status"
        className={styles.statusSelect}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Shortlisted">Shortlisted</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
}

export default ApplicationFilters;