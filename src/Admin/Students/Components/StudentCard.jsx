import React from "react";

const StudentCard = ({ title, value, icon, className = "" }) => {
  return (
    <div className={`studentCard ${className}`}>
      <div className="studentCardIcon">{icon}</div>

      <div className="studentCardContent">
        <p>{title}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default StudentCard;
/* // Hero Section component */