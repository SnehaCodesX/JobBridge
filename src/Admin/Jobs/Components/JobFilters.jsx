import React from "react";
import styles from "../Jobs.module.css";

function JobFilters({ value, onChange }) {
  return (
    <div className={styles.filterContainer}>

      <label htmlFor="job-status">
        Status
      </label>

      <select
        id="job-status"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={styles.statusSelect}
      >
        <option value="All">All Status</option>
        <option value="Active">Active</option>
        <option value="Closed">Closed</option>
        <option value="Draft">Draft</option>
      </select>

    </div>
  );
}

export default JobFilters;
/* // Hero Section component */