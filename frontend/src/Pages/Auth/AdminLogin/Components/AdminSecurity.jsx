import Icon from "./Icon";
import styles from "../AdminLogin.module.css";

const AdminSecurity = () => {
  return (
    <div className={styles.securityBox}>

      <div className={styles.securityIcon}>
        <Icon name="shield" size={20} />
      </div>

      <p>
        Your login credentials are encrypted and
        securely protected.
      </p>

    </div>
  );
};

export default AdminSecurity;