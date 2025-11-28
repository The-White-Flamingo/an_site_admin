import React from "react";
import "../App.css";

function InfoPanel() {
  return (
    <div className="info-panel">
      <div className="info-title">About Project</div>
      <p>Add details to your project that explain it well to surveyors.</p>

      <div className="info-item">
        <b>Review and work</b>
        <p>Once your documents are verified work begins.</p>
      </div>
    </div>
  );
}

export default InfoPanel;
