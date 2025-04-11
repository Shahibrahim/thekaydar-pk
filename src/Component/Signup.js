import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import for navigation
import Icon from "../Images/Icon.svg";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });
    formData["role"] = 'buyer'

    try {
      const response = await fetch("http://localhost:5000/api/signup", {        
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data) {
        throw new Error(data?.message || "Signup failed!");
      }

      setMessage({ type: "success", text: "Signup successful! Redirecting..." });

      // ✅ Redirect to login after 2 seconds
      setTimeout(() => navigate("/login"), 2000);

    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="header">
          <img src={Icon} alt="Logo" className="logo" />
          <h2>Welcome to Thekaydar!</h2>
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input 
              className="Email" 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Username</label>
            <input 
              type="text" 
              className="Email" 
              name="username"
              placeholder="Enter username" 
              value={formData.username} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                className="Email"
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="toggle-password" onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? "🙈" : "👁"}
              </span>
            </div>
            <small className="password-rules">
              • Use 8+ characters • One uppercase & lowercase letter • One special character • One number
            </small>
          </div>

          {message.text && <p className={`message ${message.type}`}>{message.text}</p>}

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Signing Up..." : "Create an account"}
          </button>

          <p className="login-link">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
