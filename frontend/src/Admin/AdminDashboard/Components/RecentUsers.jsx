import styles from "../AdminDashboard.module.css";

const users = [
  { name: "Sakshi Mehta", role: "Student", email: "sakshi@gmail.com", status: "Active" },
  { name: "Rahul Kumar", role: "Company", email: "rahul@tech.com", status: "Active" },
  { name: "Neha Singh", role: "Student", email: "neha@gmail.com", status: "Inactive" },
];

function RecentUsers() {
  return (
    <div className={`${styles.panel} ${styles.recentUsersPanel}`}>
      <div className={styles.panelHeader}>
        <div>
          <h3>Recent Users</h3>
          <p>Newly registered users on JobBridge</p>
        </div>
        <button>View All →</button>
      </div>

      <div className={styles.usersTable}>
        <div className={styles.tableHead}>
          <span>USER</span>
          <span>ROLE</span>
          <span>STATUS</span>
        </div>

        {users.map((user) => (
          <div className={styles.tableRow} key={user.email}>
            <div className={styles.userDetail}>
              <div className={styles.userAvatar}>{user.name.charAt(0)}</div>
              <div>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </div>
            </div>

            <span className={styles.role}>{user.role}</span>

            <span
              className={`${styles.status} ${
                user.status === "Active" ? styles.active : styles.inactive
              }`}
            >
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentUsers;