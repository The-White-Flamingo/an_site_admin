import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import MySurveys from "./pages/MySurveys";
import FindSurveyors from "./pages/FindSurveyors";
import Payments from "./pages/Payments";
import Messages from "./pages/Messages";
import Help from "./pages/Help";
import Account from "./pages/Account";
import Disputes from "./pages/Disputes";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard": return <Dashboard />;
      case "MySurveys": return <MySurveys />;
      case "FindSurveyors": return <FindSurveyors />;
      case "Payments": return <Payments />;
      case "Messages": return <Messages />;
      case "Help": return <Help />;
      case "Account": return <Account />;
      case "Disputes": return <Disputes />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">
        <Topbar />
        <div className="content-layout">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}
