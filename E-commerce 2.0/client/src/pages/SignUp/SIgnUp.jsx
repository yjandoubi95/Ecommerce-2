import React from "react";
import "./SignUp.css";
import phoneChart from "../../assets/chartPhone.png";

const SIgnUp = () => {
  return (
    <div className="sigForm">
      <div className="thephoneandchart">
        <img className="phImg" src={phoneChart} />
      </div>
      <div className="formSignUp">
        <div className="title">
          <h1>Create an account</h1>
          <h4>enter your details below</h4>
        </div>
        <div>
          <input type="text" placeholder="Name" className="name" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email or Phone number"
            className="phoneOrEmail"
          />
        </div>
        <div>
          <input type="text" placeholder="Password" className="password" />
        </div>
        <div className="createButt">
          <button className="buttCreate">Create Account</button>
        </div>
        <div className="logGoogle">
          <button type="button" class="login-with-google-btn">
            Sign in with Google
          </button>
        </div>
        <div className="toLogin">
          <p className="already">already have account</p>
          <p className="log">login</p>
        </div>
      </div>
    </div>
  );
};

export default SIgnUp;
