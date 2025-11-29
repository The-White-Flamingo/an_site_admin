import React from "react";

export default function Topbar() {
  const toggleSidebar = () => {
    document.getElementById("sidebar")?.classList.toggle("open");
  };

  return (
    <header className="topbar">
      <button className="hamburger" onClick={toggleSidebar} aria-label="Open menu">☰</button>
      <div className="brand">Surveyor</div>
      <div className="mobile-actions"></div>
    </header>
  );
}
