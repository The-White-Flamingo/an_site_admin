import React, { useState } from "react";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger icon (mobile only) */}
      <div className="hamburger-btn" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      {/* Sidebar + overlay */}
      <div
        className={`sidebar-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <button onClick={() => setMenuOpen(false)}>Close ✕</button>

        {/* your sidebar content */}
        <ul>
          <li>Dashboard</li>
          <li>Projects</li>
          <li>Settings</li>
          ...
        </ul>
      </div>

      {/* Page content */}
      <div className="page-content">
        {children}
      </div>
    </>
  );
}
