import React, { useState } from "react";
import SurveyCard from "./SurveyCard";
import SurveyFilters from "./SurveyFilters";
import { surveyors } from "./surveyData";

import "./SurveyList.css";
import "../App.css";

export default function SurveyList() {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className="
        flex flex-row gap-6 w-full
        md:flex-row       /* desktop = horizontal */
        flex-col          /* mobile/tablet = vertical */
      "
    >

      {/* ========== EVERYTHING BELOW IS UNCHANGED ========== */}

      <div className="survey-list-container">

        {/* ========== TOP WHITE BOX ========== */}
        <div className="top-card-box">

          {/* FIND A SURVEYOR SECTION */}
          <div className="find-header">
            <h2>Find a Surveyor</h2>
            <p>
              We've recommended surveyors based on experience and your location.
              Select one or choose your own professional from the alternate option section.
            </p>
          </div>

          {/* Recommended section */}
          <h3 className="recommended-text">Recommended</h3>

          <div className="survey-grid">
            {surveyors.map((item, index) => (
              <SurveyCard
                key={index}
                item={item}
                selected={selected === index}
                onSelect={() => setSelected(index)}
                onUnselect={() => setSelected(null)}
              />
            ))}
          </div>

          {/* Save & Continue button */}
          <div className="save-continue-wrapper">
            <button className="save-continue-btn">Save & Continue</button>
          </div>

        </div>
        {/* ========== END TOP WHITE BOX ========== */}


        {/* ========== GREY GAP ========== */}
        <div className="grey-gap">

          {selected !== null && (
            <div style={{ marginBottom: 12 }}>
              <button className="unselect-btn" onClick={() => setSelected(null)}>
                Unselect surveyor →
              </button>
            </div>
          )}

          <div className="filters-row">
            <SurveyFilters isBottom={true} />
          </div>

        </div>
        {/* ========== END GREY GAP ========== */}


        {/* ========== BOTTOM WHITE BOX ========== */}
        <div className="bottom-card-box">
          <div className="survey-grid">
            {surveyors.map((item, index) => (
              <SurveyCard
                key={index + "alt"}
                item={item}
                selected={selected === index}
                onSelect={() => setSelected(index)}
                onUnselect={() => setSelected(null)}
              />
            ))}
          </div>
        </div>
        {/* ========== END BOTTOM WHITE BOX ========== */}

      </div>

    </div>
  );
}
