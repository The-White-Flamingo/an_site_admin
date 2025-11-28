import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [active, setActive] = useState("Account");

  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="brand">
        <img
          alt="logo"
          className="brand-logo"
        />
        <span className="brand-text">Surveyors'</span>
      </div>

      {/* MENU */}
      <nav className="menu">

        <MenuItem
          label="Dashboard"
          icon={dashboardIcon}
          active={active === "Dashboard"}
          onClick={() => setActive("Dashboard")}
        />

        <MenuItem
          label="My Surveys"
          icon={surveyIcon}
          active={active === "My Surveys"}
          onClick={() => setActive("My Surveys")}
        />

        <MenuItem
          label="Find Surveyors"
          icon={findIcon}
          active={active === "Find Surveyors"}
          onClick={() => setActive("Find Surveyors")}
        />

        <MenuItem
          label="Payments"
          icon={paymentIcon}
          active={active === "Payments"}
          onClick={() => setActive("Payments")}
        />

        <MenuItem
          label="Messages"
          icon={messageIcon}
          active={active === "Messages"}
          onClick={() => setActive("Messages")}
        />

        <MenuItem
          label="Help"
          icon={helpIcon}
          active={active === "Help"}
          onClick={() => setActive("Help")}
        />

        {/* ACCOUNT - DEFAULT ACTIVE */}
        <MenuItem
          label="Account"
          icon={settingsIcon}
          active={active === "Account"}
          onClick={() => setActive("Account")}
        />

        <MenuItem
          label="Disputes"
          icon={disputeIcon}
          active={active === "Disputes"}
          onClick={() => setActive("Disputes")}
        />

        <MenuItem
          label="Sign Out"
          icon={logoutIcon}
          active={active === "Sign Out"}
          onClick={() => setActive("Sign Out")}
        />

      </nav>

      {/* PRO CARD */}
      <div className="pro-card">
        <h3>Surveys Pro</h3>
        <p>Get access to all features on talimboe</p>
        <button className="pro-btn">Get Pro</button>
      </div>

    </aside>
  );
}

/* Menu item component */
function MenuItem({ label, icon, active, onClick }) {
  return (
    <div
      className={`menu-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="icon" dangerouslySetInnerHTML={{ __html: icon }} />
      <span className="text">{label}</span>
    </div>
  );
}

/* SVG ICONS */
const dashboardIcon = `<svg width="18" height="18" fill="none" stroke="#666" stroke-width="2"><rect x="1" y="1" width="7" height="7"/><rect x="10" y="1" width="7" height="4"/><rect x="10" y="6" width="7" height="12"/><rect x="1" y="10" width="7" height="8"/></svg>`;
const surveyIcon = `<svg width="18" height="18" fill="none" stroke="#666" stroke-width="2"><path d="M3 3h12v12H3z"/><path d="M3 8h12"/></svg>`;
const findIcon = `<svg width="18" height="18" fill="none" stroke="#666" stroke-width="2"><circle cx="8" cy="8" r="5"/><line x1="12" y1="12" x2="16" y2="16"/></svg>`;
const paymentIcon = `<svg width="18" height="18" fill="none" stroke="#666" stroke-width="2"><rect x="2" y="4" width="14" height="10" rx="2"/><path d="M2 8h14"/></svg>`;
const messageIcon = `<svg width="18" height="18" fill="none" stroke="#666" stroke-width="2"><path d="M3 3h12v10H6l-3 3z"/></svg>`;
const helpIcon = `<svg width="18" height="18" fill="none" stroke="#666" stroke-width="2"><circle cx="9" cy="9" r="7"/><path d="M9 6v2"/><circle cx="9" cy="12" r="1"/></svg>`;
const settingsIcon = `<svg width="18" height="18" fill="none" stroke="#666" stroke-width="2"><circle cx="9" cy="9" r="3"/><path d="M9 1v2m0 12v2m8-8h-2M3 9H1m13-5l-1.4 1.4M5.4 12.6L4 14m11-2l-1.4-1.4M5.4 5.4L4 4"/></svg>`;
const disputeIcon = `<svg width="18" height="18" fill="none" stroke="#666" stroke-width="2"><path d="M2 4h14l-1 9H3L2 4z"/><path d="M8 7v3"/></svg>`;
const logoutIcon = `<svg width="18" height="18" fill="none" stroke="#666" stroke-width="2"><path d="M6 3H3v12h3"/><path d="M10 12l3-3-3-3"/><path d="M13 9H6"/></svg>`;
