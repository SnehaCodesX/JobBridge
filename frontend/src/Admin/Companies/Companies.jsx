import React, { useMemo, useState } from "react";

import CompanyCard from "./components/CompanyCard";
import CompanySearch from "./components/CompanySearch";
import CompanyFilters from "./components/CompanyFilters";
import CompanyTable from "./components/CompanyTable";

import styles from "./Companies.module.css";
import JobBridgeLogo from "../../assets/Logos/JobBridgeLogo.png";


const initialCompanies = [
  {
    id: 1,
    name: "TechNova Solutions",
    email: "contact@technova.com",
    industry: "IT Services",
    location: "Bangalore, India",
    jobs: 24,
    employees: "250-500",
    status: "Verified",
  },

  {
    id: 2,
    name: "CodeCraft Technologies",
    email: "hr@codecraft.com",
    industry: "Software",
    location: "Pune, India",
    jobs: 18,
    employees: "100-250",
    status: "Verified",
  },

  {
    id: 3,
    name: "InnoVision Labs",
    email: "hello@innovision.com",
    industry: "Product",
    location: "Hyderabad, India",
    jobs: 15,
    employees: "50-100",
    status: "Active",
  },

  {
    id: 4,
    name: "DataMind Analytics",
    email: "careers@datamind.com",
    industry: "Analytics",
    location: "Gurgaon, India",
    jobs: 12,
    employees: "100-250",
    status: "Active",
  },

  {
    id: 5,
    name: "CloudNet Systems",
    email: "hr@cloudnet.com",
    industry: "Cloud",
    location: "Noida, India",
    jobs: 9,
    employees: "50-100",
    status: "Pending",
  },

  {
    id: 6,
    name: "Pixel Perfect Studios",
    email: "jobs@pixelperfect.com",
    industry: "Design",
    location: "Mumbai, India",
    jobs: 8,
    employees: "20-50",
    status: "Active",
  },

  {
    id: 7,
    name: "SecureTech Pvt. Ltd.",
    email: "info@securetech.com",
    industry: "Cybersecurity",
    location: "Chennai, India",
    jobs: 6,
    employees: "100-250",
    status: "Verified",
  },

  {
    id: 8,
    name: "NextGen Innovations",
    email: "hr@nextgen.com",
    industry: "Software",
    location: "Delhi, India",
    jobs: 11,
    employees: "100-250",
    status: "Active",
  },

  {
    id: 9,
    name: "Bright Future Tech",
    email: "jobs@brightfuture.com",
    industry: "IT Services",
    location: "Jaipur, India",
    jobs: 7,
    employees: "50-100",
    status: "Pending",
  },

  {
    id: 10,
    name: "AlphaWave Systems",
    email: "careers@alphawave.com",
    industry: "Cloud",
    location: "Kolkata, India",
    jobs: 14,
    employees: "250-500",
    status: "Verified",
  },
];


