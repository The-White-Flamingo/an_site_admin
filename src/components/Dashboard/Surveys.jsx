import React from "react";

export default function Surveys() {
  return (
    <section className="surveys">
      <h2 className="section-title">My Surveys</h2>

      <div className="survey-card">
        <div className="survey-left">
          <span className="badge">Ongoing</span>
          <h3 className="survey-title">Site Survey - Accra</h3>
          <p className="survey-meta">Expected Completion — in 20 days</p>

          <div className="hired">
            <img src="https://via.placeholder.com/40" alt="" />
            <div>
              <div className="hired-name">Hamitz Sharma</div>
              <a href="#" className="view-profile">View profile</a>
            </div>
          </div>
        </div>

        <div className="survey-right">
          <div className="project-cost">Project Cost<br/><span className="cost-amount">$6000</span></div>
          <button className="btn btn-primary">View Project →</button>
        </div>
      </div>
    </section>
  );
}
