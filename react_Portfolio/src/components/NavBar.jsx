import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-2 ps-5 bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/* You can keep this empty or add a logo/image here */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item ms-auto">
              <NavLink className="nav-link" to="/projects-gallery" end>
                Projects
              </NavLink>
            </li>
            <li className="nav-item ms-auto">
              <NavLink className="nav-link" to="/contact" end>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
