import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__brand"><b>NYC</b> EDIT</span>
      <button className="navbar__search" aria-label="Search">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
