import React from "react";
import { Topbar } from "./Topbar";
import "./styles/AppDetails.css";
import { EventDetails } from "./pages/EventDetails";
import { Feed } from "./pages/Feed";
import { Questions } from "./Questions";
import { ProfileCard } from "./ProfileCard";
import { Routes, Route } from "react-router-dom";
import { Houses } from "./pages/Houses";
import { AllQuestions } from "./AllQuestions";
import { Profile } from "./Profile";
import { Events } from "./pages/Events";
import { HouseDetails } from "./HouseDetails";
import { QuestionDetails } from "./QuestionDetails";

export const AppDetails = () => {
  return (
    <div className="AppDetails">
      <Topbar />
      <div className="app-details-body">
        <Routes>
          <Route path="" element={<Feed />} />
          <Route path="off-campus-housing" element={<Houses />} />
          <Route path="off-campus-housing/1" element={<HouseDetails />} />
          <Route path="questions/1" element={<QuestionDetails />} />
          <Route path="event-details" element={<EventDetails />} />
          <Route path="questions" element={<AllQuestions />} />
          <Route path="profile" element={<Profile />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
};
