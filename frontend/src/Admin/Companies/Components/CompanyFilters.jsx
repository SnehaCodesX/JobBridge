import React from "react";
import styles from "../Companies.module.css";

const CompanyFilters = ({
  industry,
  setIndustry,
  status,
  setStatus,
  onAddCompany,
}) => {
  return (
    <div className={styles.filterActions}>

      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className={styles.filterSelect}
      >
        <option value="All">All Industries</option>
        <option value="IT Services">IT Services</option>
        <option value="Software">Software</option>
        <option value="Product">Product</option>
        <option value="Analytics">Analytics</option>
        <option value="Cloud">Cloud</option>
        <option value="Design">Design</option>
        <option value="Cybersecurity">Cybersecurity</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={styles.filterSelect}
      >
        <option value="All">All Status</option>
        <option value="Verified">Verified</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
      </select>

      <button
        className={styles.addCompanyButton}
        onClick={onAddCompany}
      >
        <span>＋</span>
        Add Company
      </button>

    </div>
  );
};

export default CompanyFilters;