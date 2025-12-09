import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <div className="logo-mark">S</div>
          <div className="logo-text">Admin Panel</div>
        </div>

        <nav className="nav">
          {["Dashboard","My Surveys","Payments","Messages","Help","Account","Disputes","Sign Out"].map((item, i) => (
            <a key={i} className={`nav-item ${i===0?'active':''}`}><span className="dot"></span> {item}</a>
          ))}
        </nav>
      </div>

      <div className="sidebar-cta">
        <div className="promo">
          <div className="promo-mark">Surveys Pro</div>
          <p className="promo-text">Unlock advanced features</p>
          <button className="btn btn-primary small">Get Pro</button>
        </div>
      </div>
    </aside>
  );
}
