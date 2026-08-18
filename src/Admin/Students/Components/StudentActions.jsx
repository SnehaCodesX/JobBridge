import React from "react";

const StudentActions = ({ student, onView, onEdit, onDelete }) => {
  return (
    <div className="studentActions">
      <button
        className="viewBtn"
        onClick={() => onView(student)}
        title="View"
      >
        👁
      </button>

      <button
        className="editBtn"
        onClick={() => onEdit(student)}
        title="Edit"
      >
        ✎
      </button>

      <button
        className="deleteBtn"
        onClick={() => onDelete(student)}
        title="Delete"
      >
        🗑
      </button>
    </div>
  );
};

export default StudentActions;
/* // Hero Section component */