import React, { useState } from "react";
import ApplicationCard from "./Components/ApplicationCard";
import ApplicationFilters from "./Components/ApplicationFilters";
import ApplicationSearch from "./Components/ApplicationSearch";
import ApplicationTable from "./Components/ApplicationTable";
import styles from "./Applications.module.css";

const applicationsData = [
  {
    id: 1,
    applicant: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    job: "Frontend Developer",
    company: "Tech Solutions",
    status: "Pending",
    date: "16 Aug 2026",
  },
  {
    id: 2,
    applicant: "Priya Verma",
    email: "priya.verma@gmail.com",
    job: "Backend Developer",
    company: "SoftTech Pvt Ltd",
    status: "Shortlisted",
    date: "15 Aug 2026",
  },
  {
    id: 3,
    applicant: "Aman Gupta",
    email: "aman.gupta@gmail.com",
    job: "UI/UX Designer",
    company: "Creative Labs",
    status: "Rejected",
    date: "14 Aug 2026",
  },
  {
    id: 4,
    applicant: "Neha Singh",
    email: "neha.singh@gmail.com",
    job: "React Developer",
    company: "WebWorld",
    status: "Pending",
    date: "13 Aug 2026",
  },
  {
    id: 5,
    applicant: "Arjun Patel",
    email: "arjun.patel@gmail.com",
    job: "Software Engineer",
    company: "Innovate Tech",
    status: "Shortlisted",
    date: "12 Aug 2026",
  },
];

function Applications() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredApplications = applicationsData.filter((application) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      application.applicant.toLowerCase().includes(searchText) ||
      application.email.toLowerCase().includes(searchText) ||
      application.job.toLowerCase().includes(searchText) ||
      application.company.toLowerCase().includes(searchText);

    const matchesStatus =
      status === "All" || application.status === status;

    return matchesSearch && matchesStatus;
  });

  const pendingCount = applicationsData.filter(
    (item) => item.status === "Pending"
  ).length;

  const shortlistedCount = applicationsData.filter(
    (item) => item.status === "Shortlisted"
  ).length;

  const rejectedCount = applicationsData.filter(
    (item) => item.status === "Rejected"
  ).length;

  return (
    <div className={styles.applicationsPage}>
      <div className={styles.pageHeader}>
        <h1>Applications</h1>
        <p>Manage and review all job applications</p>
      </div>

      <div className={styles.cardsGrid}>
        <ApplicationCard
          title="Total Applications"
          value={applicationsData.length}
          type="total"
        />

        <ApplicationCard
          title="Pending"
          value={pendingCount}
          type="pending"
        />

        <ApplicationCard
          title="Shortlisted"
          value={shortlistedCount}
          type="shortlisted"
        />

        <ApplicationCard
          title="Rejected"
          value={rejectedCount}
          type="rejected"
        />
      </div>

      <div className={styles.contentBox}>
        <div className={styles.filterRow}>
          <ApplicationSearch
            value={search}
            onChange={setSearch}
          />

          <ApplicationFilters
            value={status}
            onChange={setStatus}
          />
        </div>

        <ApplicationTable
          applications={filteredApplications}
        />
      </div>
    </div>
  );
}

export default Applications;