import { useState } from 'react'
import Navbar from './Navbar'
import HeroBanner from './HeroBanner'
import events from '../data'
import EventCard from './EventCard'
import BookingModal from './BookingModal'
import TicketSummary from './TicketSummary'

export default function UserDashboard() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [booking, setBooking] = useState(null)

  return (
    <div className="min-h-screen bg-gray-950 pb-10">
      <Navbar role="user" />
      <div className="mt-20 px-6 space-y-6">
        <HeroBanner />
        {!selectedEvent && !booking && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e) => (
              <EventCard key={e.id} event={e} onSelect={() => setSelectedEvent(e)} />
            ))}
          </div>
        )}
        {selectedEvent && !booking && (
          <BookingModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
            onBook={(b) => {
              setBooking(b)
              setSelectedEvent(null)
            }}
          />
        )}
        {booking && <TicketSummary booking={booking} />}
      </div>
    </div>
  )
}
