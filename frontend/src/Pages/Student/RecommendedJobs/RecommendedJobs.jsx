import { useState } from "react";
import styles from "./RecommendedJobs.module.css";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Noida, India",
    type: "Full-time",
    experience: "0-2 Yrs",
    salary: "₹4 - 6 LPA",
    skills: ["React", "JavaScript", "CSS", "HTML"],
    logo: "T",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "1-3 Yrs",
    salary: "₹5 - 8 LPA",
    skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
    logo: "C",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "ByteWorks Technologies",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "1-4 Yrs",
    salary: "₹6 - 10 LPA",
    skills: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    logo: "B",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Data Insights",
    location: "Pune, India",
    type: "Full-time",
    experience: "0-2 Yrs",
    salary: "₹4 - 7 LPA",
    skills: ["Excel", "SQL", "Python", "Power BI"],
    logo: "D",
  },
  {
    id: 5,
    title: "Marketing Executive",
    company: "BrandBoost Solutions",
    location: "Delhi, India",
    type: "Full-time",
    experience: "1-3 Yrs",
    salary: "₹3 - 5 LPA",
    skills: ["Digital Marketing", "SEO", "Social Media", "Content"],
    logo: "M",
  },
  {
    id: 6,
    title: "Python Developer",
    company: "CodeCraft Technologies",
    location: "Remote",
    type: "Full-time",
    experience: "0-3 Yrs",
    salary: "₹4 - 7 LPA",
    skills: ["Python", "Django", "SQL", "REST API"],
    logo: "P",
  },
];

const RecommendedJobs = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("All Job Types");
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [savedJobs, setSavedJobs] = useState([]);

  const toggleSave = (id) => {
    setSavedJobs((previous) =>
      previous.includes(id)
        ? previous.filter((jobId) => jobId !== id)
        : [...previous, id]
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchText)
      );

    const matchesLocation =
      location === "" ||
      job.location.toLowerCase().includes(location.toLowerCase());

    const matchesType =
      jobType === "All Job Types" || job.type === jobType;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* HEADER */}
        <section className={styles.hero}>
          <div>
            <span className={styles.badge}>JOBBRIDGE • STUDENT</span>

            <h1>Recommended for You 💜</h1>

            <p>
              Personalized job recommendations based on your
              skills and preferences.
            </p>
          </div>

          <div className={styles.heroIcon}>💼</div>
        </section>

        {/* SEARCH BAR */}
        <section className={styles.searchCard}>

          <div className={styles.searchInput}>
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search job title, company or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.locationInput}>
            <span>📍</span>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option>All Job Types</option>
            <option>Full-time</option>
            <option>Internship</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Most Relevant</option>
            <option>Newest</option>
          </select>

          <button className={styles.filterButton}>
            Filter Jobs ⚙
          </button>

        </section>

        {/* TITLE */}
        <div className={styles.sectionHeader}>
          <div>
            <h2>Recommended Jobs ✨</h2>
            <p>Jobs you might be interested in</p>
          </div>

          <span className={styles.profileText}>
            Based on your profile 👤
          </span>
        </div>

        {/* JOB CARDS */}
        <div className={styles.jobGrid}>
          {filteredJobs.map((job) => {
            const saved = savedJobs.includes(job.id);

            return (
              <article className={styles.jobCard} key={job.id}>

                <div className={styles.cardTop}>
                  <div className={styles.logo}>
                    {job.logo}
                  </div>

                  <div className={styles.jobTitle}>
                    <h3>{job.title}</h3>
                    <p>{job.company}</p>
                  </div>

                  <button
                    className={`${styles.bookmark} ${
                      saved ? styles.saved : ""
                    }`}
                    onClick={() => toggleSave(job.id)}
                  >
                    {saved ? "♥" : "♡"}
                  </button>
                </div>

                <div className={styles.info}>
                  <span>📍 {job.location}</span>
                  <span>💼 {job.type}</span>
                  <span>🎓 {job.experience}</span>
                </div>

                <div className={styles.salary}>
                  💰 {job.salary}
                </div>

                <div className={styles.skills}>
                  {job.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

              </article>
            );
          })}
        </div>

        {/* VIEW ALL */}
        <div className={styles.viewAllContainer}>
          <button className={styles.viewAll}>
            💼 &nbsp; View All Jobs
          </button>
        </div>

      </div>
    </div>
  );
};

export default RecommendedJobs;