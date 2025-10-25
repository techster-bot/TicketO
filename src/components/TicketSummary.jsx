import React from "react";
import { useLocation } from "react-router-dom";

const TicketSummary = () => {
  const location = useLocation();
  const ticket = location.state; // expect { event, seat, price }

  if (!ticket) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">No ticket details available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="glass-card p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Your Ticket</h2>
        <p className="mb-2">Event: {ticket.event}</p>
        <p className="mb-2">Seat: {ticket.seat}</p>
        <p className="mb-4">Price: ${ticket.price}</p>
        <div className="bg-white/20 p-10 mb-4">
          {/* You can generate QR code dynamically later */}
          QR CODE
        </div>
        <button className="btn-primary">Download Ticket</button>
      </div>
    </div>
  );
};

export default TicketSummary;
