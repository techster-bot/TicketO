import React from "react";

const TicketSummary = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="glass-card p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Your Ticket</h2>
        <p className="mb-2">Event: Concert Night</p>
        <p className="mb-2">Seat: A12</p>
        <p className="mb-4">Price: $45</p>
        <div className="bg-white/20 p-10 mb-4">QR CODE</div>
        <button className="btn-primary">Download Ticket</button>
      </div>
    </div>
  );
};

export default TicketSummary;
