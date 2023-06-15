import React from "react";
import "./styles/ChatMessage.css";

export const ChatMessage = () => {
  return (
    <div className="ChatMessage">
      {/* Chat header */}
      <div className="chat-header">
        <div class="img-text">
          <div class="user-img">
            <img
              class="-dp"
              src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="chat-user-info">
          <p className="chat-username">Lee Mabhena</p>
          <p className="user-online-status">Online</p>
        </div>
        <div className="nav-icons">
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </li>
        </div>
      </div>
      {/* Chat body */}
      <div class="chat-container">
        <div class="message-box my-message">
          <p>
            I've been waiting to see that show asap!
            <br />
            <span>07:43</span>
          </p>
        </div>
        <div class="message-box friend-message">
          <p>
            <span>Lee Mabhena</span>
            Ahh, I can't believe you do too!
            <br />
            <span>07:45</span>
          </p>
        </div>
        <div class="message-box friend-message">
          <p>
            The trailer looks good
            <br />
            <span>07:45</span>
          </p>
        </div>
        <div class="message-box friend-message">
          <p>
            I've been waiting to watch it!!
            <br />
            <span>07:45</span>
          </p>
        </div>
        <div class="message-box my-message">
          <p>
            😐😐😐
            <br />
            <span>07:46</span>
          </p>
        </div>
        <div class="message-box my-message">
          <p>
            Mee too! 😊
            <br />
            <span>07:46</span>
          </p>
        </div>
        <div class="message-box friend-message">
          <p>
            We should video chat to discuss, if you're up for it!
            <br />
            <span>07:48</span>
          </p>
        </div>
        <div class="message-box my-message">
          <p>
            <span>Njabz</span>
            Sure
            <br />
            <span>07:48</span>
          </p>
        </div>
        <div class="message-box my-message">
          <p>
            I'm free now!
            <br />
            <span>07:48</span>
          </p>
        </div>
        <div class="message-box friend-message">
          <p>
            Awesome! I'll start a video chat with you in a few.
            <br />
            <span>07:49</span>
          </p>
        </div>
        <div class="message-box my-message">
          <p>
            <span>Njabz</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quos
            quas dolore rem debitis quo. Fugit harum dolores deleniti, odio
            exercitationem, sed quas enim laborum nisi consequuntur minus neque
            facilis.
            <br />
            <span>07:49</span>
          </p>
        </div>
      </div>
      {/* Chat input */}
      <div className="chatbox-input">
        <i className="fa-sharp fa-solid fa-paperclip"></i>
        <input type="text" placeholder="Your message" />
        <i className="bx bxs-send"></i>
      </div>
    </div>
  );
};
