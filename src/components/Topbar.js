import React from "react";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">

      {/* LEFT: Title */}
      <div className="topbar-left">
        <h2 className="topbar-title">Request Survey</h2>
      </div>

      {/* CENTER: search + language grouped together */}
      <div className="topbar-center">
        <div className="center-inner">
          <div className="topbar-search">
            <input type="text" placeholder="Search..." />
          </div>

          <div className="topbar-lang">
            <span className="flag">🇺🇸</span>
            <span className="lang-text">Eng (US)</span>
            <span className="caret">▾</span>
          </div>
        </div>
      </div>

      {/* RIGHT: icons + profile */}
      <div className="topbar-right">
        <div className="topbar-bell" title="Notifications">🔔</div>

        <div className="topbar-profile">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="profile-img"
          />
          <div className="profile-info">
            <p className="profile-name">Mustiq</p>
            <span className="profile-role">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
