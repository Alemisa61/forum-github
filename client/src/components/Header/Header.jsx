import React from "react";
import styles from "./header.module.css";
import { axiosInstance } from "../../API/axios";
import { Link, useNavigate } from "react-router-dom";

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext"; // Adjust the path as needed

const Header = () => {
  const { isAuthenticated, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">Evangadi Forum</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">How It Works</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <button onClick={handleLogoutClick}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
