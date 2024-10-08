import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
