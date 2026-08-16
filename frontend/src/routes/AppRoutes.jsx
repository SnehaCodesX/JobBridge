import { BrowserRouter, Routes, Route } from "react-router-dom";

import CompanyDashboard from "../Pages/Company/CompanyDashboard/CompanyDashboard";
import CompanyProfile from "../Pages/Company/CompanyProfile/CompanyProfile";
import PostJob from "../Pages/Company/PostJob/PostJob";
import ManageJobs from "../Pages/Company/ManageJobs/ManageJobs";
import Applicants from "../Pages/Company/Applicants/Applicants";
import CompanyNotification from "../Pages/Company/CompanyNotification/CompanyNotification";

import CandidateDashboard from "../Pages/Candidate/CandidateDashboard/CandidateDashboard";
import BrowseJobs from "../Pages/Candidate/BrowseJobs/BrowseJobs";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* COMPANY */}

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

        {/* CANDIDATE */}

        <Route
          path="/candidate/dashboard"
          element={<CandidateDashboard />}
        />

        <Route
          path="/candidate/jobs"
          element={<BrowseJobs />}
        />

        {/* DEFAULT */}

        <Route
          path="*"
          element={<CompanyDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;