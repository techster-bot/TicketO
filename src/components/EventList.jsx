import events from '../data'

export default function EventList({ onSelectEvent }) {
  return (
    <div>
      <h3>Available Events</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.name}</strong> — {event.category} — {event.date}
            <button onClick={() => onSelectEvent(event)} style={{ marginLeft: '10px' }}>
              Book
            </button>
          </li>
        ))}
      </ul>
      <p style={{ color: 'gray' }}>(*Future feature: Add search & filter here)</p>
    </div>
  )
}
