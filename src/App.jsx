import { Routes, Route } from "react-router-dom";

import CompanyLogin from "./Pages/Auth/CompanyLogin/CompanyLogin";
import CompanyRegister from "./Pages/Auth/CompanyRegister/CompanyRegister";
import StudentLogin from "./Pages/Auth/StudentLogin/StudentLogin";
import StudentRegister from "./Pages/Auth/StudentRegister/StudentRegister";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import Application from "./Admin/Applications/Applications";
import Jobs from "./Admin/Jobs/Jobs";
import Reports from "./Admin/Reports/Reports";
import Students from "./Admin/Students/Students";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CompanyLogin />} />
      <Route path="/company-register" element={<CompanyRegister />} />
      <Route
  path="/student-login"
  element={<StudentLogin />}/>
  <Route
    path="/student-register"
  element={<StudentRegister />}/>
  <Route path="/admin-dashboard" element={<AdminDashboard />} />
  <Route path="/applications" element={<Application />} />
  <Route path="/jobs" element={<Jobs />} /> 
  <Route path="/reports" element={<Reports />}/>  
  <Route path="/students" element={<Students />}/>  
   </Routes>

  );
}

export default App;