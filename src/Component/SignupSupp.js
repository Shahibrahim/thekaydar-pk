import React, { useState } from "react";


const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="signup-container">
      <div className="form-section">
        <h2>Create an Account</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <div className="password-input">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <span
              className="toggle-password"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="password-requirements">
            <p>✔ Use 8 or more characters</p>
            <p>✔ One uppercase & one lowercase character</p>
            <p>✔ One special character & one number</p>
          </div>

          <p className="terms">
            By creating an account, you agree to the{" "}
            <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
          </p>

          <button type="submit">Create an Account</button>
        </form>
        <p>
          Already have an account? <a href="#">Log in</a>
        </p>
      </div>

      <div className="image-section">
        <div className="overlay"></div>
        <h1 className="logo">Thekaydar</h1>
      </div>
    </div>
  );
};

export default Signup;
