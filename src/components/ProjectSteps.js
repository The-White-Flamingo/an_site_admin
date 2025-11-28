import React from "react";
import "./ProjectSteps.css";

export default function ProjectSteps() {
  return (
    <div className="steps-box">

      <div className="step">
        <div className="dot"></div>
        <div>
          <h4>About project</h4>
          <p>Add details to your project that explain it well to all surveyors</p>
        </div>
      </div>

      <div className="line"></div>

      <div className="step">
        <div className="dot"></div>
        <div>
          <h4>Review and work</h4>
          <p>Once your documents are verified work will begin</p>
        </div>
      </div>

    </div>
  );
}
