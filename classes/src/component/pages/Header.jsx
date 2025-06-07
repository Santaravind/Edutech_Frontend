import React from 'react'
import logo from '../assets/withg20.png'
import {Link} from 'react-router-dom'
 function Header() {
  return (
  <header className="bg-gradient-to-r from-purple-400 via-rose-800 to-gray-400 text-white shadow-lg">

      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <a href="https://www.happydigitalbharat.com/" className="flex items-center space-x-2 text-xl font-semibold">
            <img src={logo} alt="Logo" className="h-9 w-25" />
            {/* <span>Happy Digital Bharat</span> */}
          </a>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg mx-auto">
          <Link to="/home" className="hover:text-gray-300 text-2xl font-serif">Home</Link>
          <Link to="/course" className="hover:text-gray-300 text-2xl font-serif">Course</Link>
          <Link to="/about" className="hover:text-gray-300 text-2xl font-serif">About Us</Link>
        </div>

        {/* Right: Sign In / Login */}
        <div className="space-x-4 text-sm md:text-base">
          <Link to="/signin" className="hover:text-gray-300 text-2xl font-serif">Sign In</Link>
          <Link to="/login" className="hover:text-gray-300 text-2xl font-serif">Login</Link>
        </div>
      </nav>
    </header>
 
  )
}

export default Header
