import { Routes, Route } from "react-router-dom";

import CompanyDashboard from "../Pages/Company/CompanyDashboard/CompanyDashboard";
import CompanyProfile from "../Pages/Company/CompanyProfile/CompanyProfile";
import PostJob from "../Pages/Company/PostJob/PostJob";
import ManageJobs from "../Pages/Company/ManageJobs/ManageJobs";
import Applicants from "../Pages/Company/Applicants/Applicants";
import CompanyNotification from "../Pages/Company/CompanyNotification/CompanyNotification";
import BrowseJobs from "../Pages/Candidate/BrowseJobs/BrowseJobs";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/company/dashboard"
        element={<CompanyDashboard />}
      />

      <Route
        path="/company/profile"
        element={<CompanyProfile />}
      />

      <Route
        path="/company/post-job"
        element={<PostJob />}
      />

      <Route
        path="/company/manage-jobs"
        element={<ManageJobs />}
      />

      <Route
        path="/company/applicants"
        element={<Applicants />}
      />

      <Route
        path="/company/notifications"
        element={<CompanyNotification />}
      />


      <Route
        path="/candidate/jobs"
        element={<BrowseJobs />}
     />

      <Route
        path="*"
        element={<CompanyDashboard />}
      />
    </Routes>
  );
}

export default AppRoutes;