import Icon from "./Icon";
import styles from "../AdminLogin.module.css";

const AdminFeatureItem = ({ icon, title, description }) => {
  return (
    <div className={styles.featureItem}>

      <div className={styles.featureIcon}>
        <Icon name={icon} size={26} />
      </div>

      <div className={styles.featureText}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  );
};

export default AdminFeatureItem;