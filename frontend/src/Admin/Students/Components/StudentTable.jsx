import React from "react";
import StudentActions from "./StudentActions";

const StudentTable = ({ students, onView, onEdit, onDelete }) => {
  return (
    <div className="studentTableWrapper">
      <table className="studentTable">
        <thead>
          <tr>
            <th>Student</th>
            <th>Email</th>
            <th>Course</th>
            <th>College</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="studentInfo">
                    <div className="studentAvatar">
                      {student.name.charAt(0)}
                    </div>

                    <div>
                      <strong>{student.name}</strong>
                      <span>ID: {student.id}</span>
                    </div>
                  </div>
                </td>

                <td>{student.email}</td>

                <td>{student.course}</td>

                <td>{student.college}</td>

                <td>
                  <span
                    className={`statusBadge ${
                      student.status === "Active"
                        ? "activeStatus"
                        : "inactiveStatus"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>

                <td>{student.joined}</td>

                <td>
                  <StudentActions
                    student={student}
                    onView={onView}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="noStudents">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
/* // Hero Section component */