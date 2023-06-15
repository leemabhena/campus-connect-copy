import React from "react";
import { Sidebar } from "./Sidebar";
import "./styles/MainApp.css";
import { AppDetails } from "./AppDetails";

export const MainApp = () => {
  return (
    <div className="MainApp">
      <Sidebar />
      <AppDetails />
    </div>
  );
};
