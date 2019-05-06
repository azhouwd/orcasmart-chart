import React from "react";
import "./InfoOverview.css";

const InfoOverView = ({ registeredUser, startDate }) => {
  return (
    <div className="overview-container">
      <h1>Start: {startDate}</h1>
      <h1>Register: {registeredUser}</h1>
      <h1>Online:</h1>
      <h1>Visited:</h1>
    </div>
  );
};

export default InfoOverView;
