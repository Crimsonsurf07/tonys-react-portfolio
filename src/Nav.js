import React from "react";

// import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <header className="sticky-top">
      <nav role="navigation">
        <ul className="navbar" style={{ backgroundColor: "orangered" }}>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link-active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link-active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link-active" : "nav-link"
              }
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link-active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
