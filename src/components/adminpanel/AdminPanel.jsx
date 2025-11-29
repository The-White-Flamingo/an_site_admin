import React from "react";
import "./style.css";

export default function AdminPanel() {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1>Admin Panel</h1>
        <nav>
          <ul>
            <li className="active"><a href="#">Dashboard</a></li>
            <li><a href="#">Manage Requests</a></li>
            <li><a href="#">Surveyors</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Disputes</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="dropdown">
            <button className="dropbtn">Admin Dashboard ▼</button>
          </div>

          <div className="header-actions">
            <button>↺</button>
            <button>↻</button>
            <button>⬆</button>
            <button className="stop-btn">● Stop</button>
            <button className="profile-btn">C</button>
          </div>
        </header>

        {/* Stats */}
        <section className="stats">
          <div className="stat-card">
            Total Surveys: <strong>120</strong>
          </div>
          <div className="stat-card">
            Pending Assignments: <strong>8</strong>
          </div>
          <div className="stat-card">
            Open Disputes: <strong>2</strong>
          </div>
          <div className="stat-card">
            Revenue: <strong>$15,400</strong>
          </div>
        </section>

        <div className="content-grid">
          {/* Ongoing & Expiring Requests */}
          <section className="table-section">
            <h2>Ongoing & Expiring Requests</h2>
            <table className="requests-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Client</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Expiry</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>101</td>
                  <td>John</td>
                  <td>Accra</td>
                  <td className="status pending">Pending</td>
                  <td>23h</td>
                  <td><button className="btn-assign">Assign</button></td>
                </tr>

                <tr>
                  <td>102</td>
                  <td>Mary</td>
                  <td>Kumasi</td>
                  <td className="status in-progress">In Progress</td>
                  <td>-</td>
                  <td><button className="btn-view">View</button></td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Dispute Summary */}
          <section className="table-section">
            <h2>Dispute Summary</h2>
            <table className="disputes-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Client</th>
                  <th>Surveyor</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>D1</td>
                  <td>John</td>
                  <td>Surv A</td>
                  <td className="status open">Open</td>
                  <td><button className="btn-view">View</button></td>
                </tr>

                <tr>
                  <td>D2</td>
                  <td>Kwame</td>
                  <td>Surv B</td>
                  <td className="status resolved">Resolved</td>
                  <td><button className="btn-view">View</button></td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-btn">Assign Surveyors</button>
            <button className="action-btn">Review Applications</button>
            <button className="action-btn">Approve Disputes</button>
          </div>
        </section>
      </main>
    </div>
  );
}
