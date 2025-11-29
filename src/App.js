import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ProjectSteps from "./components/ProjectSteps";
import SurveyList from "./components/SurveyList";

import "./App.css";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <MainLayout>

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

    </MainLayout>
  );
}
