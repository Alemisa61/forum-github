import React, { useState } from "react";
import "./login.css";
import { axiosInstance } from "../../API/axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const SignIn = () => {
  const [type, setType] = useState("password"); // State for password visibility toggle
  const [icon, setIcon] = useState(eyeOff); // State for eye icon toggle
  const [form, setForm] = useState({ email: "", password: "" }); // Form data state
  const navigate = useNavigate(); // Navigation hook

  // Handle sign-in process
  const handleSignIn = async () => {
      try {
        const response = await axiosInstance.post("/user/login", form);
          if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Store token in localStorage
            navigate("/"); // Navigate to home page
          } else {
              alert("Login failed");
          }
      } catch (error) {
          console.error("Error:", error);
      }
  };

  // Handle input changes
  const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Toggle password visibility
  const handleIconChange = () => {
      setIcon(type === "password" ? eye : eyeOff);
      setType(type === "password" ? "text" : "password");
  };
  return (
     <div className="login-container">
            <h2>Login to your account</h2>
            <p>
                Don't have an account? <Link to="/signup">Create a new account</Link>
            </p>
            <div>
                {/* Email input */}
                <input
                    className="input-field"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    onChange={handleChange}
                />
                <div className="password-field">
                    {/* Password input */}
                    <input
                        className="input-field"
                        type={type}
                        name="password"
                        placeholder="Password"
                        required
                        onChange={handleChange}
                    />
                    {/* Icon for toggling password visibility */}
                    <span className="icon" onClick={handleIconChange}>
                        <Icon icon={icon} size={20} />
                    </span>
                </div>
                <Link to="/forgotPass" className="forgot-password">Forgot password?</Link>
                {/* Login button */}
                <button type="button" className="login-button" onClick={handleSignIn}>Login</button>
            </div>
        </div>
  )
}

export default SignIn