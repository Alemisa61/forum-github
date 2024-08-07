import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return (
      <>
        <p>Please Sign in to see this page.</p>
        <Navigate to="/" />
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
