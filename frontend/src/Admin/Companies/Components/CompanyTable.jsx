import React from "react";
import CompanyActions from "./CompanyActions";
import styles from "../Companies.module.css";
import JobBridgeLogo from "../../../assets/Logos/JobBridgeLogo.png";

const CompanyTable = ({
  companies,
  onView,
  onEdit,
  onDelete,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}) => {

  const totalPages = Math.ceil(
    companies.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentCompanies = companies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className={styles.tableWrapper}>

      <table className={styles.companyTable}>

        <thead>
          <tr>
            <th>Company</th>
            <th>Industry</th>
            <th>Location</th>
            <th>Jobs Posted</th>
            <th>Employees</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {currentCompanies.length > 0 ? (

            currentCompanies.map((company, index) => (

              <tr key={company.id}>

                {/* Company */}

                <td>
                  <div className={styles.companyInfo}>

                    <div className={styles.companyLogo}>

                      <img
                        src={JobBridgeLogo}
                        alt="JobBridge"
                      />

                    </div>

                    <div>
                      <strong>
                        {company.name}
                      </strong>

                      <span>
                        {company.email}
                      </span>
                    </div>

                  </div>
                </td>


                {/* Industry */}

                <td>

                  <span
                    className={`${styles.industryBadge} ${
                      styles[`industry${index % 7}`]
                    }`}
                  >
                    {company.industry}
                  </span>

                </td>


                {/* Location */}

                <td>

                  <span className={styles.location}>
                    ◉ {company.location}
                  </span>

                </td>


                {/* Jobs */}

                <td>
                  <strong className={styles.numberValue}>
                    {company.jobs}
                  </strong>
                </td>


                {/* Employees */}

                <td>
                  {company.employees}
                </td>


                {/* Status */}

                <td>

                  <span
                    className={`${styles.statusBadge} ${
                      company.status === "Verified"
                        ? styles.verified
                        : company.status === "Active"
                        ? styles.active
                        : styles.pending
                    }`}
                  >
                    {company.status}
                  </span>

                </td>


                {/* Actions */}

                <td>

                  <CompanyActions
                    company={company}
                    onView={onView}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="7"
                className={styles.noCompanies}
              >
                <div>
                  <span>🏢</span>
                  <strong>No companies found</strong>
                  <p>
                    Try changing your search or filters.
                  </p>
                </div>
              </td>

            </tr>

          )}

        </tbody>

      </table>


      {/* Pagination */}

      <div className={styles.pagination}>

        <span>
          Showing{" "}
          {companies.length === 0
            ? 0
            : startIndex + 1}
          {" - "}
          {Math.min(
            startIndex + itemsPerPage,
            companies.length
          )}
          {" of "}
          {companies.length} companies
        </span>


        <div className={styles.pageButtons}>

          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((page) => page - 1)
            }
          >
            ‹
          </button>


          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (

            <button
              key={page}
              className={
                currentPage === page
                  ? styles.currentPage
                  : ""
              }
              onClick={() =>
                setCurrentPage(page)
              }
            >
              {page}
            </button>

          ))}


          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() =>
              setCurrentPage((page) => page + 1)
            }
          >
            ›
          </button>

        </div>

      </div>

    </div>
  );
};

export default CompanyTable;