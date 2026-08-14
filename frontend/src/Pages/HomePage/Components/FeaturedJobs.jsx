import { Link } from "react-router-dom";
import styles from "../HomePage.module.css";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Bangalore, India",
    salary: "₹6 - 10 LPA",
    type: "Full Time",
    category: "Web Development",
    experience: "2-4 Yrs",
    logo: "▣",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "CodeCraft Technologies",
    location: "Hyderabad, India",
    salary: "₹5 - 9 LPA",
    type: "Full Time",
    category: "Web Development",
    experience: "2+ Yrs",
    logo: "◉",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "PixelPerfect Studio",
    location: "Remote",
    salary: "₹4 - 8 LPA",
    type: "Full Time",
    category: "UI/UX Design",
    experience: "1-3 Yrs",
    logo: "✕",
  },
];

const FeaturedJobs = ({ searchData }) => {
  const filteredJobs = jobs.filter((job) => {
    const keyword = searchData.keyword.toLowerCase();

    const matchesKeyword =
      !keyword ||
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword);

    const matchesLocation =
      !searchData.location ||
      job.location
        .toLowerCase()
        .includes(searchData.location.toLowerCase());

    const matchesCategory =
      searchData.category === "All Categories" ||
      job.category === searchData.category;

    return (
      matchesKeyword &&
      matchesLocation &&
      matchesCategory
    );
  });

  return (
    <section
      id="featured-jobs"
      className={styles.jobsSection}
    >
      <div className={styles.sectionHeader}>
        <div>
          <h2>Featured Jobs</h2>
          <p>Find your next career opportunity</p>
        </div>

        <Link to="/jobs">
          View all jobs →
        </Link>
      </div>

      <div className={styles.jobsList}>

        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              className={styles.jobCard}
              key={job.id}
            >

              <div className={styles.jobLogo}>
                {job.logo}
              </div>

              <div className={styles.jobInfo}>
                <h3>{job.title}</h3>

                <p>{job.company}</p>

                <div className={styles.jobMeta}>
                  <span>⌖ {job.location}</span>
                  <span>{job.type}</span>
                  <span>{job.experience}</span>
                </div>
              </div>

              <div className={styles.jobRight}>
                <strong>{job.salary}</strong>

                <button
                  onClick={() =>
                    alert(`Opening ${job.title}`)
                  }
                >
                  View Job
                </button>
              </div>

            </div>
          ))
        ) : (
          <div className={styles.noJobs}>
            <span>🔍</span>
            <h3>No jobs found</h3>
            <p>Try changing your search filters.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedJobs;