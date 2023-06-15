import React from "react";
import "./styles/EventsTile.css";

export const EventsTile = () => {
  return (
    <div className="EventsTile">
      <div className="event-top">
        <div className="event-logo">
          <img src="/public/house.jpeg" alt="event logo" />
        </div>
        <p className="event-name">Fire Crackers</p>
        <div className="event-save">
          <i className="bx bx-bookmark"></i>
        </div>
      </div>
      <div className="event-title">
        <a href="#">Leader of tommorrow tile</a>
      </div>
      <div className="event-details">
        <p>
          <span className="event-loc">Virtual</span> &nbsp; . &nbsp;
          <span className="event-date">Fri Jun 16 </span> &nbsp; . &nbsp;
          <span className="event-time">12:00am</span>
        </p>
      </div>
      <div className="event-rule"></div>
      <div className="event-bottom">
        <div className="event-overlap-avatars">
          <div className="avatar-1">
            <img src="/public/nust.jpeg" alt="students" />
          </div>
          <div className="avatar-2">
            <img src="/public/photo-id.jpg" alt="students" />
          </div>
          <div className="avatar-3">
            <img src="/public/house.jpeg" alt="students" />
          </div>
        </div>
        <p>377 students going</p>
      </div>
    </div>
  );
};
