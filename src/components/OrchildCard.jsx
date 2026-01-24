import React from "react";

const OrchildCard = ({ handleOnClick, orchid }) => {
  return (
    <div className="card">
      <img src={orchid.image} alt="" />
      <h1>{orchid.name}</h1>
      <p>
        <button
          onClick={() => {
            handleOnClick(orchid);
          }}
        >
          View Details
        </button>
      </p>
    </div>
  );
};

export default OrchildCard;
