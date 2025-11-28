import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ProjectSteps from "./components/ProjectSteps";
import SurveyList from "./components/SurveyList";
import MainLayout from "./layouts/MainLayout";

import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      
      {/* LEFT SIDEBAR */}
      <Sidebar />

      <div className="main-content">
        
        {/* TOP BAR */}
        <Topbar />

        {/* MAIN PAGE CONTENT */}
        <div className="content-layout">
          <ProjectSteps />
          <SurveyList />
        </div>
      </div>
    </div>
  );
}
