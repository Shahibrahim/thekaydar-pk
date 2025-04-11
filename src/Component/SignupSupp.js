import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupSupp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // To redirect after signup

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/signupsupp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed. Try again.");
      }

      alert("Signup successful! Please log in.");
      navigate("/login"); // Redirect to login page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="form-section">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
          {error && <p className="error">{error}</p>}
          
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />

          <label>Password</label>
          <div className="password-input">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>

      <div className="image-section">
        <div className="overlay"></div>
        <h1 className="logo">Thekaydar</h1>
      </div>
    </div>
  );
};

export default SignupSupp;
