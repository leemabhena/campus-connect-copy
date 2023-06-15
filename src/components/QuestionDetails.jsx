import React from "react";

export const QuestionDetails = () => {
  return (
    <div className="QuestionDetails">
      <h4 className="qn-details-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        commodi quas voluptate fugit.
      </h4>
      <p className="qn-details-stats">
        <span className="question-list-who">
          <img src="/public/photo-id.jpg" alt="profile picture" />
          <span className="qn-list-name">Lee | </span>
        </span>
        <span className="qn-detail-when">Asked today | </span>
        <span className="qn-detail-views"> Viewed 2 times</span>
      </p>

      <div className="qn-detail-info">
        <div className="qn-detail-votes">
          <div className="qn-detail-icon-circle">
            <i class="bx bx-caret-up"></i>
          </div>
          <div className="qn-detail-vote-count">20</div>
          <div className="qn-detail-icon-circle">
            <i class="bx bx-caret-down"></i>
          </div>
        </div>
        <div className="qn-detail-desc">
          <p className="qn-detail-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            at delectus officiis reprehenderit, explicabo minima omnis
            asperiores praesentium alias ratione tenetur repellat, libero esse
            optio earum perspiciatis quo recusandae amet!
          </p>
          <div className="question-list-tags">
            <div className="question-list-tag tag-dk4">Economics</div>
            <div className="question-list-tag tag-dk4">Calculus</div>
          </div>
        </div>
      </div>

      <div className="qn-detail-answers">
        <p className="qn-detail-ans-count">10 Answers</p>
        <button className="answer-qn">Answer the question</button>
        <div className="qn-details-ans-sort">
          <label for="answers">Sort by: </label>
          <select name="answers" id="answers" className="qn-detail-select">
            <option value="votes">Highest votes</option>
            <option value="date">Date created</option>
          </select>
        </div>
      </div>

      <div className="qn-detail-info">
        <div className="qn-detail-votes">
          <div className="qn-detail-icon-circle">
            <i class="bx bx-caret-up"></i>
          </div>
          <div className="qn-detail-vote-count">20</div>
          <div className="qn-detail-icon-circle">
            <i class="bx bx-caret-down"></i>
          </div>
        </div>
        <div className="qn-detail-desc">
          <p className="qn-detail-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            at delectus officiis reprehenderit, explicabo minima omnis
            asperiores praesentium alias ratione tenetur repellat, libero esse
            optio earum perspiciatis quo recusandae amet!
          </p>
          <div className="qn-detail-answered-by">
            <div className="answered-by-dp">
              <img src="/public/house.jpeg" alt="profile picture" />
            </div>
            <span className="answered-name">Lee Mabhena | </span>
            <span className="answered-when"> Answered 5 mins ago</span>
          </div>
        </div>
      </div>

      <div className="qn-detail-info">
        <div className="qn-detail-votes">
          <div className="qn-detail-icon-circle">
            <i class="bx bx-caret-up"></i>
          </div>
          <div className="qn-detail-vote-count">20</div>
          <div className="qn-detail-icon-circle">
            <i class="bx bx-caret-down"></i>
          </div>
        </div>
        <div className="qn-detail-desc">
          <p className="qn-detail-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            at delectus officiis reprehenderit, explicabo minima omnis
            asperiores praesentium alias ratione tenetur repellat, libero esse
            optio earum perspiciatis quo recusandae amet!
          </p>
          <div className="qn-detail-answered-by">
            <div className="answered-by-dp">
              <img src="/public/house.jpeg" alt="profile picture" />
            </div>
            <span className="answered-name">Lee Mabhena | </span>
            <span className="answered-when"> Answered 5 mins ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
