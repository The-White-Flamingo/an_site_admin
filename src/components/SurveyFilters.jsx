import React from "react";
import "./SurveyFilters.css";

export default function SurveyFilters() {
  return (
    <div className="filters-container">

      <h2 className="alt-option-title">Alternate Option</h2>

      <div className="filters-row">

        {/* Select Survey Type */}
        <select className="filter-select">
          <option>Select surveyor type</option>
          <option>Boundary Surveyor</option>
          <option>Land Surveyor</option>
          <option>Topographical Surveyor</option>
        </select>

        {/* Search button */}
        <button className="search-btn">Search now</button>

        {/* Advanced Search */}
        <button className="advanced-btn">Advanced Search</button>

      </div>

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
