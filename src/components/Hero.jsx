import React from "react";
import EventCard from "./EventCard";
import { useNavigate } from "react-router-dom";

const sampleEvents = [
  { id: 1, title: "Concert Night", date: "Oct 25, 2025", img: "https://picsum.photos/300/200?1" },
  { id: 2, title: "Movie Premiere", date: "Nov 1, 2025", img: "https://picsum.photos/300/200?2" },
  { id: 3, title: "Stand-up Comedy", date: "Nov 10, 2025", img: "https://picsum.photos/300/200?3" },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 relative">
      {/* Admin Login Button at top-right */}
      <button
        className="absolute top-4 right-4 btn-secondary"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
