import React from "react";
import LogInWrapper from "./LogInWrapper";
import Logo from "./logo.svg"

const LogIn = () => {
  return (
    <LogInWrapper>
      <div className="content">
        <div className="info">
          <div className="logo">
            <img src={Logo} alt="" />
            <p>ASIA granite</p>
          </div>
          <br />
          <div className="title">
            <h2>Log In to ASIA granite</h2>
            <p>Enter your email and password below</p>
          </div>
          <div className="logIn">
            <div class="mb-4">
              <label for="exampleFormControlInput1" class="form-label">
                <p className="m-0 p-0">EMAIL</p>
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" class="form-label">
                <p className="m-0 p-0">PASSWORD</p>
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Password"
              />
            </div>
          </div>
          <button className="btn">Log In</button>
          <p>
            Don't have on account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </LogInWrapper>
  );
};

export default LogIn;
