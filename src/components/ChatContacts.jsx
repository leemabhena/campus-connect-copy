import React from "react";
import "./styles/ChatContacts.css";
import { ChatContact } from "./ChatContact";

export const ChatContacts = () => {
  return (
    <div className="ChatContacts">
      <div className="contacts-search">
        <i className="bx bx-search-alt-2"></i>
        <input type="search" placeholder="Search..." />
      </div>
      <ChatContact />
      <ChatContact />
      <ChatContact />
      <ChatContact />
      <ChatContact />
      <ChatContact />
      <ChatContact />
      <ChatContact />
      <ChatContact />
      <ChatContact />
      <ChatContact />
      <ChatContact />
    </div>
  );
};
