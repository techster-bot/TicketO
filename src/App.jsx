import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./components/Login";
import TicketSummary from "./components/TicketSummary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login userType="user" />} />
        <Route path="/admin-login" element={<Login userType="admin" />} />
        <Route path="/ticket-summary" element={<TicketSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
