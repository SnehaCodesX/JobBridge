import styles from "./StudentProfile.module.css";
import ProfileHeader from "./Components/ProfileHeader";
import PersonalInfo from "./Components/PersonalInfo";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";

const StudentProfile = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.container}>
        <ProfileHeader />

        <div className={styles.profileGrid}>
          <PersonalInfo />
          <Education />
          <Skills />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;