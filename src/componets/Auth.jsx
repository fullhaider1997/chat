import React, { useEffect, useState } from "react";

import Cookies from "universal-cookie";
import axios from "axios";
import { FaSignInAlt } from "react-icons/fa";

let backgroundimg = require("../img/background.jpg");
//false ->  user hasn't signed up
//true  ->  user has signed up

const initalState = {
  fullname: "",
  username: "",
  password: "",
  confirmpassword: "",
  phoneNumber: "",
  avatarURL: "",
};

const Auth = () => {
  const [form, setForm] = useState(initalState);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  //
  const switchMode = () => {
    setIsSignUp((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignUp === true ? "Sign up" : "Sign In"}</p>
          <form onSubmit={() => {}}>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName"> Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="Username">Username</label>
              <input
                name="Username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required
              />
              {isSignUp && (
                <div className="auth__form-container_fields-content_input">
                  <label htmlFor="Phone number">Phone Number</label>
                  <input
                    name="Phone number"
                    type="text"
                    placeholder="123-123-123"
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              {isSignUp && (
                <div className="auth__form-container_fields-content_input">
                  <label htmlFor="fullName"> Avatar url</label>
                  <input
                    name="Avatar url"
                    type="text"
                    placeholder="Avatar url"
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="Password">Password</label>
                <input
                  name="Password"
                  type="password"
                  placeholder="Passwprd"
                  onChange={handleChange}
                  required
                />
              </div>
              {isSignUp && (
                <div className="auth__form-container_fields-content_input">
                  <label htmlFor="Confirmed Password">
                    Confirmed Password{" "}
                  </label>
                  <input
                    name="Confirmed Password"
                    type="password"
                    placeholder="Confirmed Password"
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
            </div>
            <div className="auth__form-container_fields-content_button">
              <button onClick={handleSubmit}>
                {isSignUp ? "Sign up" : "Sign in"}
              </button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignUp ? "Already have an account " : "Don't have an account "}
              <span onClick={switchMode}>
                {isSignUp ? "Sign In " : "Sign out "}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="auth__form-container_image">
        <img src={backgroundimg}></img>
      </div>
    </div>
  );
};

export default Auth;
