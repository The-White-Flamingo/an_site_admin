import React from "react";
import "./SurveyFilters.css";

export default function SurveyFilters() {
  return (
    <div className="filters-container">

      <h2 className="alt-option-title">Alternate Option</h2>

      {/* SINGLE BAR — the correct one */}
      <div className="search-bar-container">

        {/* LEFT — DROPDOWN */}
        <div className="survey-dropdown">
          <span>Select Survey</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        {/* RIGHT — BUTTONS */}
        <div className="search-buttons">
          <button className="search-now-btn">Search Now</button>
          <button className="advanced-btn">Advanced Search</button>
        </div>
      </div>

      {/* RESULT HEADER */}
      <div className="result-header">
        <p>15 search result(s)</p>

        <div className="sort-container">
          <span>Sort by :</span>
          <select className="sort-select">
            <option>Rating</option>
            <option>Price</option>
            <option>Name</option>
          </select>
        </div>
      </div>

    </div>
  );
}
