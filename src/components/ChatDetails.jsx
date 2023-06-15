import React from "react";
import "./styles/ChatDetails.css";

export const ChatDetails = () => {
  return (
    <div className="ChatDetails">
      <div className="chat-details-top">
        <h4 className="chat-d-header">Chat Details</h4>
        <div className="chat-details-close">
          <i className="bx bx-x"></i>
        </div>
      </div>

      {/* photos and videos */}

      <div className="photos-videos">
        <div className="chat-detail-topic">
          <p className="ch-d-main-topic">
            Photos & Videos <span className="video-count">100</span>
          </p>
          <p className="see-all">See all</p>
        </div>
        <div className="chat-details-img-card">
          <img src="/public/house.jpeg" alt="chat media" />
        </div>
        <div className="chat-details-img-card">
          <img src="/public/house.jpeg" alt="chat media" />
        </div>
      </div>

      {/* shared files */}

      <div className="shared-files">
        <div className="chat-detail-topic">
          <p className="ch-d-main-topic">
            Shared Files <span className="video-count">57</span>
          </p>
          <p className="see-all">See all</p>
        </div>

        <div className="chat-files">
          <div className="file-img">
            <i className="bx bxs-file"></i>
          </div>
          <div className="file-details">
            <p className="file-name">
              Introduction to Agriculture for freshman
            </p>
            <p className="date-file-shared">Tue 5 Jun 2023</p>
          </div>
        </div>

        <div className="chat-files">
          <div className="file-img">
            <i className="bx bxs-file"></i>
          </div>
          <div className="file-details">
            <p className="file-name">
              Introduction to Agriculture for freshman
            </p>
            <p className="date-file-shared">Tue 5 Jun 2023</p>
          </div>
        </div>
      </div>

      {/* Shared Links */}
      <div className="shared-links">
        <div className="chat-detail-topic">
          <p className="ch-d-main-topic">
            Shared Links <span className="video-count">20</span>
          </p>
          <p className="see-all">See all</p>
        </div>
      </div>
      <div className="chat-files">
        <div className="file-img">
          <i className="bx bxs-file"></i>
        </div>
        <div className="file-details">
          <p className="file-name">Introduction to Agriculture for freshman</p>
          <p className="date-file-shared">Tue 5 Jun 2023</p>
        </div>
      </div>

      <div className="chat-files">
        <div className="file-img">
          <i className="bx bxs-file"></i>
        </div>
        <div className="file-details">
          <p className="file-name">Introduction to Agriculture for freshman</p>
          <p className="date-file-shared">Tue 5 Jun 2023</p>
        </div>
      </div>
    </div>
  );
};
