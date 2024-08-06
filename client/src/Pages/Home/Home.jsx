import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../API/axios";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState({ username: "Default User" });
  const Navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/api/question/")
      .then((response) => {
        setQuestions(response.data.questions);
        setFilteredQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  useEffect(() => {
    const results = questions.filter((question) =>
      question.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuestions(results);
  }, [searchTerm, questions]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleQuestionClick = () => {
    Navigate("/answer");
  };

  return (
    <section className="questions_section mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a href="/question">
              <button className="btn btn-primary">Ask Question</button>
            </a>
          </div>
          <div className="col-12 col-md-4 pt-2 welcome_message">
            Welcome:
            <span className="ms-2">{user.username}</span>
          </div>
          <div className="search_questions">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="mt-4">
            {filteredQuestions.map((question, index) => (
              <a href="#">
                <div className="row question" key={index}>
                  <hr />
                  <div className="col-12 col-md-2 user">
                    <div className="profile_icon">
                      <IoPersonSharp />
                    </div>
                    <div className="user_name">{user.username}</div>
                  </div>
                  <div className="col-10 col-md-9 my-md-4">
                    <p className="question_title">{question.title}</p>
                  </div>
                  <div className="col-2 col-md-1">
                    <div className="next_arrow" onClick={handleQuestionClick}>
                      <NavigateNextIcon />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
