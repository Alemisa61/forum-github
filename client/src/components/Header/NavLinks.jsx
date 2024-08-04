import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext"; // Adjust the path as needed
import "./header.css";


const NavLinks = () => {
   const { isAuthenticated, handleLogout } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleLogoutClick = () => {
     handleLogout();
     navigate("/login");
   };
  return (
    <>
      <ul className="navbar-nav d-flex flex-column flex-lg-row">
        <li className="nav-item mx-lg-3">
          <Link className="nav-link" to="#">
            Home
          </Link>
        </li>
        <li className="nav-item mx-lg-3">
          <Link className="nav-link" to="#">
            How It Works
          </Link>
        </li>
      </ul>
      <div className="mt-3 mt-lg-0 ml-lg-3">
        {isAuthenticated ? (
          <button
            className="btn btn-primary btn-custom-width"
            onClick={handleLogoutClick}
          >
            Log Out
          </button>
        ) : (
          <Link to="/login" className="btn nav-actions btn-custom-width">
            Log In
          </Link>
        )}
      </div>
    </>
  );
};

export default NavLinks;
