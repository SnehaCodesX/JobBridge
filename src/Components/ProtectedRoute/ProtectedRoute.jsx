import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const {
    user,
    isAuthenticated,
    loading,
  } = useAuth();

  // =========================================
  // WAIT FOR AUTH CHECK
  // =========================================

  if (loading) {
    return null;
  }

  // =========================================
  // USER NOT LOGGED IN
  // =========================================

  if (!isAuthenticated || !user) {
    return <Navigate to="/admin-login" replace />;
  }

  // =========================================
  // ROLE CHECK
  // =========================================

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user.role)
  ) {
    return <Navigate to="/" replace />;
  }

  // =========================================
  // AUTHORIZED USER
  // =========================================

  return <Outlet />;
};

export default ProtectedRoute;