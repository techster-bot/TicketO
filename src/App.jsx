import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./components/Login";
import TicketSummary from "./components/TicketSummary";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login userType="user" />} />
        <Route path="/admin-login" element={<Login userType="admin" />} />
        <Route path="/ticket-summary" element={<TicketSummary />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
	<Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
