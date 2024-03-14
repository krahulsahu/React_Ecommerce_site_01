import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder="Your Name" required />
          <input type="email" name="" id="" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>Continue</button>
        <p className="login">Already have an account? <span>Login here</span></p>
        <div className="agree">
          <input type="checkbox" name="check" id="" />
          <p>I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
