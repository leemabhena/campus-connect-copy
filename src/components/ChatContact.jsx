import React from "react";

export const ChatContact = () => {
  return (
    <div className="ChatContact">
      <div className="chat-contact">
        <div className="chat-contact-img">
          <img src="/public/house.jpeg" alt="chat picture" />
        </div>
        <div className="chat-contact-center">
          <p className="chat-name">Office Chat</p>
          <div className="flex-c">
            <p className="chat-last-msg">
              Lorem ipsum dolor sit amet njbngjnnbljbngjbnglbnjlbjl
            </p>
            <span className="chat-msg-count">5</span>
          </div>
        </div>
        <div className="chat-contact-rigth">
          <p className="chat-time">4m</p>
          <p className="chat-pin">
            <i className="bx bxs-pin"></i>
          </p>
        </div>
      </div>
    </div>
  );
};
