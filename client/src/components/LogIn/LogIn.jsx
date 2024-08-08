import React, { useState, useContext } from "react";
import "./login.css";
import { axiosInstance } from "../../API/axios";
import { useNavigate, Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { AuthContext } from "../AuthContext/AuthContext";

const LogIn = ({ onSwap }) => {
  
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { updateToken } = useContext(AuthContext);

  const handleSignIn = async () => {
    if (!form.email || !form.password) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const response = await axiosInstance.post("/api/user/login", form);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        updateToken(response.data.token);
        navigate("/home");
      } else {
        alert("Login failed. Please check your email and password.");
      }
    } catch (error) {
      let errorMsg = "Something went wrong. Please try again.";

      if (error.response && error.response.data) {
        switch (error.response.status) {
          case 400:
            errorMsg =
              error.response.data.message ||
              "Please provide all required fields";
            break;
          case 401:
            errorMsg =
              error.response.data.message || "Invalid username or password";
            break;
          case 500:
            errorMsg =
              error.response.data.message || "An unexpected error occurred";
            break;
          default:
            errorMsg = "Something went wrong. Please try again.";
            break;
        }
      }

      setErrorMessage(errorMsg);
    }
  }

  return (
    <div className="login-container shadow">
      <h2>Login to your account</h2>
      <p>
        Don't have an account?{" "}
        <Link to="/" onClick={onSwap}>
          Create a new account
        </Link>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="email"
          name="email"
          placeholder="Email address"
          required
          onChange={handleChange}
        />
        <div className="password-field">
          <input
            className="input-field"
            type={type}
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <span className="icon" onClick={handleIconChange}>
            <Icon icon={icon} size={20} />
          </span>
        </div>
        <Link to="/" className="forgot-password">
          Forgot password?
        </Link>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LogIn;
