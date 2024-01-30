import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-preview">
          <img
            src={require("../../../Assets/home-phones.png")}
            alt="home-image"
          />
          <span id="demo-img">
            <img
              src={require("../../../Assets/demo-pic.png")}
              alt="demo-image"
            />
          </span>
        </div>
        <div className="login-form">
          <div className="login-form__container">
            <h2>Chatgram</h2>
            <section className="login-form__fields">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Phone number, username or email address"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </section>
            <section className="login-form__btn">
              <button>Log in</button>
            </section>
          </div>
          <div className="login-form__signup">
            <p>
              DOn't have an account ?&nbsp;
              <span>
                <a href="/signup">Sign up</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
