import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  // Dummy logged-in user
  const userEmail = "user@example.com";

  // Dropdown toggle state
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ State for fetched events
  const [events, setEvents] = useState([]);

  // ✅ Fetch events from backend when component loads
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

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

      {/* ✅ Event Grid from Database */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-10">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="bg-white text-gray-900 shadow-md rounded-xl overflow-hidden w-72 hover:shadow-xl hover:scale-105 transition transform cursor-pointer"
            >
              <img
                src={event.img || "https://via.placeholder.com/300x200"}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                {event.price && <p className="text-gray-700">${event.price}</p>}
                <p className="text-gray-500 text-sm">{event.date}</p>

                <button
  onClick={() =>
    navigate("/ticket-summary", {
      state: {
        event: event.title,
        seat: `A${Math.floor(Math.random() * 20) + 1}`, // random seat for demo
        price: event.price || 50, // use event price or default
      },
    })
  }
  className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
>
  Book Now
</button>

              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-lg">No events available right now.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
