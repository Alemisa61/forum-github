import React from "react";
import { Link } from "react-router-dom";

import "./header.css";
import LOGO from "../../assets/evangadi-logo-5fea54cc.png";
import NavLinks from "./NavLinks";


const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-light py-4">
          <div className="container navbar-container">
            <Link className="navbar-brand" to="">
              <img src={LOGO} alt="" />
            </Link>
            <div className="d-lg-none d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="d-none d-lg-flex align-items-center">
              <NavLinks />
            </div>
          </div>
        </nav>
        <div
          className="d-lg-none offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <div className="d-flex w-100 justify-content-start">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="offcanvas-body">
            <NavLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
