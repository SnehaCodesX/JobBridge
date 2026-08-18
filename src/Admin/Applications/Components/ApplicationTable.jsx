import React from "react";
import ApplicationActions from "./ApplicationActions";
import styles from "../Applications.module.css";

function ApplicationTable({ applications }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.applicationTable}>
        <thead>
          <tr>
            <th>Applicant</th>
            <th>Job Position</th>
            <th>Company</th>
            <th>Status</th>
            <th>Applied Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.length > 0 ? (
            applications.map((application) => (
              <tr key={application.id}>
                <td>
                  <div className={styles.applicantInfo}>
                    <div className={styles.avatar}>
                      {application.applicant.charAt(0)}
                    </div>

                    <div>
                      <strong>{application.applicant}</strong>
                      <span>{application.email}</span>
                    </div>
                  </div>
                </td>

                <td>{application.job}</td>

                <td>{application.company}</td>

                <td>
                  <span
                    className={`${styles.statusBadge} ${
                      styles[application.status.toLowerCase()]
                    }`}
                  >
                    {application.status}
                  </span>
                </td>

                <td>{application.date}</td>

                <td>
                  <ApplicationActions application={application} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className={styles.noData}>
                No applications found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationTable;