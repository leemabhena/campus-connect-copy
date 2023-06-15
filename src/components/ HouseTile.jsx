import React from "react";
import "./styles/HouseTile.css";

export const HouseTile = () => {
  return (
    <div className="HouseTile">
      <div className="tile-img">
        <a href="/app/off-campus-housing/1">
          <img src="/public/house.jpeg" alt="renting home" />
        </a>
      </div>
      <div className="house-details">
        <h3 className="house-title">
          Ottawa, Canada{" "}
          <span className="h-rating">
            <i className="fa-solid fa-star"></i> 4.98
          </span>
        </h3>
        <p className="house-desc">Stay with Lee Mabhena. A florist.</p>
        <p className="house-price">
          <span className="h-amount">$50</span> semester
        </p>
      </div>
    </div>
  );
};
