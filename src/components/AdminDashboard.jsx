import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", price: "", date: "", img: "" });
  const [editingEvent, setEditingEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const adminName = "Admin";
  const API_BASE = "http://127.0.0.1:5000/api/events";

  // 🔹 Fetch all events from Flask
  useEffect(() => {
    fetch(API_BASE)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  // 🔹 Add or Edit Event
  const handleAddOrEdit = async (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.price || !newEvent.date || !newEvent.img) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const method = editingEvent ? "PUT" : "POST";
      const url = editingEvent ? `${API_BASE}/${editingEvent.id}` : API_BASE;

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });

      // Refresh event list
      const updated = await fetch(API_BASE).then((res) => res.json());
      setEvents(updated);

      setNewEvent({ title: "", price: "", date: "", img: "" });
      setEditingEvent(null);
      setShowForm(false);
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  // 🔹 Delete Event
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      setEvents(events.filter((ev) => ev.id !== id));
    }
  };

  const handleEditClick = (event) => {
    setEditingEvent(event);
    setNewEvent(event);
    setShowForm(true);
  };

  const handleLogout = () => {
    if (window.confirm("Logout admin?")) navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Admin Profile Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          {adminName} ⬇
        </button>
        {showMenu && (
          <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <h1 className="text-5xl font-bold mb-6 text-center mt-20">
        Admin Dashboard – Manage Events
      </h1>

      <button
        onClick={() => {
          setShowForm(!showForm);
          setEditingEvent(null);
          setNewEvent({ title: "", price: "", date: "", img: "" });
        }}
        className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition mb-10"
      >
        {showForm ? "Cancel" : "➕ Add New Event"}
      </button>

      {/* Add/Edit Form */}
      {showForm && (
        <form
          onSubmit={handleAddOrEdit}
          className="bg-white p-6 rounded-2xl shadow-lg mb-10 w-full max-w-2xl text-black"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            {editingEvent ? "Edit Event" : "Add Event"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="number"
              placeholder="Price ($)"
              value={newEvent.price}
              onChange={(e) => setNewEvent({ ...newEvent, price: e.target.value })}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newEvent.img}
              onChange={(e) => setNewEvent({ ...newEvent, img: e.target.value })}
              className="p-3 border rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {editingEvent ? "Update Event" : "Save Event"}
          </button>
        </form>
      )}

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white text-gray-900 shadow-md rounded-xl overflow-hidden w-72 hover:shadow-xl hover:scale-105 transition transform cursor-pointer"
            onClick={() => handleEditClick(event)}
          >
            <img src={event.img} alt={event.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-700">${event.price}</p>
              <p className="text-gray-500 text-sm">{event.date}</p>

              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditClick(event);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(event.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
