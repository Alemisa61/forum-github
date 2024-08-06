import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./signUp.module.css";
import { axiosInstance } from "../../API/axios";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp() {
  // State to manage password visibility. `visible` is a boolean indicating if the password is visible or hidden.
  const [visible, setVisible] = useState(false);
  // Function to toggle password visibility.
  const handleToggleVisibility = () => {
    setVisible(!visible); // Toggle the value of `visible`.
  };
  // State to manage validation errors. `errors` is an object with keys for each form field and boolean values indicating if there are errors.
  const [errors, setErrors] = useState({
    username: false,
    firstname: false,
    lastname: false,
    email: false,
    password: false,
  });
  // Initialize navigation hook for redirecting users after form submission.
  const navigate = useNavigate();
  // Create a reference for the following input fields, initialized to null to be used for accessing a DOM element.
  const userNameDom = useRef(null);
  const firstNameDom = useRef(null);
  const lastNameDom = useRef(null);
  const emailDom = useRef(null);
  const passwordDom = useRef(null);

  // Function to handle form submission.
  async function handleSubmit(e) {
    e.preventDefault();

    // Get values
    // Retrieve values from input fields using their refs.
    const usernameValue = userNameDom.current.value;
    const firstValue = firstNameDom.current.value;
    const lastValue = lastNameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    // Validate fields
    // Create an errors object indicating which fields are empty.
    const newErrors = {
      username: !usernameValue,
      firstname: !firstValue,
      lastname: !lastValue,
      email: !emailValue,
      password: !passValue,
    };
    // Update the state with validation errors.
    setErrors(newErrors);

    // If there are validation errors, stop form submission
    if (Object.values(newErrors).some((error) => error)) {
      alert("Please provide all required information");

      return;
    }
    try {
      // Use the fetch API to send a HTTP request to the server.
      const response = await axiosInstance.post("/api/user/register", {
        // Specify that this request will use the POST method, which is used to send data to the server to register the user.
        method: "POST",
        // Set the Content-Type header to "application/json" to indicate that the request body contains JSON data.
        headers: {
          "Content-Type": "application/json",
        },
        // Convert the JavaScript object into a JSON string and set it as the body of the request.
        // This object contains user registration details.
        body: JSON.stringify({
          username: usernameValue,
          firstname: firstValue,
          lastname: lastValue,
          email: emailValue,
          password: passValue,
        }),
      });
      // Wait for the response from the server to be parsed as JSON and store it in the 'data' variable.
      const data = await response.json();
      console.log(data);

      alert("Register successful. Please login");
      navigate("/login");
    } catch (error) {
      alert("Something went wrong");
      console.log(error.response);
    }
  }
  return (
    <section className={classes.sign_up_container}>
      <div>
        <div className={classes.upper_heading}>
          <h3 className={classes.join_login}>Join the network</h3>
          <p className={classes.upper_signin_button}>
            Already have an account?{" "}
            <Link to="/login">Sign in</Link>
          </p>
        </div>
        <form className={classes.sign_up_form} onSubmit={handleSubmit}>
          <div
            className={`${classes.item} ${
              errors.username ? classes.error : ""
            }`}
          >
            <input ref={userNameDom} type="text" placeholder="Username" />
          </div>
          <div className={classes.column_container}>
            <div
              className={`${classes.item} ${
                errors.firstname ? classes.error : ""
              }`}
            >
              <input ref={firstNameDom} type="text" placeholder="First name" />
            </div>
            <div
              className={`${classes.item} ${
                errors.lastname ? classes.error : ""
              }`}
            >
              <input ref={lastNameDom} type="text" placeholder="Last name" />
            </div>
          </div>
          <div
            className={`${classes.item} ${errors.email ? classes.error : ""}`}
          >
            <input ref={emailDom} type="email" placeholder="Email address" />
          </div>
          <div
            className={`${classes.item_password} ${
              errors.password ? classes.error : ""
            }`}
          >
            <input
              ref={passwordDom}
              type={visible ? "text" : "password"}
              placeholder="Password"
              style={{ paddingRight: 0 }}
            />
            <span
              className={classes.password_toggle}
              onClick={handleToggleVisibility}
            >
              {visible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div>
            <p small className={classes.signin_button}>
              I agree to the
              <Link
                to="/"
                target="_blank"
              >
                {" "}
                privacy policy
              </Link>{" "}
              and
              <Link to="/" target="_blank">
                {" "}
                terms of service
              </Link>
            </p>
          </div>
          <button className={classes.join_button} type="submit">
            Agree and Join
          </button>
        </form>
        <p className={classes.lower_account_button}>
          <Link to="/login">
            Already have an account
          </Link>
        </p>
      </div>
    </section>
  );
}

export default SignUp;
