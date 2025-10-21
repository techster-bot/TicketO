import { useState } from 'react'

export default function BookingForm({ event, onBook }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [seats, setSeats] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    // BUG: validation missing for GitHub issue #2
    onBook({ event, name, email, seats })
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Booking: {event.name}</h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          className="border px-3 py-2 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-3 py-2 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <button type="button" className="bg-gray-200 px-2 rounded" onClick={() => setSeats(Math.max(1, seats-1))}>-</button>
          <span>{seats}</span>
          <button type="button" className="bg-gray-200 px-2 rounded" onClick={() => setSeats(seats+1)}>+</button>
        </div>
        <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-semibold">
          Confirm Booking
        </button>
      </form>
    </div>
  )
}
