import React, { useState } from "react";
import { surveyors } from "./surveyData";
import "./SurveySelector.css";

function SurveySelector() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    console.log("Selected:", id);
    setSelectedId(id);
    setOpen(false);
  };

  const selectedSurveyor =
    selectedId != null ? surveyors.find((s) => s.id === selectedId) : null;

  return (
    <div className="selector-wrapper">
      <div className="selector-box" onClick={() => setOpen((p) => !p)}>
        {selectedSurveyor ? selectedSurveyor.name : "Select surveyor +"}
      </div>

      {open && (
        <div className="selector-dropdown">
          {surveyors.map((item) => (
            <div
              key={item.id}
              className={`selector-card ${
                selectedId === item.id ? "selected" : ""
              }`}
              onClick={() => handleSelect(item.id)}
            >
              <div className="check-badge">✔</div>

              <div className="card-content">
                <div className="card-name">{item.name}</div>
                <div className="card-role">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SurveySelector;
