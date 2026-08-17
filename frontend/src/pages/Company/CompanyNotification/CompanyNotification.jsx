import "./CompanyNotification.css";

function CompanyNotification() {
  const notifications = [
    {
      id: 1,
      icon: "👤",
      title: "New Application Received",
      message:
        "Rahul Sharma applied for React Developer position.",
      time: "10 minutes ago",
    },
    {
      id: 2,
      icon: "⭐",
      title: "Candidate Shortlisted",
      message:
        "Aman Verma has been shortlisted for Frontend Developer.",
      time: "1 hour ago",
    },
    {
      id: 3,
      icon: "📄",
      title: "Job Posted Successfully",
      message:
        "Your Frontend Developer job has been posted successfully.",
      time: "Yesterday",
    },
    {
      id: 4,
      icon: "🔔",
      title: "New Candidate Application",
      message:
        "Neha Gupta applied for Frontend Developer position.",
      time: "Yesterday",
    },
  ];

  return (
    <div className="company-notification">

      <div className="notification-header">
        <h1>Notifications</h1>
        <p>Stay updated with your company activities.</p>
      </div>

      <div className="notification-container">

        {notifications.map((notification) => (

          <div
            className="notification-card"
            key={notification.id}
          >

            <div className="notification-icon">
              {notification.icon}
            </div>

            <div className="notification-content">
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
            </div>

            <span className="notification-time">
              {notification.time}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CompanyNotification;