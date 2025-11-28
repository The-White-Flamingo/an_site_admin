import React, { useState } from "react";
import "../App.css";
import { surveyors } from "./surveyData";

function SurveySelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select surveyor +");

  return (
    <div className="selector-wrapper">
      <div
        className="selector-box"
        onClick={() => setOpen(!open)}
      >
        {selected}
      </div>

      {open && (
        <div className="selector-dropdown">
          {surveyors.map((item, i) => (
            <div
              key={i}
              className="selector-option"
              onClick={() => {
                setSelected(item.name);
                setOpen(false);
              }}
            >
              {item.name} — {item.role}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SurveySelector;
