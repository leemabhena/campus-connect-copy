import React from "react";

export const HouseDetailsReview = () => {
  return (
    <div className="HouseDetailsReview">
      <div className="all-reviews">
        <div className="reviewer-info">
          <div className="circular-sm-img">
            <img src="/public/house.jpeg" alt="reviewer picture" />
          </div>
          <div className="reviewer-details">
            <p className="name">Lee Mabhena</p>
            <p className="when">09 May 2020</p>
          </div>
        </div>
        <p className="review-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
          neque? Reprehenderit eum qui, accusantium quis iste quae pariatur,
          doloremque cupiditate, obcaecati id totam quo maxime labore! Sunt
          distinctio iusto cum.
        </p>
      </div>
    </div>
  );
};
