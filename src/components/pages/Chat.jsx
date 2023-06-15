import React from "react";
import { ChatContacts } from "../ChatContacts";
import { ChatMessage } from "../ChatMessage";
import { ChatDetails } from "../ChatDetails";
import "../styles/Chat.css";

export const Chat = () => {
  return (
    <div className="Chat">
      <ChatContacts />
      <ChatMessage />
      {/* <ChatDetails /> */}
    </div>
  );
};
