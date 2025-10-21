import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ userType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dummy login
    if ((userType === "user" && email === "user@example.com" && password === "user123") ||
        (userType === "admin" && email === "admin@example.com" && password === "admin123")) {
      navigate("/ticket-summary");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass-card p-10 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">{userType === "admin" ? "Admin Login" : "User Login"}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn-primary" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
