import React, { useState } from 'react'
import logo from '../assets/withg20.png'
import {Link} from 'react-router-dom'
 function Header() {
    // const [isOpen, setIsOpen] = useState(false);
     const [menuOpen, setMenuOpen] = useState(false);
  return (
 
  <header className="bg-gradient-to-r from-purple-400 via-rose-800 to-gray-400 text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="https://www.happydigitalbharat.com/" className="flex items-center space-x-2 text-xl font-semibold">
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
        <div className="hidden md:flex space-x-8 text-lg mx-auto">
          <Link to="/" className="hover:text-gray-300 text-2xl font-serif">Home</Link>
          <Link to="/course" className="hover:text-gray-300 text-2xl font-serif">Course</Link>
          <Link to="/class" className="hover:text-gray-300 text-2xl font-serif">Class</Link>
          <Link to="/about" className="hover:text-gray-300 text-2xl font-serif">About Us</Link>
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
          <Link to="/signin" className="block text-xl font-serif hover:text-gray-300 border-2 rounded-xl justify-center text-center p-0.5  hover:bg-black">Sign In</Link>
          <Link to="/login" className="block text-xl font-serif hover:text-gray-300 bg-blue-700 border-2 border-blue-400 rounded-xl text-center  justify-center m-1 p-0.5 hover:bg-blue-900">Login</Link>
          <Link to="/logout" className="block text-xl font-serif hover:text-gray-300 bg-blue-700 border-2 border-blue-400 rounded-xl text-center  justify-center m-1 p-0.5 hover:bg-blue-900">Logout</Link>
        </div>
      )}
    </header>
  );
}

export default Header
