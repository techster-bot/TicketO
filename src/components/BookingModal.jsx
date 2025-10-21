import { useState } from 'react'

export default function BookingModal({ event, onClose, onBook }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [seats, setSeats] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email) return alert('Enter all fields')
    onBook({ event, name, email, seats })
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="glass-card p-6 w-96 shadow-2xl relative">
        <h3 className="text-2xl font-bold mb-4 text-white">{event.name} - Booking</h3>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-white/30 rounded px-3 py-2 bg-white/10 text-white placeholder:text-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-white/30 rounded px-3 py-2 bg-white/10 text-white placeholder:text-gray-400"
          />
          <div className="flex items-center gap-3 mt-2">
            <button
              type="button"
              className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-xl"
              onClick={() => setSeats(Math.max(1, seats - 1))}
            >
              -
            </button>
            <span className="text-white">{seats}</span>
            <button
              type="button"
              className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-xl"
              onClick={() => setSeats(seats + 1)}
            >
              +
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-xl font-semibold"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-xl font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
