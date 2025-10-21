import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div className="glass-card p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
      <img src={event.img} className="rounded-2xl mb-4 w-full h-40 object-cover" />
      <h2 className="text-xl font-bold mb-1">{event.title}</h2>
      <p className="text-sm mb-3">{event.date}</p>
      <button className="btn-primary" onClick={() => navigate("/ticket-summary")}>
        Book Now
      </button>
    </div>
  );
};

export default EventCard;