const Companies = () => {

  const [companies, setCompanies] =
    useState(initialCompanies);

  const [search, setSearch] =
    useState("");

  const [industry, setIndustry] =
    useState("All");

  const [status, setStatus] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [modal, setModal] =
    useState(null);

  const [selectedCompany, setSelectedCompany] =
    useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    industry: "Software",
    location: "",
    jobs: 0,
    employees: "50-100",
    status: "Active",
  });


  const itemsPerPage = 5;


  /* =====================================================
     FILTER COMPANIES
  ===================================================== */

  const filteredCompanies = useMemo(() => {

    return companies.filter((company) => {

      const matchesSearch =
        company.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        company.email
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesIndustry =
        industry === "All" ||
        company.industry === industry;

      const matchesStatus =
        status === "All" ||
        company.status === status;

      return (
        matchesSearch &&
        matchesIndustry &&
        matchesStatus
      );
    });

  }, [companies, search, industry, status]);


  /* =====================================================
     RESET PAGE WHEN SEARCH/FILTER CHANGES
  ===================================================== */

  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, industry, status]);


  /* =====================================================
     STATS
  ===================================================== */

  const totalCompanies = companies.length;

  const verifiedCompanies =
    companies.filter(
      (company) => company.status === "Verified"
    ).length;

  const activeCompanies =
    companies.filter(
      (company) => company.status === "Active"
    ).length;

  const totalJobs =
    companies.reduce(
      (total, company) =>
        total + Number(company.jobs),
      0
    );


  /* =====================================================
     OPEN ADD MODAL
  ===================================================== */

  const openAddModal = () => {

    setForm({
      name: "",
      email: "",
      industry: "Software",
      location: "",
      jobs: 0,
      employees: "50-100",
      status: "Active",
    });

    setModal("add");
  };


  /* =====================================================
     OPEN EDIT MODAL
  ===================================================== */

  const openEditModal = (company) => {

    setSelectedCompany(company);

    setForm({
      ...company,
    });

    setModal("edit");
  };


  /* =====================================================
     ADD COMPANY
  ===================================================== */

  const handleAddCompany = (e) => {

    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.location.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newCompany = {
      ...form,
      id: Date.now(),
      jobs: Number(form.jobs),
    };

    setCompanies((prev) => [
      newCompany,
      ...prev,
    ]);

    setModal(null);
  };


  /* =====================================================
     EDIT COMPANY
  ===================================================== */

  const handleEditCompany = (e) => {

    e.preventDefault();

    setCompanies((prev) =>
      prev.map((company) =>
        company.id === selectedCompany.id
          ? {
              ...form,
              id: selectedCompany.id,
              jobs: Number(form.jobs),
            }
          : company
      )
    );

    setModal(null);
    setSelectedCompany(null);
  };


  /* =====================================================
     DELETE COMPANY
  ===================================================== */

  const handleDeleteCompany = (company) => {

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${company.name}?`
    );

    if (!confirmDelete) return;

    setCompanies((prev) =>
      prev.filter(
        (item) => item.id !== company.id
      )
    );
  };


  /* =====================================================
     VIEW COMPANY
  ===================================================== */

  const handleViewCompany = (company) => {

    setSelectedCompany(company);

    setModal("view");
  };


  /* =====================================================
     FORM CHANGE
  ===================================================== */

  const handleFormChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (

    <div className={styles.companiesPage}>

      {/* =================================================
          HEADER
      ================================================= */}

      <div className={styles.pageHeader}>

        <div className={styles.headingSection}>

          <div className={styles.headingIcon}>
            🏢
          </div>

          <div>

            <h1>
              Companies Management
            </h1>

            <p>
              View and manage all registered
              companies on the platform.
            </p>

          </div>

        </div>

      </div>


      {/* =================================================
          STAT CARDS
      ================================================= */}

      <div className={styles.statsGrid}>

        <CompanyCard
          icon="🏢"
          title="Total Companies"
          value={totalCompanies}
          growth="18.4%"
          type="purple"
        />

        <CompanyCard
          icon="✓"
          title="Verified Companies"
          value={verifiedCompanies}
          growth="15.7%"
          type="green"
        />

        <CompanyCard
          icon="💼"
          title="Active Companies"
          value={activeCompanies}
          growth="20.1%"
          type="blue"
        />

        <CompanyCard
          icon="📊"
          title="Total Jobs"
          value={totalJobs}
          growth="16.3%"
          type="orange"
        />

      </div>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className={styles.mainGrid}>

        {/* LEFT */}

        <div className={styles.companiesSection}>

          <div className={styles.sectionHeader}>

            <div>

              <h2>
                All Companies
              </h2>

              <p>
                A list of all registered companies.
              </p>

            </div>


            <div className={styles.tableControls}>

              <CompanySearch
                search={search}
                setSearch={setSearch}
              />

              <CompanyFilters
                industry={industry}
                setIndustry={setIndustry}
                status={status}
                setStatus={setStatus}
                onAddCompany={openAddModal}
              />

            </div>

          </div>


          <CompanyTable
            companies={filteredCompanies}
            onView={handleViewCompany}
            onEdit={openEditModal}
            onDelete={handleDeleteCompany}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
          />

        </div>


        {/* RIGHT SIDEBAR */}

        <div className={styles.rightSidebar}>

          {/* Overview */}

          <div className={styles.overviewCard}>

            <div className={styles.sideHeader}>

              <h3>
                Company Overview
              </h3>

              <select>
                <option>
                  This Month
                </option>

                <option>
                  This Year
                </option>
              </select>

            </div>


            <div className={styles.chartArea}>

              <div className={styles.donutChart}>

                <div>

                  <strong>
                    {totalCompanies}
                  </strong>

                  <span>
                    Companies
                  </span>

                </div>

              </div>


              <div className={styles.chartLegend}>

                <p>
                  <span
                    className={styles.dotPurple}
                  />

                  Verified

                  <b>
                    {verifiedCompanies}
                  </b>
                </p>

                <p>
                  <span
                    className={styles.dotLight}
                  />

                  Active

                  <b>
                    {activeCompanies}
                  </b>
                </p>

                <p>
                  <span
                    className={styles.dotOrange}
                  />

                  Pending

                  <b>
                    {
                      companies.filter(
                        (company) =>
                          company.status ===
                          "Pending"
                      ).length
                    }
                  </b>
                </p>

              </div>

            </div>

          </div>


          {/* Recent Companies */}

          <div className={styles.recentCard}>

            <div className={styles.sideHeader}>

              <h3>
                Recent Companies
              </h3>

              <button>
                View All
              </button>

            </div>


            {companies
              .slice(0, 5)
              .map((company) => (

                <div
                  className={styles.recentCompany}
                  key={company.id}
                >

                  <div className={styles.recentLogo}>

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

                  <div
                    className={
                      styles.recentTime
                    }
                  >

                    <b>
                      New
                    </b>

                    <span>
                      Recently
                    </span>

                  </div>

                </div>

              ))}

          </div>


          {/* Invite */}

          <div className={styles.inviteCard}>

            <div className={styles.inviteIcon}>
              📣
            </div>

            <div>

              <h3>
                Grow Your Network
              </h3>

              <p>
                Invite more companies to
                register and grow your
                platform.
              </p>

              <button
                onClick={openAddModal}
              >
                Invite Companies
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          ADD / EDIT MODAL
      ================================================= */}

      {(modal === "add" ||
        modal === "edit") && (

        <div className={styles.modalOverlay}>

          <div className={styles.modal}>

            <div className={styles.modalHeader}>

              <div>

                <h2>
                  {modal === "add"
                    ? "Add Company"
                    : "Edit Company"}
                </h2>

                <p>
                  Enter company information
                  below.
                </p>

              </div>

              <button
                className={styles.closeButton}
                onClick={() => setModal(null)}
              >
                ×
              </button>

            </div>


            <form
              onSubmit={
                modal === "add"
                  ? handleAddCompany
                  : handleEditCompany
              }
            >

              <div className={styles.formGrid}>

                <div className={styles.formGroup}>

                  <label>
                    Company Name *
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    placeholder="Enter company name"
                  />

                </div>


                <div className={styles.formGroup}>

                  <label>
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    placeholder="company@email.com"
                  />

                </div>


                <div className={styles.formGroup}>

                  <label>
                    Industry
                  </label>

                  <select
                    name="industry"
                    value={form.industry}
                    onChange={handleFormChange}
                  >

                    <option>
                      IT Services
                    </option>

                    <option>
                      Software
                    </option>

                    <option>
                      Product
                    </option>

                    <option>
                      Analytics
                    </option>

                    <option>
                      Cloud
                    </option>

                    <option>
                      Design
                    </option>

                    <option>
                      Cybersecurity
                    </option>

                  </select>

                </div>


                <div className={styles.formGroup}>

                  <label>
                    Location *
                  </label>

                  <input
                    name="location"
                    value={form.location}
                    onChange={handleFormChange}
                    placeholder="City, India"
                  />

                </div>


                <div className={styles.formGroup}>

                  <label>
                    Jobs Posted
                  </label>

                  <input
                    type="number"
                    name="jobs"
                    value={form.jobs}
                    onChange={handleFormChange}
                    min="0"
                  />

                </div>


                <div className={styles.formGroup}>

                  <label>
                    Employees
                  </label>

                  <select
                    name="employees"
                    value={form.employees}
                    onChange={handleFormChange}
                  >

                    <option>
                      1-20
                    </option>

                    <option>
                      20-50
                    </option>

                    <option>
                      50-100
                    </option>

                    <option>
                      100-250
                    </option>

                    <option>
                      250-500
                    </option>

                    <option>
                      500+
                    </option>

                  </select>

                </div>


                <div className={styles.formGroup}>

                  <label>
                    Status
                  </label>

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleFormChange}
                  >

                    <option>
                      Active
                    </option>

                    <option>
                      Verified
                    </option>

                    <option>
                      Pending
                    </option>

                  </select>

                </div>

              </div>


              <div className={styles.modalFooter}>

                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() =>
                    setModal(null)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className={styles.saveButton}
                >
                  {modal === "add"
                    ? "Add Company"
                    : "Save Changes"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}


      {/* =================================================
          VIEW MODAL
      ================================================= */}

      {modal === "view" &&
        selectedCompany && (

          <div className={styles.modalOverlay}>

            <div
              className={`${styles.modal} ${styles.viewModal}`}
            >

              <div className={styles.modalHeader}>

                <div className={styles.viewCompanyTitle}>

                  <div
                    className={
                      styles.largeCompanyLogo
                    }
                  >

                    <img
                      src={JobBridgeLogo}
                      alt="JobBridge"
                    />

                  </div>

                  <div>

                    <h2>
                      {selectedCompany.name}
                    </h2>

                    <p>
                      {selectedCompany.email}
                    </p>

                  </div>

                </div>

                <button
                  className={styles.closeButton}
                  onClick={() =>
                    setModal(null)
                  }
                >
                  ×
                </button>

              </div>


              <div className={styles.companyDetails}>

                <div>
                  <span>Industry</span>
                  <strong>
                    {selectedCompany.industry}
                  </strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>
                    {selectedCompany.location}
                  </strong>
                </div>

                <div>
                  <span>Jobs Posted</span>
                  <strong>
                    {selectedCompany.jobs}
                  </strong>
                </div>

                <div>
                  <span>Employees</span>
                  <strong>
                    {selectedCompany.employees}
                  </strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>
                    {selectedCompany.status}
                  </strong>
                </div>

              </div>

            </div>

          </div>

        )}

    </div>
  );
};

export default Companies;