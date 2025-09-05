
import React, { useState } from 'react';
import logo from '../assets/withg20.png';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react'; // notification icon

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-400 via-rose-800 to-gray-400 text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a
            href="https://www.happydigitalbharat.com/"
            className="flex items-center space-x-2 text-xl font-semibold"
          >
            <img src={logo} alt="Logo" className="h-9 w-25" />
          </a>
        </div>

        {/* Hamburger Menu Button (☰) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg mx-auto items-center">
          <Link to="/" className="hover:text-gray-300 text-2xl font-serif">Home</Link>
          <Link to="/course" className="hover:text-gray-300 text-2xl font-serif">Course</Link>
          <Link to="/class" className="hover:text-gray-300 text-2xl font-serif">Class</Link>
          <Link to="/about" className="hover:text-gray-300 text-2xl font-serif">About Us</Link>

          {/* 🔔 Notification Dropdown */}
          <div className="relative">
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="hover:text-gray-300 text-2xl font-serif flex items-center"
            >
              <Bell className="w-6 h-6 " />
            </button>
            {notifOpen && (
              <div className="absolute mt-2 bg-purple-400 text-black rounded-xl  shadow-lg w-40">
                <Link
                  to="/notificationsend"
                  className="block px-4 py-2 bg-rose-500 rounded-xl hover:bg-gray-200"
                >
                  Send
                </Link>
                <Link
                  to="/notification"
                  className="block px-4 py-2 bg-yellow-300 rounded-xl hover:bg-gray-200"
                >
                  Receive
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Signin/Login */}
        <div className="hidden md:flex space-x-4 text-sm md:text-base">
          <Link to="/signin" className="hover:text-gray-300 text-2xl font-serif">Sign In</Link>
          <Link to="/login" className="hover:text-gray-300 text-2xl font-serif">Login</Link>
          <Link to="/logout" className="hover:text-gray-300 text-2xl font-serif">Logout</Link>
        </div>
      </nav>

      {/* Mobile Menu (dropdown below nav) */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-xl font-serif hover:text-gray-300">Home</Link>
          <Link to="/course" className="block text-xl font-serif hover:text-gray-300">Course</Link>
          <Link to="/about" className="block text-xl font-serif hover:text-gray-300">About Us</Link>

          {/* 🔔 Notification Dropdown in Mobile */}
          <div className="relative">
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className=" text-xl font-serif hover:text-gray-300 flex items-center"
            >
              <Bell className="w-6 h-6 mr-2" /> Notifications
            </button>
            {notifOpen && (
              <div className="mt-2 bg-white text-black rounded shadow-lg">
                <Link
                  to="/notificationsend"
                  className="block px-4 py-2 bg-rose-500 hover:bg-gray-200"
                >
                  Send
                </Link>
                <Link
                  to="/notification"
                  className="block px-4 py-2 bg-yellow-300 hover:bg-gray-200"
                >
                  Receive
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/signin"
            className="block text-xl font-serif hover:text-gray-300 border-2 rounded-xl justify-center text-center p-0.5 hover:bg-black"
          >
            Sign In
          </Link>
          <Link
            to="/login"
            className="block text-xl font-serif hover:text-gray-300 bg-blue-700 border-2 border-blue-400 rounded-xl text-center justify-center m-1 p-0.5 hover:bg-blue-900"
          >
            Login
          </Link>
          <Link
            to="/logout"
            className="block text-xl font-serif hover:text-gray-300 bg-blue-700 border-2 border-blue-400 rounded-xl text-center justify-center m-1 p-0.5 hover:bg-blue-900"
          >
            Logout
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

