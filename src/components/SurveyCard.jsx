import React from "react";
import { Star, MapPin, DollarSign, Heart } from "lucide-react";
import "./SurveyCard.css";

function SurveyCard({ item, selected, onSelect, onUnselect }) {
  return (
    <div
      className={`survey-card ${selected ? "selected-card" : ""}`}
      onClick={selected ? onUnselect : onSelect}
    >
      {/* IMAGE */}
      <div className="image-wrapper">
        <img src={item.image} alt={item.name} className="survey-image" />

        {selected && <div className="checkmark-overlay">✓</div>}
      </div>

      {/* TEXT CONTENT */}
      <div className="survey-info">

        <div className="name-rating-row">
  <div className="name-row">
    <div className="survey-name">{item.name}</div>
    <span className="online-dot"></span>
  </div>

  <div className="rating-inline">
    <Star size={16} fill="#FFB800" stroke="#FFB800" />
    <span className="rating-text">{item.rating}</span>
    <span className="review-text">({item.reviews} reviews)</span>
  </div>
</div>

<div className="survey-role">{item.role}</div>


        {/* DETAILS GRID */}
        <div className="details-grid">
          {/* Left column labels */}
          <div className="details-left">
            <div className="detail-item">
              <DollarSign size={16} className="detail-icon" />
              <span>Hourly Rate</span>
            </div>

            <div className="detail-item">
              <MapPin size={16} className="detail-icon" />
              <span>Location</span>
            </div>
          </div>

          {/* Right column values */}
          <div className="details-right">
            <span className="rate-text">${item.rate}/hr</span>
            <span className="location-text">{item.location}</span>
          </div>
        </div>
      </div>

      {/* FOOTER BUTTON + HEART */}
      <div className="footer-row">
        <button className="profile-btn">View Profile</button>

        <button className="heart-btn">
          <Heart size={18} />
        </button>
      </div>
    </div>
  );
}

export default SurveyCard;
