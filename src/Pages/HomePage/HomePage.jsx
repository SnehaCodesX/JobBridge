import { useState } from "react";

import HeroSection from "./Components/HeroSection";
import SearchJobs from "./Components/SearchJobs";
import WhyJobBridge from "./Components/WhyJobBridge";
import FeaturedJobs from "./Components/FeaturedJobs";
import HowItWorks from "./Components/HowItWorks";
import Testimonials from "./Components/Testimonials";
import CTA from "./Components/CTASection";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const [searchData, setSearchData] = useState({
    keyword: "",
    location: "",
    category: "All Categories",
  });

  const handleSearch = (data) => {
    setSearchData(data);

    setTimeout(() => {
      document
        .getElementById("featured-jobs")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className={styles.homePage}>
      <HeroSection />

      <SearchJobs onSearch={handleSearch} />

      <WhyJobBridge />

      <FeaturedJobs searchData={searchData} />

      <HowItWorks />

      <Testimonials />

      <CTA />
    </main>
  );
};

export default HomePage;