import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  // Dummy logged-in user
  const userEmail = "user@example.com";

  // Dropdown toggle state
  const [menuOpen, setMenuOpen] = useState(false);

  // Sample events (can later come from backend)
  const sampleEvents = [
    { id: 1, title: "Concert Night", date: "Oct 25, 2025", price: 20, img: "https://picsum.photos/300/200?1" },
    { id: 2, title: "Movie Premiere", date: "Nov 1, 2025", price: 15, img: "https://picsum.photos/300/200?2" },
    { id: 3, title: "Stand-up Comedy", date: "Nov 10, 2025", price: 10, img: "https://picsum.photos/300/200?3" },
  ];

  // Logout handler
  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      
      {/* Top Right User Menu */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          {userEmail.split("@")[0]} ▼
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-10">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/ticket-summary");
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              🎟️ Booked Tickets
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              🚪 Logout
            </button>
          </div>
        )}
      </div>

      {/* Page Title */}
      <h1 className="text-5xl font-bold mb-6 text-center mt-20">
        Welcome to TicketO, {userEmail.split("@")[0]}!
      </h1>

      <p className="text-gray-300 mb-10 text-center">
        Explore and book your favorite events below 🎶
      </p>

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-10">
        {sampleEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white text-gray-900 shadow-md rounded-xl overflow-hidden w-72 hover:shadow-xl hover:scale-105 transition transform cursor-pointer"
          >
            <img src={event.img} alt={event.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-700">${event.price}</p>
              <p className="text-gray-500 text-sm">{event.date}</p>

              <button
                onClick={() => navigate("/ticket-summary")}
                className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
