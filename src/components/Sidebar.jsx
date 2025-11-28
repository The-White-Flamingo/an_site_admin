import React from "react";
import "./SurveyorList.css";

export default function SurveyorList() {
  const surveyors = [
    {
      id: 1,
      name: "Christell Tawiah",
      rating: 5.0,
      reviews: 4,
      role: "Boundary Surveyor",
      rate: "$60/hr",
      location: "Greater Accra",
      image: "/images/surveyor1.jpg"
    },
    {
      id: 2,
      name: "Christell Tawiah",
      rating: 5.0,
      reviews: 4,
      role: "Boundary Surveyor",
      rate: "$60/hr",
      location: "Greater Accra",
      image: "/images/surveyor2.jpg"
    }
  ];

  return (
    <div className="surveyor-container">
      <h2 className="title">Recommended</h2>

      <div className="cards">
        {surveyors.map((sv) => (
          <div key={sv.id} className="card">
            <img src={sv.image} alt="surveyor" className="card-img" />

            <div className="card-body">
              <h3 className="name">{sv.name}</h3>

              <div className="rating">
                ⭐ {sv.rating} <span>({sv.reviews} reviews)</span>
              </div>

              <p className="role">{sv.role}</p>

              <div className="details">
                <p><strong>Hourly Rate:</strong> {sv.rate}</p>
                <p><strong>Location:</strong> {sv.location}</p>
              </div>

              <button className="view-btn">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
