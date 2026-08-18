import React from "react";

const StudentFilters = ({ status, setStatus }) => {
  return (
    <div className="studentFilters">
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="All">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <select>
        <option value="All">All Courses</option>
        <option value="BCA">BCA</option>
        <option value="BBA">BBA</option>
        <option value="B.Com">B.Com</option>
        <option value="MCA">MCA</option>
      </select>
    </div>
  );
};

export default StudentFilters;
/* // Hero Section component */