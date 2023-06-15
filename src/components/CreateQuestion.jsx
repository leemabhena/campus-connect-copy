import React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export const CreateQuestion = () => {
  return (
    <div className="CreateQuestion">
      <div className="create-qn-container">
        <p className="create-qn-label">Title</p>
        <p className="create-qn-desc">
          Be specific and descriptive about your question title
        </p>
        <input type="text" className="create-label-input" />
      </div>
      <div className="create-qn-container">
        <p className="create-qn-label">Question details</p>
        <p className="create-qn-desc">
          Introduce the question and expand on the title above.
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="create-qn-textarea"
        ></textarea>
      </div>
      <div className="create-qn-container">
        <p className="create-qn-label">Course or Tags</p>
        <p className="create-qn-desc">
          Add tags or course name associated with your question.
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="create-qn-textarea"
        ></textarea>
      </div>
      <div className="create-anonymous">
        <FormGroup>
          <FormControlLabel
            className="create-anonymous"
            control={<Switch />}
            label="Ask anonymously"
          />
        </FormGroup>
      </div>
    </div>
  );
};
