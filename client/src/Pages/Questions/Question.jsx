import React, { useState, useEffect, useContext } from "react";
import "./Question.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import { axiosInstance } from "../../API/axios";

function Question() {
  const [form, setForm] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  //importing global state from context
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setForm(() => {
      return { ...form, user_id: user.user_id, user_name: user.user_name };
    });

    try {
      //sending data to be registered in database
      await axiosInstance.post("/api/question/", {
        title: form.title,
        description: form.description,
        user_name: user.user_name,
        user_id: user.user_name,
      });

      //navigate to homepage once the question is posted
      navigate("/home");
    } catch (error) {
      console.log("problem ==>", error.response.data.msg);
    }
  };

  // document.getElementById("email").value = userData.user?.display_name;
  return (
    <div className="container">
      <div className="askcover">
        <div className="askcover__steps">
          <h3>Steps to Write a good question</h3>
          <ul>
            <li>Summarize in a oneline title</li>
            <li>Describe in more detail</li>
            <li>Describe what you expect to happen</li>
            <li>Review your question and post</li>
          </ul>
        </div>
        <div className="askcover_question">
          <div className="askcover_ask">
            <h3>Ask question</h3>
          </div>
          <div className="askcover__input">
            <div className="form_container">
              <form onSubmit={handleSubmit} action="submit">
                <input
                  name="title"
                  type="text"
                  className="askcover__qtitle"
                  placeholder="Title"
                  onChange={handleChange}
                />
                <br />
                <br />
                <textarea
                  name="description"
                  placeholder="Question Description"
                  onChange={handleChange}
                  style={{
                    border: "1px solid rgb(191, 191, 191)",
                    borderRadius: "5px ",
                    width: "93%",
                    resize: "none",
                    height: "150px",
                  }}
                ></textarea>
                <button className="btnpost">Post Your Question</button>
              </form>

              <Link to="/home" className="mt-3">
                Go back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Question;
