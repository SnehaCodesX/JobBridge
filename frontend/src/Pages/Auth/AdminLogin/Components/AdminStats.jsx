import Icon from "./Icon";
import styles from "../AdminLogin.module.css";

const AdminStats = () => {
  return (
    <div className={styles.statsCard}>

      {/* Active Jobs */}
      <div className={styles.statItem}>
        <div className={styles.statIcon}>
          <Icon name="briefcase" size={22} />
        </div>

        <div>
          <strong>10K+</strong>
          <span>Active Jobs</span>
        </div>
      </div>

      <div className={styles.statDivider}></div>

      {/* Companies */}
      <div className={styles.statItem}>
        <div className={styles.statIcon}>
          <Icon name="building" size={22} />
        </div>

        <div>
          <strong>5K+</strong>
          <span>Companies</span>
        </div>
      </div>

      <div className={styles.statDivider}></div>

      {/* Students */}
      <div className={styles.statItem}>
        <div className={styles.statIcon}>
          <Icon name="users" size={22} />
        </div>

        <div>
          <strong>20K+</strong>
          <span>Students</span>
        </div>
      </div>

    </div>
  );
};

export default AdminStats;