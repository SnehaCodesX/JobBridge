import { useNavigate } from 'react-router-dom';
import './CompanySidebar.css';

function CompanySidebar() {
  const navigate = useNavigate();

  return (
    <div className="company-sidebar">

      <h2 className="sidebar-logo">JobBridge</h2>

      <nav>

        <button onClick={() => navigate('/company/dashboard')}>
          🏠 Dashboard
        </button>

        <button onClick={() => navigate('/company/profile')}>
          👤 Company Profile
        </button>

        <button onClick={() => navigate('/company/post-job')}>
          ➕ Post New Job
        </button>

        <button onClick={() => navigate('/company/manage-jobs')}>
          📋 Manage Jobs
        </button>

        <button onClick={() => navigate('/company/applicants')}>
          👥 Applicants
        </button>

        <button onClick={() => navigate('/company/notifications')}>
          🔔 Notifications
        </button>

      </nav>

    </div>
  );
}

export default CompanySidebar;