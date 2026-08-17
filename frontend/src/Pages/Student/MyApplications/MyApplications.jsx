import { useMemo, useState } from "react";
import styles from "./MyApplications.module.css";

const applications = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Noida, India",
    type: "Full-time",
    salary: "₹4 - 6 LPA",
    appliedOn: "12 May 2024",
    ago: "2 days ago",
    status: "Applied",
    statusText: "In Progress",
    nextStep: "HR Screening",
    nextInfo: "We will update you soon",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "₹5 - 8 LPA",
    appliedOn: "10 May 2024",
    ago: "4 days ago",
    status: "Shortlisted",
    statusText: "Congratulations!",
    nextStep: "Interview Round 1",
    nextInfo: "15 May 2024 • 11:00 AM",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "ByteWorks Technologies",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹6 - 10 LPA",
    appliedOn: "08 May 2024",
    ago: "6 days ago",
    status: "Interview",
    statusText: "Good Luck!",
    nextStep: "Technical Interview",
    nextInfo: "18 May 2024 • 02:00 PM",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Data Insights",
    location: "Pune, India",
    type: "Full-time",
    salary: "₹4 - 7 LPA",
    appliedOn: "05 May 2024",
    ago: "9 days ago",
    status: "Rejected",
    statusText: "Keep Improving",
    nextStep: "Feedback Sent",
    nextInfo: "Check your email",
  },
  {
    id: 5,
    title: "Marketing Executive",
    company: "BrandBoost Solutions",
    location: "Delhi, India",
    type: "Full-time",
    salary: "₹3 - 5 LPA",
    appliedOn: "01 May 2024",
    ago: "13 days ago",
    status: "Applied",
    statusText: "In Progress",
    nextStep: "HR Screening",
    nextInfo: "We will update you soon",
  },
  {
    id: 6,
    title: "Python Developer",
    company: "CodeCraft Technologies",
    location: "Remote, India",
    type: "Full-time",
    salary: "₹4 - 7 LPA",
    appliedOn: "28 Apr 2024",
    ago: "16 days ago",
    status: "Shortlisted",
    statusText: "Congratulations!",
    nextStep: "Interview Round 1",
    nextInfo: "20 May 2024 • 10:00 AM",
  },
];

