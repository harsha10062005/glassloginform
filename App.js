// src/App.js
import React, { useState } from "react";
import "./App.css";
import { FaUser, FaLock } from "react-icons/fa";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState("");

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    alert("Login Successful");
  };

  return (
    <div className={`container ${theme}`}>
      <form className="glass-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="input-group">
          <FaUser />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <FaLock />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={togglePassword}>
            {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
          </span>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Sign In</button>

        <div className="theme-toggle">
          <label>Toggle Theme</label>
          <input type="checkbox" onChange={toggleTheme} />
        </div>
      </form>
    </div>
  );
}

export default App;

