import React from "react";
import styles from "./question.module.css";
import { axiosInstance } from "../../API/axios";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Question.css"


const Question = () => {
  return (
    <section className="question">
      <div className="good__questions">
        <h3>Steps To Write A Good Question.</h3>
        <div className="steps">
          <div class="line mx-1"></div>

          <div className="flex">
            <ArrowCircleRightIcon
              fontSize="small"
              style={{ color: "rgb(53, 53, 94)", fontSize: 16 }}
            />
            <p>Summerize your problems in a one-line-title.</p>
          </div>
          <div className="flex">
            <ArrowCircleRightIcon
              fontSize="small"
              style={{ color: "rgb(53, 53, 94)", fontSize: 16 }}
            />
            <p>Describe your problem in more detail.</p>
          </div>
          <div className="flex">
            <ArrowCircleRightIcon
              fontSize="small"
              style={{
                color: "rgb(53, 53, 94)",
                fontSize: 16,
              }}
            />
            <p>Describe what you tried and what you expected to happen.</p>
          </div>
          <div className="flex">
            <ArrowCircleRightIcon
              fontSize="small"
              style={{ color: "rgb(53, 53, 94)", fontSize: 16 }}
            />
            <p>Review your question and post it here.</p>
          </div>
        </div>
        <div className="post_your_question">
          <p>Post Your Question</p>
        </div>
        <div className="textarea">
          <textarea
            className="first_textarea"
            placeholder="Question title"
          ></textarea>
          <textarea
            className="second_textarea"
            placeholder="Question detail..."
          ></textarea>
          <div className="postQuestion__button">
            <button>Post Question</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
