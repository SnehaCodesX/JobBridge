import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FindJobs.module.css";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Noida",
    salary: "₹4 - 6 LPA",
    type: "Full-time",
    experience: "1–2 Years",
    skills: ["React", "JavaScript", "CSS", "Tailwind CSS"],
    posted: "2d ago",
  },
  {
    id: 2,
    title: "React Developer Intern",
    company: "CodeCraft Technologies",
    location: "Remote",
    salary: "₹15,000 / month",
    type: "Internship",
    experience: "Fresher",
    skills: ["React", "HTML", "JavaScript"],
    posted: "3d ago",
  },
  {
    id: 3,
    title: "Web Developer",
    company: "DigitalWorks",
    location: "Delhi",
    salary: "₹3 - 5 LPA",
    type: "Full-time",
    experience: "1–2 Years",
    skills: ["HTML", "CSS", "JavaScript"],
    posted: "5d ago",
  },
  {
    id: 4,
    title: "Python Developer Intern",
    company: "InnoTech",
    location: "Bangalore",
    salary: "₹18,000 / month",
    type: "Internship",
    experience: "Fresher",
    skills: ["Python", "Django", "SQL"],
    posted: "1w ago",
  },
];

const availableSkills = [
  "React",
  "JavaScript",
  "Python",
  "Node.js",
  "MongoDB",
  "HTML",
  "CSS",
  "Django",
  "SQL",
  "Tailwind CSS",
];

