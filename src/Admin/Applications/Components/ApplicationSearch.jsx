import React from "react";
import styles from "../Applications.module.css";

function ApplicationSearch({ value, onChange }) {
  return (
    <div className={styles.searchContainer}>
      <span className={styles.searchIcon}>⌕</span>

      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search applications..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default ApplicationSearch;