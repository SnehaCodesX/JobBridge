import { useState } from "react";
import styles from "../HomePage.module.css";

const SearchJobs = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    "Web Development",
    "App Development",
    "Data Science",
    "UI/UX Design",
    "Digital Marketing",
    "Cloud Computing",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch({
      keyword,
      location,
      category,
    });
  };

  return (
    <section className={styles.searchSection}>
      <form
        className={styles.searchBox}
        onSubmit={handleSubmit}
      >

        <div className={styles.searchField}>
          <span>⌕</span>
          <input
            type="text"
            placeholder="Job title, keyword or company"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <div className={styles.searchField}>
          <span>⌖</span>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className={styles.searchField}>
          <span>▣</span>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className={styles.searchButton}
        >
          Search Jobs →
        </button>

      </form>
    </section>
  );
};

export default SearchJobs;