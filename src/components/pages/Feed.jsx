import React from "react";
import { FeedCard } from "../FeedCard";
import "../styles/Feed.css";
import Tooltip from "@mui/material/Tooltip";

export const Feed = () => {
  return (
    <div className="Feed">
      <h3 className="app-page-heading flex-heading">
        <span className="heading-con">Happening around campus</span>
        <span className="create-post">
          <Tooltip title="Create a new post">
            <i className="bx bx-edit"></i>
          </Tooltip>
        </span>
      </h3>
      <div className="feeds">
        <FeedCard />
        <FeedCard />
      </div>
    </div>
  );
};
