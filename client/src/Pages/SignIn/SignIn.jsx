import React, { useState } from "react";
import styles from "./signIn.module.css";
import { axiosInstance } from "../../API/axios";


const SignIn = () => {

  return <>
      //****************/ About page starts. Nebyu ****************//

    <section className={classes.container} >
      <div className={classes.inner_container}>
    <p className={classes.title} >About</p>
    <p className={classes.sub_title}>Evangadi Networks</p>
    <div className={classes.paragraph}>
    <p>
      No matter what stage of life you are in, whether you're just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footstps.

    </p>
    <br />
    <p>Wheather you are willing to share your knowledge or you are just looking to meet mentors of you own, please start by joining the network here.
    </p>
    </div>
    <Link to={"/"} className={classes.button}>
    <button >HOW IT WORKS</button>
    </Link>
    </div>
    </section>
     //**************** About page Ends. ******************//
  </>;
};

export default SignIn;
