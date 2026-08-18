import { useState } from "react";
import styles from "./StudentNotification.module.css";

const notificationsData = [
  {
    id: 1,
    type: "application",
    icon: "💼",
    title: "Application Under Review",
    message:
      "Your application for Frontend Developer at TechNova Solutions is under review.",
    label: "Application Update",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    type: "success",
    icon: "✓",
    title: "Shortlisted for UI/UX Designer",
    message:
      "Congratulations! You have been shortlisted for UI/UX Designer at Creative Minds.",
    label: "Application Update",
    time: "1 day ago",
    unread: true,
  },
  {
    id: 3,
    type: "message",
    icon: "✉",
    title: "New Message from HR",
    message:
      "You have received a new message from the HR team of ByteWorks Technologies.",
    label: "Message",
    time: "2 days ago",
    unread: false,
  },
  {
    id: 4,
    type: "recommendation",
    icon: "★",
    title: "New Job Recommendation",
    message:
      "We found a new React Developer role that matches your profile.",
    label: "Recommendation",
    time: "3 days ago",
    unread: false,
  },
  {
    id: 5,
    type: "alert",
    icon: "📢",
    title: "Job Alert: Python Developer Intern",
    message:
      "New job matching your skills is available. Check it out now!",
    label: "Job Alert",
    time: "4 days ago",
    unread: false,
  },
  {
    id: 6,
    type: "reminder",
    icon: "🔔",
    title: "Reminder: Update Your Profile",
    message:
      "Keep your profile updated to increase your chances of getting noticed.",
    label: "Reminder",
    time: "5 days ago",
    unread: false,
  },
];

function StudentNotification() {
  const [notifications, setNotifications] =
    useState(notificationsData);

  const [filter, setFilter] = useState("All Types");

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const markAllAsRead = () => {
    setNotifications((previous) =>
      previous.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const markAsRead = (id) => {
    setNotifications((previous) =>
      previous.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((previous) =>
      previous.filter(
        (notification) => notification.id !== id
      )
    );
  };

  const filteredNotifications =
    filter === "All Types"
      ? notifications
      : notifications.filter(
          (notification) =>
            notification.label === filter
        );

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* HEADER */}
        <section className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.badge}>
              JOBBRIDGE • STUDENT
            </span>

            <div className={styles.titleRow}>
              <div className={styles.headerIcon}>
                🔔
              </div>

              <div>
                <h1>Notifications</h1>

                <p>
                  Stay updated with the latest updates and alerts.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.bellArea}>
            <div className={styles.bigBell}>
              🔔
            </div>

            {unreadCount > 0 && (
              <span className={styles.countBadge}>
                {unreadCount}
              </span>
            )}
          </div>
        </section>

        {/* TOP SECTION */}
        <div className={styles.topBar}>
          <div className={styles.notificationHeading}>
            <h2>
              All Notifications
              <span>{notifications.length}</span>
            </h2>
          </div>

          <div className={styles.actions}>
            <select
              className={styles.select}
              value={filter}
              onChange={(event) =>
                setFilter(event.target.value)
              }
            >
              <option>All Types</option>
              <option>Application Update</option>
              <option>Message</option>
              <option>Recommendation</option>
              <option>Job Alert</option>
              <option>Reminder</option>
            </select>

            <button
              type="button"
              className={styles.markButton}
              onClick={markAllAsRead}
            >
              ✓ Mark all as read
            </button>
          </div>
        </div>

        {/* NOTIFICATION LIST */}
        <section className={styles.notificationList}>
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <article
                key={notification.id}
                className={`${styles.notificationCard} ${
                  notification.unread
                    ? styles.unread
                    : ""
                }`}
                onClick={() =>
                  markAsRead(notification.id)
                }
              >
                <div
                  className={`${styles.notificationIcon} ${
                    styles[notification.type]
                  }`}
                >
                  {notification.icon}
                </div>

                <div className={styles.notificationContent}>
                  <div className={styles.titleLine}>
                    {notification.unread && (
                      <span
                        className={styles.unreadDot}
                      />
                    )}

                    <h3>{notification.title}</h3>
                  </div>

                  <p>{notification.message}</p>

                  <span
                    className={`${styles.label} ${
                      styles[
                        `${notification.type}Label`
                      ]
                    }`}
                  >
                    {notification.label}
                  </span>
                </div>

                <div className={styles.notificationRight}>
                  <span className={styles.time}>
                    {notification.time}
                  </span>

                  {notification.unread && (
                    <span
                      className={styles.smallDot}
                    />
                  )}

                  <button
                    type="button"
                    className={styles.menuButton}
                    title="Delete notification"
                    onClick={(event) => {
                      event.stopPropagation();
                      deleteNotification(
                        notification.id
                      );
                    }}
                  >
                    ⋮
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className={styles.empty}>
              <div>🔔</div>

              <h3>No notifications found</h3>

              <p>
                Try selecting another notification type.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default StudentNotification;