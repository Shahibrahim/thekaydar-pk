import React from "react";
import Icon from "../Images/Icon.svg"
import { Link } from "react-router-dom"; 


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src={Icon} alt="Logo" /> {/* Replace with actual logo */}
        </div>
        <form className="login-form">
          <div className="input-group">
            <input type="text" placeholder="USERNAME" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="PASSWORD" required />
          </div>
          <button type="submit" className="login-btn">LOGIN</button>
          <div className="links">
            <Link to="/signup">Sign up</Link>
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
