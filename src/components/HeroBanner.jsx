import { useEffect, useState } from 'react'
import events from '../data'

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % events.length), 4000)
    return () => clearInterval(interval)
  }, [])

  const event = events[current]
  const imageUrl = `https://picsum.photos/seed/${event.id}/1200/400`

  return (
    <div
      className="rounded-3xl overflow-hidden relative shadow-lg"
      style={{ minHeight: '250px' }}
    >
      <img src={imageUrl} alt={event.name} className="w-full h-full object-cover brightness-75" />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white">
        <h2 className="text-3xl font-bold drop-shadow-lg">{event.name}</h2>
        <p className="text-lg drop-shadow-lg">{event.category} | {event.date}</p>
      </div>
    </div>
  )
}
