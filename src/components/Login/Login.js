import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="grid-container">
          <div className="login-card">
            <h1>Sign In</h1>
            <h6>
              New User? <a> Create an Account</a>
            </h6>
            <form className="login-form" action="">
              <input
                type="text"
                className="form-input"
                placeholder="Username or Email"
              />
              <input
                type="text"
                className="form-input"
                placeholder="Password"
              />
              <div className="check-div">
                <input type="checkbox" className="form-check" /> Keep me signed
                in
              </div>
              <Link to="/home">
                <button type="submit" className="form-input btn">
                  Sign In
                </button>
              </Link>
            </form>
            <div className="signin-social">
              <h6>Or Sign in With</h6>
              <div className="signin-social-icons">
                <i className="fa-brands fa-google"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="login-img">
            <img src="images/login-image.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