const FindJobs = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("All");
  const [experience, setExperience] = useState("All");
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [savedJobs, setSavedJobs] = useState([]);
  const [skillSearch, setSkillSearch] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const filteredJobs = useMemo(() => {
    const result = jobs.filter((job) => {
      const searchText = search.trim().toLowerCase();
      const locationText = location.trim().toLowerCase();

      const matchesSearch =
        searchText === "" ||
        job.title.toLowerCase().includes(searchText) ||
        job.company.toLowerCase().includes(searchText) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(searchText)
        );

      const matchesLocation =
        locationText === "" ||
        job.location.toLowerCase().includes(locationText);

      const matchesType =
        jobType === "All" || job.type === jobType;

      const matchesExperience =
        experience === "All" ||
        job.experience === experience;

      const matchesSkills =
        selectedSkills.length === 0 ||
        selectedSkills.every((selectedSkill) =>
          job.skills.some(
            (jobSkill) =>
              jobSkill.toLowerCase() ===
              selectedSkill.toLowerCase()
          )
        );

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesExperience &&
        matchesSkills
      );
    });

    if (sortBy === "Newest") {
      return [...result].reverse();
    }

    if (sortBy === "Salary: High to Low") {
      return [...result].sort((a, b) => {
        const salaryA = parseInt(
          a.salary.replace(/[^\d]/g, ""),
          10
        );

        const salaryB = parseInt(
          b.salary.replace(/[^\d]/g, ""),
          10
        );

        return salaryB - salaryA;
      });
    }

    return result;
  }, [
    search,
    location,
    jobType,
    experience,
    sortBy,
    selectedSkills,
  ]);

  const toggleSkill = (skill) => {
    setSelectedSkills((previous) =>
      previous.includes(skill)
        ? previous.filter((item) => item !== skill)
        : [...previous, skill]
    );
  };

  const removeSkill = (skill) => {
    setSelectedSkills((previous) =>
      previous.filter((item) => item !== skill)
    );
  };

  const toggleSaveJob = (jobId) => {
    setSavedJobs((previous) =>
      previous.includes(jobId)
        ? previous.filter((id) => id !== jobId)
        : [...previous, jobId]
    );
  };

  const handleClearFilters = () => {
    setSearch("");
    setLocation("");
    setJobType("All");
    setExperience("All");
    setSortBy("Most Relevant");
    setSkillSearch("");
    setSelectedSkills([]);
  };

  // VIEW DETAILS BUTTON
  const handleViewDetails = (job) => {
    navigate("/student/jobdetails", {
      state: { job },
    });
  };

  const visibleSkills = availableSkills.filter((skill) =>
    skill.toLowerCase().includes(skillSearch.toLowerCase())
  );

  return (
    <div className={styles.findJobsPage}>
      <div className={styles.container}>

        {/* HEADER */}
        <section className={styles.header}>
          <div>
            <span className={styles.badge}>
              JOBBRIDGE • STUDENT
            </span>

            <h1>Find Your Dream Job 💜</h1>

            <p>
              Discover opportunities that match your
              skills and career goals.
            </p>
          </div>

          <div className={styles.headerIcon}>💼</div>
        </section>

        {/* SEARCH */}
        <section className={styles.searchCard}>

          <div className={styles.searchBox}>
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search job title, company or skill..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>

          <div className={styles.locationBox}>
            <span>📍</span>

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(event) =>
                setLocation(event.target.value)
              }
            />
          </div>

          <select
            className={styles.typeSelect}
            value={jobType}
            onChange={(event) =>
              setJobType(event.target.value)
            }
          >
            <option value="All">All Jobs</option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
          </select>

          <button
            type="button"
            className={styles.searchButton}
          >
            Search Jobs
          </button>
        </section>

        <div className={styles.content}>

          {/* FILTERS */}
          <aside className={styles.filters}>

            <div className={styles.filterHeader}>
              <h2>Filters</h2>

              <button
                type="button"
                onClick={handleClearFilters}
                className={styles.resetButton}
              >
                Reset ↻
              </button>
            </div>

            <div className={styles.filterGroup}>
              <h3>Job Type</h3>

              <label>
                <input
                  type="radio"
                  name="jobType"
                  checked={jobType === "All"}
                  onChange={() => setJobType("All")}
                />
                All Jobs
              </label>

              <label>
                <input
                  type="radio"
                  name="jobType"
                  checked={jobType === "Full-time"}
                  onChange={() => setJobType("Full-time")}
                />
                Full-time
              </label>

              <label>
                <input
                  type="radio"
                  name="jobType"
                  checked={jobType === "Internship"}
                  onChange={() => setJobType("Internship")}
                />
                Internship
              </label>
            </div>

            <div className={styles.filterGroup}>
              <h3>Experience Level</h3>

              <label>
                <input
                  type="radio"
                  name="experience"
                  checked={experience === "All"}
                  onChange={() => setExperience("All")}
                />
                All Levels
              </label>

              <label>
                <input
                  type="radio"
                  name="experience"
                  checked={experience === "Fresher"}
                  onChange={() => setExperience("Fresher")}
                />
                Fresher
              </label>

              <label>
                <input
                  type="radio"
                  name="experience"
                  checked={experience === "1–2 Years"}
                  onChange={() =>
                    setExperience("1–2 Years")
                  }
                />
                1–2 Years
              </label>
            </div>

            <div className={styles.filterGroup}>
              <h3>Skills</h3>

              <div className={styles.skillsSearch}>
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={skillSearch}
                  onChange={(event) =>
                    setSkillSearch(event.target.value)
                  }
                />
              </div>

              {selectedSkills.length > 0 && (
                <div className={styles.selectedSkills}>
                  {selectedSkills.map((skill) => (
                    <button
                      type="button"
                      key={skill}
                      className={styles.selectedSkill}
                      onClick={() => removeSkill(skill)}
                    >
                      {skill} ×
                    </button>
                  ))}
                </div>
              )}

              <div className={styles.availableSkillsTitle}>
                Available Skills
              </div>

              <div className={styles.skillsFilter}>
                {visibleSkills.length > 0 ? (
                  visibleSkills.map((skill) => {
                    const isSelected =
                      selectedSkills.includes(skill);

                    return (
                      <button
                        type="button"
                        key={skill}
                        className={
                          isSelected
                            ? styles.skillActive
                            : styles.skillButton
                        }
                        onClick={() => toggleSkill(skill)}
                      >
                        {skill}
                        {isSelected && " ✓"}
                      </button>
                    );
                  })
                ) : (
                  <p className={styles.noSkills}>
                    No skills found
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          </aside>

          {/* JOBS */}
          <main className={styles.jobsSection}>

            <div className={styles.jobsHeader}>
              <div>
                <span>AVAILABLE OPPORTUNITIES</span>

                <h2>
                  {filteredJobs.length}{" "}
                  {filteredJobs.length === 1
                    ? "Job"
                    : "Jobs"}{" "}
                  Found
                </h2>
              </div>

              <select
                className={styles.sortSelect}
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value)
                }
              >
                <option value="Most Relevant">
                  Most Relevant
                </option>

                <option value="Newest">
                  Newest
                </option>

                <option value="Salary: High to Low">
                  Salary: High to Low
                </option>
              </select>
            </div>

            <div className={styles.jobList}>

              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => {
                  const isSaved = savedJobs.includes(job.id);

                  return (
                    <article
                      className={styles.jobCard}
                      key={job.id}
                    >

                      <div className={styles.jobTop}>

                        <div className={styles.companyLogo}>
                          {job.company.charAt(0)}
                        </div>

                        <div className={styles.jobTitle}>
                          <h3>{job.title}</h3>
                          <p>{job.company}</p>
                        </div>

                        <button
                          type="button"
                          className={`${styles.saveButton} ${
                            isSaved ? styles.saved : ""
                          }`}
                          onClick={() =>
                            toggleSaveJob(job.id)
                          }
                          title={
                            isSaved ? "Saved" : "Save Job"
                          }
                        >
                          {isSaved ? "♥" : "♡"}
                        </button>

                      </div>

                      <div className={styles.jobInfo}>
                        <span>📍 {job.location}</span>
                        <span>💰 {job.salary}</span>
                        <span>💼 {job.type}</span>
                        <span>👤 {job.experience}</span>
                      </div>

                      <div className={styles.jobSkills}>
                        {job.skills.map((skill) => (
                          <span key={skill}>
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className={styles.jobBottom}>

                        <small>
                          Posted {job.posted}
                        </small>

                        <button
                          type="button"
                          className={styles.detailsButton}
                          onClick={() =>
                            handleViewDetails(job)
                          }
                        >
                          View Details →
                        </button>

                      </div>

                    </article>
                  );
                })
              ) : (
                <div className={styles.noJobs}>
                  <div>🔎</div>

                  <h3>No jobs found</h3>

                  <p>
                    Try changing your search or filters.
                  </p>
                </div>
              )}

            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default FindJobs;