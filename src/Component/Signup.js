import React, { useState } from "react";
import Icon from "../Images/Icon.svg"

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="header">
          <img src={Icon} alt="Logo" className="logo" />
          <h2>Welcome to Thekaydar!</h2>
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>

        <form className="signup-form">
          <div className="input-group">
            <label>Email</label>
            <input className="Email" type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Username</label>
            <input type="text" className="Email" placeholder="Enter username" required />
          </div>

          <div className="input-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
              className="Email"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter password"
                required
              />
              <span
                className="toggle-password"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? "🙈" : "👁"}
              </span>
            </div>
            <small className="password-rules">
              • Use 8 or more characters • One uppercase & lowercase letter • One special character • One number
            </small>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe">
              I want to receive emails about the product, feature updates, events, and marketing promotions.
            </label>
          </div>

          <p className="terms">
            By creating an account, you agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
          </p>

          <button type="submit" className="signup-btn">Create an account</button>

          <p className="login-link">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
