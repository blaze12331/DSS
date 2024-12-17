import React from "react";
import "./AdoptionList.css";
import Header1 from "./Header1";

const AdoptionList = () => {
  // Placeholder applications data (simulate future DB structure)
  const applications = Array(9).fill({
    id: 1, // Future use: Unique ID from database
    petName: "Max", // Pet Name
    age: "2 years", // Pet Age
    breed: "Golden Retriever", // Pet Breed
    description: "Friendly and energetic golden retriever", // Description
    applicantName: "John Doe", // Applicant's Name
    email: "johndoe@email.com", // Applicant's Email
    imageUrl:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783", // Placeholder image
  });

  return (
      <div className="al-adoption-list-container">
      <Header1 />
        <h1 className="al-title">Adoption Applicant List</h1>

        {/* Summary Card */}
        <div className="al-summary-card">
          <div className="al-adoption-count">{applications.length}</div>
          <p className="al-adoption-text">Number of Adoption Requests</p>
        </div>

        {/* Applications Grid */}
        <div className="al-applications-grid">
          {applications.map((app, index) => (
            <div key={index} className="al-application-card">
              {/* Left Section - Image */}
              <div className="al-card-left">
                <img
                  src={app.imageUrl}
                  alt={`Pet ${app.petName}`}
                  className="al-pet-image"
                />
              </div>

              {/* Right Section - Details */}
              <div className="al-card-right">
                <h2 className="al-pet-name">{app.petName}</h2>
                <p className="al-pet-details">
                  Age: <span>{app.age}</span> | Breed: <span>{app.breed}</span>
                </p>
                <p className="al-description">
                  Description: <span>{app.description}</span>
                </p>
                <p className="al-applicant-info">
                  Applicant: <strong>{app.applicantName}</strong>
                  <br />
                  Email: <span className="al-email">{app.email}</span>
                </p>

                {/* Action Buttons */}
                <div className="al-action-buttons">
                  <button className="al-decline-btn">Decline</button>
                  <button className="al-approve-btn">Approve</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default AdoptionList;
