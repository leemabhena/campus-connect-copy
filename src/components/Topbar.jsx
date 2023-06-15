import React from "react";
import "./styles/Topbar.css";

export const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="logged-user-details">
        <p className="logged-name">
          <span className="hello">Hello</span> Lee Mabhena | Williams College |
          Junior
        </p>
      </div>
      <ul className="navtop-links">
        <li className="badge-container">
          <div className="--badge">1</div>
          <a href="#">
            <i className="bx bxs-bell-ring"></i>
          </a>
        </li>
        <li>
          <a href="/app/profile">
            <i className="bx bx-cog"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
