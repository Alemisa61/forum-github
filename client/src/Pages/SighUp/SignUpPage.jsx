import React, { useState } from "react";
import styles from "./signUp.module.css";
import { axiosInstance } from "../../API/axios";
import SignUp from "../../components/SignUP/SignUp";

const SignUpPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpPage;
