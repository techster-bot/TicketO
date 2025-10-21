import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Navbar({ user, role }) {
  const navigate = useNavigate()
  const handleLogout = () => navigate('/')

  return (
    <nav className="bg-gray-900/70 backdrop-blur-md text-white flex justify-between items-center px-6 py-4 shadow-md fixed w-full z-50">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => (role === 'admin' ? navigate('/admin') : navigate('/user'))}
      >
        🎟️ TicketO
      </h1>
      <div className="flex items-center gap-4">
        <span className="hidden sm:block">{user || role}</span>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1 bg-teal-600 hover:bg-teal-700 px-3 py-1 rounded"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </nav>
  )
}
