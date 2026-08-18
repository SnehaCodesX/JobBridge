import React from "react";
import styles from "../Jobs.module.css";

function JobSearch({ value, onChange }) {
  return (
    <div className={styles.searchContainer}>

      <span className={styles.searchIcon}>
        ⌕
      </span>

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search jobs..."
        className={styles.searchInput}
      />

    </div>
  );
}

export default JobSearch;
/* // Hero Section component */