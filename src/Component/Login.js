import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import Icon from "../Images/Icon.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data) {
        throw new Error(data?.message || "Invalid email or password.");
      }

      // Save token in localStorage
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/product-page"); // Redirect after successful login
      } else {
        throw new Error("Token missing from server response.");
      }

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src={Icon} alt="Logo" />
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}
          
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="login-btn">LOGIN</button>

          <div className="links">
            <a href="/signup">Sign up</a>
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
