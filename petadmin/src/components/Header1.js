import React, { useState } from "react";
import "./Header1.css"; // External stylesheet for styling
import DSSLogo from "../assets/DSS (1).png"; // Import DSS.png image
import { Link } from "react-router-dom";

const Header = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState("Manage Pets");

  return (
    <header className="header-container">
      {/* Logo Image */}
      <div className="logo">
        <img src={DSSLogo} alt="DSS Logo" className="logo-image" />
      </div>
      <nav className="nav-links">
        {/* Navigation Links */}
        <Link
          to="/petlist" // Use `to` for React Router Link
          className={activeLink === "Manage Pets" ? "active" : ""}
          onClick={() => setActiveLink("Manage Pets")}
        >
          Manage Pets
        </Link>
        <Link
          to="/adopt-list" // Adjust path as per your routing setup
          className={activeLink === "Adoption Applicant List" ? "active" : ""}
          onClick={() => setActiveLink("Adoption Applicant List")}
        >
          Adoption Applicant List
        </Link>
        <Link
          to="/event" // Use `to` for React Router Link
          className={activeLink === "Events" ? "active" : ""}
          onClick={() => setActiveLink("Events")}
        >
          Events
        </Link>
        <Link
          to="/history" // Adjust path as per your routing setup
          className={activeLink === "History" ? "active" : ""}
          onClick={() => setActiveLink("History")}
        >
          History
        </Link>
      </nav>
      <div className="user-actions">
        <div className="profile-icon"></div>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
