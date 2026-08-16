import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AppContext = createContext(null);

const STORAGE_KEYS = {
  jobs: "jobbridge_jobs",
  applications: "jobbridge_applications",
  users: "jobbridge_users",
};

/* =========================================================
   SAFE LOCAL STORAGE HELPERS
========================================================= */

const getStoredData = (key, fallback = []) => {
  try {
    const storedData = localStorage.getItem(key);

    if (!storedData) {
      return fallback;
    }

    const parsedData = JSON.parse(storedData);

    return Array.isArray(parsedData) ? parsedData : fallback;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return fallback;
  }
};

/* =========================================================
   APP PROVIDER
========================================================= */

export const AppProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() =>
    getStoredData(STORAGE_KEYS.jobs)
  );

  const [applications, setApplications] = useState(() =>
    getStoredData(STORAGE_KEYS.applications)
  );

  const [users, setUsers] = useState(() =>
    getStoredData(STORAGE_KEYS.users)
  );

  const [loading, setLoading] = useState(false);

  /* =======================================================
     SAVE DATA AUTOMATICALLY
  ======================================================= */

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.jobs,
      JSON.stringify(jobs)
    );
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.applications,
      JSON.stringify(applications)
    );
  }, [applications]);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.users,
      JSON.stringify(users)
    );
  }, [users]);

  /* =======================================================
     JOB FUNCTIONS
  ======================================================= */

  const addJob = (jobData) => {
    const newJob = {
      id: crypto.randomUUID
        ? crypto.randomUUID()
        : Date.now().toString(),

      ...jobData,

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setJobs((prevJobs) => [
      ...prevJobs,
      newJob,
    ]);

    return newJob;
  };

  const updateJob = (jobId, updatedData) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId
          ? {
              ...job,
              ...updatedData,
              updatedAt: new Date().toISOString(),
            }
          : job
      )
    );
  };

  const deleteJob = (jobId) => {
    setJobs((prevJobs) =>
      prevJobs.filter((job) => job.id !== jobId)
    );

    // Remove applications belonging to deleted job
    setApplications((prevApplications) =>
      prevApplications.filter(
        (application) =>
          application.jobId !== jobId
      )
    );
  };

  const getJobById = (jobId) => {
    return jobs.find(
      (job) => job.id === jobId
    );
  };

  /* =======================================================
     APPLICATION FUNCTIONS
  ======================================================= */

  const applyForJob = (applicationData) => {
    const alreadyApplied = applications.some(
      (application) =>
        application.jobId === applicationData.jobId &&
        application.userId === applicationData.userId
    );

    if (alreadyApplied) {
      return {
        success: false,
        message: "You have already applied for this job.",
      };
    }

    const newApplication = {
      id: crypto.randomUUID
        ? crypto.randomUUID()
        : Date.now().toString(),

      ...applicationData,

      status: "Pending",
      appliedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setApplications((prevApplications) => [
      ...prevApplications,
      newApplication,
    ]);

    return {
      success: true,
      application: newApplication,
      message: "Application submitted successfully.",
    };
  };

  const updateApplicationStatus = (
    applicationId,
    status
  ) => {
    setApplications((prevApplications) =>
      prevApplications.map((application) =>
        application.id === applicationId
          ? {
              ...application,
              status,
              updatedAt: new Date().toISOString(),
            }
          : application
      )
    );
  };

  const deleteApplication = (applicationId) => {
    setApplications((prevApplications) =>
      prevApplications.filter(
        (application) =>
          application.id !== applicationId
      )
    );
  };

  const getApplicationsByUser = (userId) => {
    return applications.filter(
      (application) =>
        application.userId === userId
    );
  };

  const getApplicationsByJob = (jobId) => {
    return applications.filter(
      (application) =>
        application.jobId === jobId
    );
  };

  /* =======================================================
     USER FUNCTIONS
  ======================================================= */

  const addUser = (userData) => {
    const existingUser = users.find(
      (user) =>
        user.email?.toLowerCase() ===
        userData.email?.toLowerCase()
    );

    if (existingUser) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser = {
      id: crypto.randomUUID
        ? crypto.randomUUID()
        : Date.now().toString(),

      ...userData,

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setUsers((prevUsers) => [
      ...prevUsers,
      newUser,
    ]);

    return {
      success: true,
      user: newUser,
      message: "User created successfully.",
    };
  };

  const updateUser = (userId, updatedData) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              ...updatedData,
              updatedAt: new Date().toISOString(),
            }
          : user
      )
    );
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.filter(
        (user) => user.id !== userId
      )
    );

    // Remove user's applications too
    setApplications((prevApplications) =>
      prevApplications.filter(
        (application) =>
          application.userId !== userId
      )
    );
  };

  const getUserById = (userId) => {
    return users.find(
      (user) => user.id === userId
    );
  };

  /* =======================================================
     SEARCH / FILTER HELPERS
  ======================================================= */

  const searchJobs = (searchTerm = "") => {
    const term = searchTerm
      .trim()
      .toLowerCase();

    if (!term) {
      return jobs;
    }

    return jobs.filter((job) => {
      const title =
        job.title?.toLowerCase() || "";

      const company =
        job.company?.toLowerCase() || "";

      const location =
        job.location?.toLowerCase() || "";

      const category =
        job.category?.toLowerCase() || "";

      return (
        title.includes(term) ||
        company.includes(term) ||
        location.includes(term) ||
        category.includes(term)
      );
    });
  };

  /* =======================================================
     CLEAR ALL DATA
     Useful for development/testing
  ======================================================= */

  const clearAppData = () => {
    setJobs([]);
    setApplications([]);
    setUsers([]);

    localStorage.removeItem(
      STORAGE_KEYS.jobs
    );

    localStorage.removeItem(
      STORAGE_KEYS.applications
    );

    localStorage.removeItem(
      STORAGE_KEYS.users
    );
  };

  /* =======================================================
     CONTEXT VALUE
  ======================================================= */

  const value = {
    /* Data */
    jobs,
    applications,
    users,
    loading,

    /* Setters */
    setJobs,
    setApplications,
    setUsers,
    setLoading,

    /* Jobs */
    addJob,
    updateJob,
    deleteJob,
    getJobById,
    searchJobs,

    /* Applications */
    applyForJob,
    updateApplicationStatus,
    deleteApplication,
    getApplicationsByUser,
    getApplicationsByJob,

    /* Users */
    addUser,
    updateUser,
    deleteUser,
    getUserById,

    /* Development */
    clearAppData,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

/* =========================================================
   CUSTOM HOOK
========================================================= */

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useApp must be used inside AppProvider"
    );
  }

  return context;
};

export default AppContext;