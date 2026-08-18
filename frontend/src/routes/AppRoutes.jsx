import { Routes, Route } from "react-router-dom";

import StudentDashboard from "../Pages/Student/StudentDashBoard/StudentDashboard";
import StudentProfile from "../Pages/Student/StudentProfile/StudentProfile";
import FindJobs from "../Pages/Student/FindJobs/FindJobs";
import JobDetails from "../Pages/Student/JobDetails/JobDetails";
import RecommendedJobs from "../Pages/Student/RecommendedJobs/RecommendedJobs";
import MyApplications from "../Pages/Student/MyApplications/MyApplications";
import StudentNotification from "../Pages/Student/StudentNotifications/StudentNotification";

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <div style={{ padding: "50px" }}>
            <h1>JOBBRIDGE HOME</h1>
            <p>Routing is working correctly.</p>
          </div>
        }
      />

      <Route
        path="/student/dashboard"
        element={<StudentDashboard />}
      />

      <Route
        path="/student/profile"
        element={<StudentProfile />}
      />

      <Route
        path="/student/findjobs"
        element={<FindJobs />}
      />

      <Route
        path="/student/jobdetails"
        element={<JobDetails />}
      />

      <Route
        path="/student/recommendedjobs"
        element={<RecommendedJobs />}
      />

      <Route
        path="/student/myapplications"
        element={<MyApplications />}
      />

      <Route
        path="/student/notifications"
        element={<StudentNotification />}
      />

    </Routes>
  );
}

export default AppRoutes;