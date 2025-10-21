import Navbar from './Navbar'
import events from '../data'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 pb-10">
      <Navbar role="admin" />
      <div className="mt-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">🛠 Admin Dashboard</h2>
        <table className="w-full table-auto bg-gray-900/70 backdrop-blur-md text-white rounded-xl overflow-hidden shadow-lg">
          <thead className="bg-teal-600 text-white">
            <tr>
              <th className="p-3 text-left">Event</th>
              <th className="p-3">Category</th>
              <th className="p-3">Date</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((e) => (
              <tr key={e.id} className="border-b hover:bg-gray-800 transition-colors">
                <td className="p-3">{e.name}</td>
                <td className="p-3 text-center">{e.category}</td>
                <td className="p-3 text-center">{e.date}</td>
                <td className="p-3 text-center">${e.price}</td>
                <td className="p-3 text-center flex justify-center gap-2">
                  <button className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded">Edit</button>
                  <button className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
