import React from "react";
import "./ProjectSteps.css";

export default function ProjectSteps() {
  return (
    <div className="steps-box">

      {/* STEP 1 */}
      <div className="step">
        <div className="dot green"></div>
        <div>
          <h4>About project</h4>
          <p>Add details to your project that explain it well to all surveyors</p>
        </div>
      </div>

      {/* CONNECTOR 1 */}
      <div className="connector-line"></div>

      {/* STEP 2 */}
      <div className="step">
        <div className="dot green"></div>
        <div>
          <h4>Surveyor selection</h4>
          <p>Select which surveyor you want to work on this project</p>
        </div>
      </div>

      {/* CONNECTOR 2 */}
      <div className="connector-line second"></div>

      {/* STEP 3 */}
      <div className="step">
        <div className="dot grey"></div>
        <div>
          <h4>Review and work</h4>
          <p>Once your documents are verified work will begin</p>
        </div>
      </div>

    </div>
  );
}
