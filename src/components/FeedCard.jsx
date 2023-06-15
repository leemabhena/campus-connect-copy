import React from "react";
import "./styles/FeedCard.css";

export const FeedCard = () => {
  return (
    <div className="FeedCard">
      <div class="card post">
        <div class="post-header">
          <div class="post-author-info">
            <img src="/public/house.jpeg" />
            <div>
              <div>
                <span class="author-name">Bloomberg</span>
              </div>
              <div class="details">
                <span>4h</span>
              </div>
            </div>
          </div>
          <i class="post-menu-icon"></i>
        </div>
        <p class="post-body">
          As of Monday, only about 56% of people eligible to get the shot have
          stepped forward in a nation with the world’s second-worst Covid-19
          outbreak.
        </p>
        <a class="post-image" href="#">
          <div className="post-img">
            <img src="/public/map.png" />
          </div>
          <div class="excerpt">
            <div class="post-info-icon-wrap">
              <i className="bx bx-info-circle"></i>
            </div>
            <label>bloomberg.com</label>
            <h3>
              India’s Unusual Vaccine Problem: Plenty of Shots, But Few Takers
            </h3>
            <span>
              Most of the world is struggling to secure enough vaccines to
              inoculate their populations. India has the opposite problem:
              Plenty of shots, but a shortage of people willing to take them.
            </span>
          </div>
        </a>
        <div class="post-reactions">
          <div class="reactions">
            <div class="emojis">
              <i className="bx bxs-heart red-heart"></i>
            </div>
            <span>366</span>
          </div>
          <div class="comment-share">
            {/* <div>
              <span>121</span>
              <span> Comments</span>
            </div> */}
            <div class="shares">
              <span>48</span>
              <span> Shares</span>
            </div>
          </div>
        </div>
        <div className="grey-rule"></div>
        <div class="post-actions">
          <div class="actions">
            <div class="action">
              <i className="bx bx-like"></i>
              <span>Like</span>
            </div>
            {/* <div class="action">
              <i class="comment-icon"></i>
              <span>Comment</span>
            </div> */}
            <div class="action">
              <i className="bx bx-share"></i>
              <span>Share</span>
            </div>
          </div>
          <div class="interact-as">
            <img src="/public/photo-id.jpg" />
            <i class="dropdown-icon-small"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
