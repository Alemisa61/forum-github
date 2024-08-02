import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({ children, msg, redirect }) => {
  const navigate = useNavigate();
 

  return children;
};

export default ProtectedRoute;
