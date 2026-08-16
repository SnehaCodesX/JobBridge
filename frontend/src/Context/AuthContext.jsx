import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

const AUTH_STORAGE_KEY = "jobbridgeUser";
const USERS_STORAGE_KEY = "jobbridge_users";

/* =========================================================
   SAFE STORAGE HELPERS
========================================================= */

const getStoredUsers = () => {
  try {
    const data = localStorage.getItem(USERS_STORAGE_KEY);

    if (!data) return [];

    const parsed = JSON.parse(data);

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Unable to read JobBridge users:", error);
    return [];
  }
};

const saveUsers = (users) => {
  localStorage.setItem(
    USERS_STORAGE_KEY,
    JSON.stringify(users)
  );
};

/* =========================================================
   AUTH PROVIDER
========================================================= */

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* =======================================================
     RESTORE LOGIN SESSION
  ======================================================= */

  useEffect(() => {
    try {
      const savedUser =
        localStorage.getItem(AUTH_STORAGE_KEY);

      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);

        if (
          parsedUser &&
          parsedUser.isAuthenticated
        ) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error(
        "Invalid saved authentication data:",
        error
      );

      localStorage.removeItem(AUTH_STORAGE_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  /* =======================================================
     LOGIN
  ======================================================= */

  const login = ({
    email,
    password,
    role = "candidate",
  }) => {
    const normalizedEmail =
      email?.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      return {
        success: false,
        message: "Email and password are required.",
      };
    }

    const users = getStoredUsers();

    const existingUser = users.find(
      (item) =>
        item.email?.toLowerCase() ===
          normalizedEmail &&
        item.role === role
    );

    /*
      DEVELOPMENT DEMO LOGIN

      If the user has already registered,
      credentials are checked against that account.
    */

    if (existingUser) {
      if (existingUser.password !== password) {
        return {
          success: false,
          message: "Incorrect password.",
        };
      }

      const loggedInUser = {
        ...existingUser,
        isAuthenticated: true,
      };

      setUser(loggedInUser);

      localStorage.setItem(
        AUTH_STORAGE_KEY,
        JSON.stringify(loggedInUser)
      );

      return {
        success: true,
        user: loggedInUser,
        message: "Login successful.",
      };
    }

    /*
      ADMIN DEMO ACCOUNT

      This is only for frontend development.
      Replace with real backend authentication later.
    */

    if (
      role === "admin" &&
      normalizedEmail === "admin@jobbridge.com" &&
      password === "Admin@123"
    ) {
      const adminUser = {
        id: "admin-demo",
        name: "JobBridge Admin",
        email: normalizedEmail,
        role: "admin",
        isAuthenticated: true,
      };

      setUser(adminUser);

      localStorage.setItem(
        AUTH_STORAGE_KEY,
        JSON.stringify(adminUser)
      );

      return {
        success: true,
        user: adminUser,
        message: "Admin login successful.",
      };
    }

    return {
      success: false,
      message:
        "Account not found. Please sign up first.",
    };
  };

  /* =======================================================
     SIGN UP
  ======================================================= */

  const signup = ({
    name,
    email,
    password,
    role = "candidate",
    ...additionalData
  }) => {
    const cleanName = name?.trim();
    const normalizedEmail =
      email?.trim().toLowerCase();

    if (!cleanName) {
      return {
        success: false,
        message: "Name is required.",
      };
    }

    if (!normalizedEmail) {
      return {
        success: false,
        message: "Email is required.",
      };
    }

    if (!password) {
      return {
        success: false,
        message: "Password is required.",
      };
    }

    if (password.length < 8) {
      return {
        success: false,
        message:
          "Password must be at least 8 characters.",
      };
    }

    if (
      !["candidate", "company"].includes(role)
    ) {
      return {
        success: false,
        message: "Invalid account role.",
      };
    }

    const users = getStoredUsers();

    const alreadyExists = users.some(
      (item) =>
        item.email?.toLowerCase() ===
        normalizedEmail
    );

    if (alreadyExists) {
      return {
        success: false,
        message:
          "An account with this email already exists.",
      };
    }

    const newUser = {
      id:
        typeof crypto !== "undefined" &&
        crypto.randomUUID
          ? crypto.randomUUID()
          : Date.now().toString(),

      name: cleanName,
      email: normalizedEmail,
      password,
      role,

      ...additionalData,

      isAuthenticated: false,

      createdAt: new Date().toISOString(),
    };

    users.push(newUser);

    saveUsers(users);

    return {
      success: true,
      user: newUser,
      message:
        "Account created successfully. Please login.",
    };
  };

  /* =======================================================
     LOGOUT
  ======================================================= */

  const logout = () => {
    setUser(null);

    localStorage.removeItem(AUTH_STORAGE_KEY);

    return {
      success: true,
      message: "Logged out successfully.",
    };
  };

  /* =======================================================
     UPDATE CURRENT USER
  ======================================================= */

  const updateUser = (updatedData) => {
    if (!user) {
      return {
        success: false,
        message: "No user is currently logged in.",
      };
    }

    const updatedUser = {
      ...user,
      ...updatedData,
      isAuthenticated: true,
      updatedAt: new Date().toISOString(),
    };

    setUser(updatedUser);

    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify(updatedUser)
    );

    /*
      Also update registered user data.
    */

    const users = getStoredUsers();

    const updatedUsers = users.map(
      (registeredUser) =>
        registeredUser.id === user.id
          ? {
              ...registeredUser,
              ...updatedData,
              updatedAt:
                new Date().toISOString(),
            }
          : registeredUser
    );

    saveUsers(updatedUsers);

    return {
      success: true,
      user: updatedUser,
      message: "Profile updated successfully.",
    };
  };

  /* =======================================================
     CHANGE PASSWORD
  ======================================================= */

  const changePassword = (
    currentPassword,
    newPassword
  ) => {
    if (!user) {
      return {
        success: false,
        message: "Please login first.",
      };
    }

    if (!currentPassword || !newPassword) {
      return {
        success: false,
        message:
          "Current and new password are required.",
      };
    }

    if (currentPassword !== user.password) {
      return {
        success: false,
        message: "Current password is incorrect.",
      };
    }

    if (newPassword.length < 8) {
      return {
        success: false,
        message:
          "New password must be at least 8 characters.",
      };
    }

    return updateUser({
      password: newPassword,
    });
  };

  /* =======================================================
     SIMPLE DEVELOPMENT PASSWORD RESET
  ======================================================= */

  const resetPassword = (
    email,
    newPassword
  ) => {
    const normalizedEmail =
      email?.trim().toLowerCase();

    if (!normalizedEmail || !newPassword) {
      return {
        success: false,
        message:
          "Email and new password are required.",
      };
    }

    if (newPassword.length < 8) {
      return {
        success: false,
        message:
          "Password must be at least 8 characters.",
      };
    }

    const users = getStoredUsers();

    const userIndex = users.findIndex(
      (item) =>
        item.email?.toLowerCase() ===
        normalizedEmail
    );

    if (userIndex === -1) {
      return {
        success: false,
        message: "No account found with this email.",
      };
    }

    users[userIndex] = {
      ...users[userIndex],
      password: newPassword,
      updatedAt: new Date().toISOString(),
    };

    saveUsers(users);

    return {
      success: true,
      message:
        "Password reset successfully. Please login.",
    };
  };

  /* =======================================================
     AUTH STATUS
  ======================================================= */

  const isAuthenticated = Boolean(
    user?.isAuthenticated
  );

  /* =======================================================
     ROLE HELPERS
  ======================================================= */

  const isCandidate =
    user?.role === "candidate";

  const isCompany =
    user?.role === "company";

  const isAdmin =
    user?.role === "admin";

  /* =======================================================
     CONTEXT VALUE
  ======================================================= */

  const value = {
    user,
    setUser,

    loading,
    isAuthenticated,

    isCandidate,
    isCompany,
    isAdmin,

    login,
    signup,
    logout,

    updateUser,
    changePassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/* =========================================================
   CUSTOM HOOK
========================================================= */

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside an AuthProvider"
    );
  }

  return context;
};

export default AuthContext;