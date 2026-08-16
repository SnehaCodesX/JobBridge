import React, { useState } from "react";
import JobCard from "./Components/JobCard";
import JobFilters from "./Components/JobFilters";
import JobSearch from "./Components/JobSearch";
import JobTable from "./Components/JobTable";
import styles from "./Jobs.module.css";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Indore",
    type: "Full Time",
    applications: 24,
    status: "Active",
    date: "16 Aug 2026",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "SoftTech Pvt Ltd",
    location: "Bhopal",
    type: "Full Time",
    applications: 18,
    status: "Active",
    date: "15 Aug 2026",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Labs",
    location: "Delhi",
    type: "Part Time",
    applications: 12,
    status: "Closed",
    date: "14 Aug 2026",
  },
  {
    id: 4,
    title: "React Developer",
    company: "WebWorld",
    location: "Pune",
    type: "Full Time",
    applications: 31,
    status: "Active",
    date: "13 Aug 2026",
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Innovate Tech",
    location: "Mumbai",
    type: "Full Time",
    applications: 20,
    status: "Draft",
    date: "12 Aug 2026",
  },
];

function Jobs() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredJobs = jobsData.filter((job) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText) ||
      job.location.toLowerCase().includes(searchText) ||
      job.type.toLowerCase().includes(searchText);

    const matchesStatus =
      status === "All" || job.status === status;

    return matchesSearch && matchesStatus;
  });

  const activeCount = jobsData.filter(
    (job) => job.status === "Active"
  ).length;

  const closedCount = jobsData.filter(
    (job) => job.status === "Closed"
  ).length;

  const draftCount = jobsData.filter(
    (job) => job.status === "Draft"
  ).length;

  return (
    <div className={styles.jobsPage}>

      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Jobs</h1>
          <p>Manage and monitor all job postings</p>
        </div>

        <button className={styles.addJobButton}>
          + Post New Job
        </button>
      </div>

      {/* Job Cards */}
      <div className={styles.cardsGrid}>

        <JobCard
          title="Total Jobs"
          value={jobsData.length}
          type="total"
        />

        <JobCard
          title="Active Jobs"
          value={activeCount}
          type="active"
        />

        <JobCard
          title="Closed Jobs"
          value={closedCount}
          type="closed"
        />

        <JobCard
          title="Draft Jobs"
          value={draftCount}
          type="draft"
        />

      </div>

      {/* Jobs Table Section */}
      <div className={styles.contentBox}>

        <div className={styles.filterRow}>

          <JobSearch
            value={search}
            onChange={setSearch}
          />

          <JobFilters
            value={status}
            onChange={setStatus}
          />

        </div>

        <JobTable jobs={filteredJobs} />

      </div>

    </div>
  );
}

export default Jobs;
/* // Hero Section component */