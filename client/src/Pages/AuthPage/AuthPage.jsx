import React, { useState } from "react";
import SignIn from "../../components/LogIn/LogIn";
import SignUp from "../../components/SignUP/SignUp";
import About from '../../components/About/About';
import bgSvg from "../../../src/assets/bg-svg-f.svg";
import './authPage.css'
const style = {
  backgroundImage: `url(${bgSvg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  paddingTop: "140px",
  marginBottom: "10px",
};


const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSwap = () => {
    setIsSignIn((prev) => !prev);
  };

  
  return (
    <section style={style} className="pt-5">
      <div className="container my-0">
        <div className="row">
          <div className="col-lg-5 col-md-6 mb-4 mx-4">
            
            {isSignIn ? (
              <SignIn onSwap={handleSwap} />
            ) : (
              <SignUp onSwap={handleSwap} />
            )}
          </div>
          <div className="col-lg-5 col-md-6 mb-4 mx-5">
            <About />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;


