import "./styles/AllQuestions.css";

export const AllQuestions = () => {
  return (
    <div className="AllQuestions">
      <p className="num-questions">10000 Questions</p>
      <div className="question-list-item">
        <div className="question-item-left">
          <p className="num-votes">10 votes</p>
          <p className="num-answers">0 answers</p>
          <p className="num-views">10 views</p>
        </div>
        <div className="question-list-body">
          <a href="/app/questions/1" className="question-list-topic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            asperiores hic harum, accusamus dignissimos c
          </a>
          <p className="question-list-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            dolore voluptatum quas vitae mollitia magnam est ex qui asperiores
            laboriosam dicta, maiores non tempora dolorum consectetur, repellat
            error beatae ab?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. At culpa praesentium quis cupiditate iure corrupti est
            voluptatibus sunt animi vel. Totam magni non illo laudantium rem,
            distinctio perspiciatis necessitatibus doloribus!
          </p>
          <div className="question-list-body-bottom">
            <div className="question-list-tags">
              <div className="question-list-tag">Economics</div>
              <div className="question-list-tag">Calculus</div>
            </div>
            <div className="question-list-who">
              <img src="/public/photo-id.jpg" alt="profile picture" />
              <span className="question-list-name">Lee </span>
              <span className="question-list-when"> asked 50 secs ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
