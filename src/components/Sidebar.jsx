import React from "react";
import "./styles/Sidebar.css";
import { Topbar } from "./Topbar";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="sidebar open">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus icon"></i>
          <div className="logo_name">Campus Connect</div>
        </div>
        <ul className="nav-list">
          <li>
            <a href="/app">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Home</span>
            </a>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <a href="/app/off-campus-housing">
              <i className="bx bx-home"></i>
              <span className="links_name">Off-campus housing</span>
            </a>
            <span className="tooltip">Off-campus housing</span>
          </li>
          <li>
            <a href="/chat">
              <i className="bx bx-chat"></i>
              <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-group"></i>
              <span className="links_name">Groups</span>
            </a>
            <span className="tooltip">Groups</span>
          </li>
          <li>
            <a href="/app/questions">
              <i className="bx bx-question-mark"></i>
              <span className="links_name">Ask a question</span>
            </a>
            <span className="tooltip">Ask a question</span>
          </li>
          <li>
            <a href="/app/events">
              <i className="bx bx-calendar-event"></i>
              <span className="links_name">Events</span>
            </a>
            <span className="tooltip">Events</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-football"></i>
              <span className="links_name">Clubs</span>
            </a>
            <span className="tooltip">Clubs</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-chalkboard"></i>
              <span className="links_name">Factrack</span>
            </a>
            <span className="tooltip">Factrack</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-task"></i>
              <span className="links_name">Community</span>
            </a>
            <span className="tooltip">Community</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <img src="/public/house.jpeg" alt="profileImg" />
              <div className="name_job">
                <div className="name">Lee Mabhena</div>
                <div className="job">Williams | Sophomore</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
