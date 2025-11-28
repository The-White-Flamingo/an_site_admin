import React from "react";
import "./SurveyCard.css";

function SurveyCard({ item, selected, onSelect, onUnselect }) {
  return (
    <div
      className={`survey-card ${selected ? "selected-card" : ""}`}
      onClick={selected ? onUnselect : onSelect}
    >
      <div className="image-wrapper">
        <img src={item.image} alt={item.name} className="survey-image" />

        {selected && (
          <div className="checkmark-overlay">
            ✓
          </div>
        )}
      </div>

      <div className="survey-info">
        <div className="survey-name">{item.name}</div>
        <div className="survey-role">{item.role}</div>

        <div className="survey-meta">
          <div>Hourly Rate</div>
          <div className="rate">{item.rate}</div>
          <div>Location</div>
          <div className="location">{item.location}</div>
        </div>
      </div>

      <button className="profile-btn">
        View Profile
      </button>
    </div>
  );
}

export default SurveyCard;
