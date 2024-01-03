import React from 'react'
import phoneChart from "../../assets/chartPhone.png";

const Login = () => {
  return (
    <div>
        <div className="sigForm">
      <div className="thephoneandchart">
        <img className="phImg" src={phoneChart} />
      </div>
      <div className="formSignUp">
        <div className="title">
          <h1>Log in to Exclusive</h1>
          <h4>enter your details below</h4>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Email or Phone number"
            className="phoneOrEmail"
          />
        </div>
        <div>
          <input type="text" placeholder="Password" className="password" />
        </div>
        <div className="createButt">
          <button className="buttCreate">Log In</button>
          <p>Forget Password ?</p>
        </div>
    
      </div>
    </div>
    </div>
  )
}

export default Login