import React, { useState } from "react";

import StudentCard from "./Components/StudentCard";
import StudentSearch from "./Components/StudentSearch";
import StudentFilters from "./Components/StudentFilters";
import StudentTable from "./Components/StudentTable";

import styles from "./Students.module.css";

const Students = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const students = [
    {
      id: "STU001",
      name: "Aarav Sharma",
      email: "aarav@gmail.com",
      course: "BCA",
      college: "ABC College",
      status: "Active",
      joined: "12 Aug 2026",
    },
    {
      id: "STU002",
      name: "Priya Singh",
      email: "priya@gmail.com",
      course: "BCA",
      college: "XYZ University",
      status: "Active",
      joined: "10 Aug 2026",
    },
    {
      id: "STU003",
      name: "Rahul Verma",
      email: "rahul@gmail.com",
      course: "MCA",
      college: "ABC College",
      status: "Inactive",
      joined: "08 Aug 2026",
    },
    {
      id: "STU004",
      name: "Ananya Gupta",
      email: "ananya@gmail.com",
      course: "BBA",
      college: "PQR University",
      status: "Active",
      joined: "05 Aug 2026",
    },
    {
      id: "STU005",
      name: "Aditya Mishra",
      email: "aditya@gmail.com",
      course: "B.Com",
      college: "LMN College",
      status: "Active",
      joined: "02 Aug 2026",
    },
  ];

  const filteredStudents = students.filter((student) => {
    const text = search.toLowerCase();

    const matchesSearch =
      student.name.toLowerCase().includes(text) ||
      student.email.toLowerCase().includes(text) ||
      student.id.toLowerCase().includes(text);

    const matchesStatus =
      status === "All" || student.status === status;

    return matchesSearch && matchesStatus;
  });

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "Inactive"
  ).length;

  const handleView = (student) => {
    alert(`Viewing ${student.name}`);
  };

  const handleEdit = (student) => {
    alert(`Editing ${student.name}`);
  };

  const handleDelete = (student) => {
    alert(`Delete ${student.name}`);
  };

  return (
    <div className={styles.page}>

      {/* Top Header */}
      <div className={styles.header}>
        <div>
          <div className={styles.breadcrumb}>
            Admin <span>/</span> Students
          </div>

          <h1>Students</h1>

          <p>
            Manage, monitor and view all registered students
          </p>
        </div>

        <button className={styles.addButton}>
          <span>+</span>
          Add Student
        </button>
      </div>

      {/* Statistics */}
      <div className={styles.statsGrid}>

        <div className={`${styles.statCard} ${styles.purpleCard}`}>
          <div className={styles.cardTop}>
            <div className={styles.iconBox}>👥</div>
            <span className={styles.cardArrow}>↗</span>
          </div>

          <p>Total Students</p>
          <h2>{students.length}</h2>

          <span className={styles.cardBottom}>
            All registered students
          </span>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardTop}>
            <div className={`${styles.iconBox} ${styles.greenIcon}`}>
              ✓
            </div>
            <span className={styles.greenText}>+8.2%</span>
          </div>

          <p>Active Students</p>
          <h2>{activeStudents}</h2>

          <span className={styles.cardBottom}>
            Currently active
          </span>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardTop}>
            <div className={`${styles.iconBox} ${styles.orangeIcon}`}>
              !
            </div>
          </div>

          <p>Inactive Students</p>
          <h2>{inactiveStudents}</h2>

          <span className={styles.cardBottom}>
            Need attention
          </span>
        </div>

        <div className={styles.statCard}>
          <div className={styles.cardTop}>
            <div className={`${styles.iconBox} ${styles.blueIcon}`}>
              +
            </div>
            <span className={styles.blueText}>This month</span>
          </div>

          <p>New Students</p>
          <h2>24</h2>

          <span className={styles.cardBottom}>
            Recently registered
          </span>
        </div>

      </div>

      {/* Main Students Panel */}
      <div className={styles.mainPanel}>

        {/* Panel Header */}
        <div className={styles.panelHeader}>
          <div>
            <h3>All Students</h3>
            <p>
              View and manage student accounts
            </p>
          </div>

          <button className={styles.exportButton}>
            ↓ Export
          </button>
        </div>

        {/* Search & Filters */}
        <div className={styles.toolbar}>

          <div className={styles.searchBox}>
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search by name, email or student ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className={styles.filterSelect}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <select className={styles.filterSelect}>
            <option>All Courses</option>
            <option>BCA</option>
            <option>BBA</option>
            <option>B.Com</option>
            <option>MCA</option>
          </select>

          <button className={styles.filterButton}>
            ⚙ Filters
          </button>

        </div>

        {/* Result Information */}
        <div className={styles.resultBar}>
          <span>
            Showing <strong>{filteredStudents.length}</strong> of{" "}
            <strong>{students.length}</strong> students
          </span>

          <span className={styles.sortText}>
            Sort by: <strong>Newest</strong> ▾
          </span>
        </div>

        {/* Table */}
        <div className={styles.tableContainer}>
          <table className={styles.table}>

            <thead>
              <tr>
                <th>Student</th>
                <th>Email</th>
                <th>Course</th>
                <th>College</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>

                  <td>
                    <div className={styles.studentInfo}>
                      <div className={styles.avatar}>
                        {student.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{student.name}</strong>
                        <small>{student.id}</small>
                      </div>
                    </div>
                  </td>

                  <td>{student.email}</td>

                  <td>
                    <span className={styles.courseBadge}>
                      {student.course}
                    </span>
                  </td>

                  <td>{student.college}</td>

                  <td>
                    <span
                      className={
                        student.status === "Active"
                          ? styles.active
                          : styles.inactive
                      }
                    >
                      <span></span>
                      {student.status}
                    </span>
                  </td>

                  <td>{student.joined}</td>

                  <td>
                    <div className={styles.actions}>
                      <button
                        onClick={() => handleView(student)}
                        title="View"
                      >
                        👁
                      </button>

                      <button
                        onClick={() => handleEdit(student)}
                        title="Edit"
                      >
                        ✎
                      </button>

                      <button
                        onClick={() => handleDelete(student)}
                        title="Delete"
                      >
                        🗑
                      </button>
                    </div>
                  </td>

                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="7">
                    <div className={styles.empty}>
                      No students found
                    </div>
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>

          <span>
            Showing 1–{filteredStudents.length} results
          </span>

          <div>
            <button disabled>‹</button>
            <button className={styles.currentPage}>1</button>
            <button>2</button>
            <button>3</button>
            <button>›</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Students;