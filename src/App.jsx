import React from "react";
import Topbar from "./components/Dashboard/Topbar";
import Sidebar from "./components/Dashboard/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import CardsRow from "./components/Dashboard/CardsRow"
import AdminPanel from "./components/adminpanel/";
import "./styles.css";

export default function App() {
  return (
    <>
      <Topbar />
      <div className="app">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}
