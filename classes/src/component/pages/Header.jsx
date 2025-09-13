import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/withg20.png";
import { Link, useNavigate } from "react-router-dom";
import { Bell } from "lucide-react"; // notification icon
//import { AuthContext } from "../context/AuthContext";

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 const navigate = useNavigate();
    const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const email=useSelector((state)=>state.email.email)

  // Check login state on load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // localStorage.removeItem("authToken");
    // setIsLoggedIn(false);
    dispatch(logout());
    navigate("/login"); // redirect after logout
  };
 

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
          <Link to="/" className="hover:text-black text-2xl font-serif">
            Home
          </Link>
          <Link to="/course" className="hover:text-black text-2xl font-serif">
            Course
          </Link>
          <Link to="/about" className="hover:text-black text-2xl font-serif">
            About Us
          </Link>

          {/* 🔔 Notification only when logged in */}
          {isAuthenticated && (
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="hover:text-gray-300 text-2xl font-serif flex items-center"
              >
                <Bell className="w-6 h-6 " />
                <Link
                  to="/notification"
                  className="block p-1 text-xl font-serif hover:text-black"
                >
                  My Class
                </Link>
              </button>
              {/* Send notification  */}
              {notifOpen && (email==='aravindsant563@gmail.com'|| email==='happydigitalbharat@gmail.com'||email==='mspoojaconstruction02282@gmail.com')&&(
                <div className="absolute mt-2 bg-purple-400 text-black rounded-xl shadow-lg w-40">
                
                  <Link
                    to="/notificationsend"
                    className="block px-4 py-2 bg-rose-500 rounded-xl hover:bg-gray-200"
                  >
                    Send
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Right Side (Login/Logout) */}
        <div className="hidden md:flex space-x-4 text-sm md:text-base">
          {!isAuthenticated ? (
            <>
              <Link
                to="/signin"
                className="hover:text-gray-900 text-2xl font-serif"
              >
                New Student
              </Link>
              <Link
                to="/login"
                className="hover:text-gray-900 text-2xl font-serif "
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="hover:text-black hover:font-bold text-2xl font-serif border-1 rounded-xl p-1  "
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block text-xl font-serif hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/course"
            className="block text-xl font-serif hover:text-gray-300"
          >
            Course
          </Link>
          <Link
            to="/about"
            className="block text-xl font-serif hover:text-gray-300"
          >
            About Us
          </Link>

          {/* 🔔 Notification only if logged in */}
          {isAuthenticated && (
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className=" text-xl font-serif hover:text-gray-300 flex items-center"
              >
                <Bell className="w-6 h-6 mr-2" />
                <Link
                  to="/notification"
                  className="block p-1 text-xl font-serif hover:text-gray-900"
                >
                    My Class
                </Link>
              </button>
              {notifOpen &&(email==='aravindsant563@gmail.com'|| email==='happydigitalbharat@gmail.com')&& (
                <div className="font-serif">
                  <Link
                    to="/notificationsend"
                    className="block text-xl font-serif hover:text-gray-300 bg-blue-700 border-2 border-blue-400 rounded-xl text-center justify-center m-1 p-0.5 hover:bg-blue-900"
                  >
                    Send Notification
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Auth Buttons */}
          {!isAuthenticated ? (
            <>
              <Link
                to="/signin"
                className="block text-xl font-serif hover:text-gray-300 border-2 rounded-xl justify-center text-center p-0.5 hover:bg-black"
              >
               New Student 
              </Link>
              <Link
                to="/login"
                className="block text-xl font-serif hover:text-gray-300 bg-blue-700 border-2 border-blue-400 rounded-xl text-center justify-center m-1 p-0.5 hover:bg-blue-900"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="block text-xl font-serif hover:text-gray-300 bg-blue-700 border-2 border-blue-400 rounded-xl text-center justify-center m-1 p-0.5 hover:bg-blue-900"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;

