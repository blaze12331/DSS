import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      alert("Please fill in all fields.");
    } else if (email !== "portugaljohnkarl@gmail.com" || password !== "admin") {
      setError("Incorrect email or password.");
      alert("Incorrect email or password.");
    } else {
      setError("");
      alert("Logged in successfully!");
      navigate("/petlist"); // Navigate to PetList page
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log in</h2>
        <p className="welcome-text">Welcome to Daet Saving Strays</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>

        <div className="or-container">
          <p>or Continue with</p>
        </div>

        <div className="social-icons">
          <FaFacebook className="icon facebook" />
          <FaGoogle className="icon google" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
