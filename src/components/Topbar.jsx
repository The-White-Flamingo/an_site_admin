import React from "react";
import "../App.css";

function Topbar() {
  return (
    <div className="topbar">
      <input className="search-box" placeholder="Search..." />

      <div className="topbar-right">
        <div>Eng (US)</div>
        <div className="profile-circle"></div>
      </div>
    </div>
  );
}

export default Topbar;
