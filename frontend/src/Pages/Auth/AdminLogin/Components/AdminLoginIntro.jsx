import AdminFeatureItem from "./AdminFeatureItem";
import Icon from "./Icon";
import styles from "../AdminLogin.module.css";

const AdminLoginIntro = () => {
  return (
    <div className={styles.intro}>

      {/* Badge */}
      <div className={styles.portalBadge}>
        <Icon name="crown" size={17} />
        <span>ADMIN PORTAL</span>
      </div>

      {/* Heading */}
      <h1>
        Welcome Back,
        <span>Admin</span>
      </h1>

      {/* Description */}
      <p className={styles.introDescription}>
        Manage JobBridge with powerful tools designed to help you
        monitor jobs, companies, students and everything in one place.
      </p>

      {/* Features */}
      <div className={styles.featureList}>

        <AdminFeatureItem
          icon="monitor"
          title="Manage Platform"
          description="Control your JobBridge platform easily"
        />

        <AdminFeatureItem
          icon="shield"
          title="Verified Companies"
          description="Review and manage registered companies"
        />

        <AdminFeatureItem
          icon="trend"
          title="Track Performance"
          description="Monitor jobs, applications and users"
        />

      </div>

    </div>
  );
};

export default AdminLoginIntro;