import React from "react";
import styles from "../Companies.module.css";

const CompanySearch = ({ search, setSearch }) => {
  return (
    <div className={styles.searchBox}>
      <span className={styles.searchIcon}>⌕</span>

      <input
        type="text"
        placeholder="Search companies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button
          className={styles.clearSearch}
          onClick={() => setSearch("")}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default CompanySearch;