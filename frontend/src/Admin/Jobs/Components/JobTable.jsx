import React from "react";
import JobActions from "./JobActions";
import styles from "../Jobs.module.css";

function JobTable({ jobs }) {
  return (
    <div className={styles.tableWrapper}>

      <table className={styles.jobTable}>

        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Job Type</th>
            <th>Applications</th>
            <th>Status</th>
            <th>Posted Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {jobs.length > 0 ? (

            jobs.map((job) => (

              <tr key={job.id}>

                <td>
                  <div className={styles.jobTitleInfo}>

                    <div className={styles.jobIcon}>
                      💼
                    </div>

                    <div>
                      <strong>{job.title}</strong>
                    </div>

                  </div>
                </td>

                <td>
                  {job.company}
                </td>

                <td>
                  {job.location}
                </td>

                <td>
                  {job.type}
                </td>

                <td>
                  <span className={styles.applicationCount}>
                    {job.applications}
                  </span>
                </td>

                <td>

                  <span
                    className={`${styles.statusBadge} ${
                      styles[job.status.toLowerCase()]
                    }`}
                  >
                    {job.status}
                  </span>

                </td>

                <td>
                  {job.date}
                </td>

                <td>
                  <JobActions job={job} />
                </td>

              </tr>

            ))

          ) : (

            <tr>
              <td
                colSpan="8"
                className={styles.noData}
              >
                No jobs found
              </td>
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default JobTable;
/* // Hero Section component */