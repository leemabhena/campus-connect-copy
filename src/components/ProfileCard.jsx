import React from "react";

export const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="dp-rounded-card">
        <img src="/public/photo-id.jpg" alt="profile picture" />
      </div>
      <p className="profile-card-name">Lee Mabhena</p>
      <p className="profile-card-var">Williams College</p>
      <p className="profile-card-major">Computer Science & Statistics</p>
      <p className="profile-card-level">Junior</p>
    </div>
  );
};
