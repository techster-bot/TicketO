import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  // ✅ Fetch events from backend
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 relative">
      {/* Admin Login Button at top-right */}
      <button
        className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
        onClick={() => navigate("/admin-login")}
      >
        Admin Login
      </button>

      <h1 className="text-5xl font-bold mb-6 text-center mt-20">
        TicketO – Book Your Tickets Instantly
      </h1>

      <button
        className="btn-primary mb-10 max-w-xs"
        onClick={() => navigate("/login")}
      >
        Browse Events
      </button>

      {/* ✅ Show loading or events */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-gray-500 text-lg">No events available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