const MyApplications = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [typeFilter, setTypeFilter] = useState("All Job Types");
  const [sortBy, setSortBy] = useState("Most Recent");

  const filteredApplications = useMemo(() => {
    let result = applications.filter((application) => {
      const searchText = search.trim().toLowerCase();

      const matchesSearch =
        searchText === "" ||
        application.title.toLowerCase().includes(searchText) ||
        application.company.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All Status" ||
        application.status === statusFilter;

      const matchesType =
        typeFilter === "All Job Types" ||
        application.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });

    if (sortBy === "Oldest") {
      result = [...result].reverse();
    }

    return result;
  }, [search, statusFilter, typeFilter, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setTypeFilter("All Job Types");
    setSortBy("Most Recent");
  };

  const getInitial = (company) => {
    return company.charAt(0).toUpperCase();
  };

  return (
    <div className={styles.page}>

      {/* HEADER */}
      <section className={styles.hero}>
        <div>
          <span className={styles.heroSmall}>
            JOBBRIDGE • STUDENT
          </span>

          <h1>My Applications 💜</h1>

          <p>
            Track and manage your job applications in one place.
          </p>
        </div>

        <div className={styles.heroIcon}>
          💼
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsGrid}>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            📄
          </div>

          <div>
            <span>Total Applications</span>
            <strong>12</strong>
            <small>All time</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            ➤
          </div>

          <div>
            <span>Applied</span>
            <strong>8</strong>
            <small>In Progress</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            ✓
          </div>

          <div>
            <span>Shortlisted</span>
            <strong>2</strong>
            <small>Good Progress!</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            👥
          </div>

          <div>
            <span>Interview</span>
            <strong>1</strong>
            <small>Keep Going!</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.red}`}>
            ✕
          </div>

          <div>
            <span>Rejected</span>
            <strong>1</strong>
            <small>Don't Give Up!</small>
          </div>
        </div>

      </section>

      {/* FILTER BAR */}
      <section className={styles.filterBar}>

        <div className={styles.searchBox}>
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search by job title or company..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </div>

        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
        >
          <option>All Status</option>
          <option>Applied</option>
          <option>Shortlisted</option>
          <option>Interview</option>
          <option>Rejected</option>
        </select>

        <select
          value={typeFilter}
          onChange={(event) =>
            setTypeFilter(event.target.value)
          }
        >
          <option>All Job Types</option>
          <option>Full-time</option>
          <option>Internship</option>
        </select>

        <select
          value={sortBy}
          onChange={(event) =>
            setSortBy(event.target.value)
          }
        >
          <option>Most Recent</option>
          <option>Oldest</option>
        </select>

        <button
          type="button"
          className={styles.filterButton}
          onClick={clearFilters}
        >
          ⚱ Filters
        </button>

      </section>

      {/* APPLICATIONS */}
      <section className={styles.applicationSection}>

        <div className={styles.tableHeader}>
          <div>JOB DETAILS</div>
          <div>APPLIED ON</div>
          <div>STATUS</div>
          <div>NEXT STEP</div>
          <div>ACTION</div>
        </div>

        <div className={styles.applicationList}>

          {filteredApplications.length > 0 ? (
            filteredApplications.map((application) => (

              <article
                className={styles.applicationRow}
                key={application.id}
              >

                {/* JOB */}
                <div className={styles.jobDetails}>

                  <div className={styles.companyLogo}>
                    {getInitial(application.company)}
                  </div>

                  <div>
                    <h3>{application.title}</h3>

                    <p className={styles.company}>
                      {application.company}
                    </p>

                    <div className={styles.jobMeta}>
                      <span>
                        📍 {application.location}
                      </span>

                      <span>
                        💼 {application.type}
                      </span>

                      <span>
                        • {application.salary}
                      </span>
                    </div>
                  </div>

                </div>

                {/* APPLIED DATE */}
                <div className={styles.appliedDate}>
                  <strong>{application.appliedOn}</strong>
                  <span>{application.ago}</span>
                </div>

                {/* STATUS */}
                <div className={styles.statusColumn}>

                  <span
                    className={`${styles.status} ${
                      styles[
                        application.status
                          .toLowerCase()
                          .replace(" ", "")
                      ]
                    }`}
                  >
                    ● {application.status}
                  </span>

                  <small>
                    {application.statusText}
                  </small>

                </div>

                {/* NEXT STEP */}
                <div className={styles.nextStep}>

                  <strong>
                    {application.status === "Interview"
                      ? "♙"
                      : application.status === "Rejected"
                      ? "✉"
                      : application.status === "Shortlisted"
                      ? "▣"
                      : "◷"}{" "}
                    {application.nextStep}
                  </strong>

                  <span>
                    {application.nextInfo}
                  </span>

                </div>

                {/* ACTION */}
                <div className={styles.action}>

                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        `Opening details for ${application.title}`
                      )
                    }
                  >
                    View Details →
                  </button>

                </div>

              </article>

            ))
          ) : (
            <div className={styles.noResults}>
              <div>🔍</div>
              <h3>No applications found</h3>
              <p>
                Try changing your search or filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>

      </section>

      {/* APPLICATION TIP */}
      <section className={styles.tipCard}>

        <div className={styles.tipIcon}>
          📋
        </div>

        <div className={styles.tipContent}>
          <h3>Application Tips</h3>

          <p>
            Keep your profile updated and check your email
            regularly for updates from recruiters.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            window.location.href = "/student/profile"
          }
        >
          Update Profile →
        </button>

      </section>

    </div>
  );
};

export default MyApplications;