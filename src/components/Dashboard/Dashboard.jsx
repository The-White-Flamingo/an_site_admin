import React from "react";
import CardsRow from "./Dashboard/CardsRow";
import Surveys from "./Surveys";

export default function Dashboard() {
  return (
    <main className="main">
      {/* Top header inside main */}
      <div className="main-top">
        <h1 className="page-title">Dashboard</h1>
        <div className="top-controls">
          <div className="search">
            <input type="text" placeholder="Search here..." />
          </div>
          <div className="lang">Eng (US)</div>
          <div className="profile">
            <img src="https://via.placeholder.com/36" alt="avatar" />
            <span className="profile-name">Munifa</span>
          </div>
        </div>
      </div>

      {/* Cards row */}
      <CardsRow />

      {/* Surveys section */}
      <Surveys />
    </main>
  );
}
