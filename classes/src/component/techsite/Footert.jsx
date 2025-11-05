import React, { useState } from "react";
import logo from "../assets/withg20.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Footert= () => {
  const [playVideo, setPlayVideo] = useState(false);
  const  navigate=useNavigate();

//   const handleFooterAbutus=(e)=>{
//       e.preventDefault();
//         navigate("/footeraboutus")
//       window.scrollTo(0, 0);
//   }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About/Logo Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <a
                  href="#"
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-30  from-blue-500 to-purple-600  flex items-center justify-center">
                    <img src={logo} alt="Happy Digital Bharat" />
                  </div>
                  {/* <span className="text-xl font-bold">Happy Digital Bharat</span> */}
                </a>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Indresh Kumar, also known as Rahul Maurya, is the visionary
                Founder and CEO of Happy Digital Bharat, dedicated to empowering
                digital transformation across India.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">
                Follow Us
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.facebook.com/rahulbai.mauryaji?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/happy_digital_bharat?igsh=MWt3OWRud3I5OHJkYg=="
                    target="_blank"
                    rel="noopener"
                    className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323C6.001 8.165 7.152 7.675 8.449 7.675s2.448.49 3.323 1.418c.927.875 1.418 2.026 1.418 3.323s-.491 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.138 0c-1.297 0-2.448-.49-3.323-1.297-.927-.875-1.418-2.026-1.418-3.323s.491-2.448 1.418-3.323c.875-.928 2.026-1.418 3.323-1.418s2.448.49 3.323 1.418c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@HAPPYDIGITALBHARAT?si=PLlgM7jZ2XaX8dk5"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>YouTube</span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:happydigitalbharat@gmail.com"
                    className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z" />
                    </svg>
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 - Featured Video */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Featured Video
            </h3>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                {playVideo ? (
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/eNWR7KC3gYI?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <button
                    onClick={() => setPlayVideo(true)}
                    className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-3 hover:bg-red-700 transition-colors">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300">
                      Click to Watch Video
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4">
              <h4 className="text-sm font-medium mb-2">Total Orders (Last 28 Days)</h4>
              <div className="text-2xl font-bold">24,677</div>
              <div className="text-xs text-blue-100 mt-1">Products delivered successfully</div>
            </div> */}
          </div>

          {/* Column 3 - Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/techsite" },
                { label: "Privacy Policy", href: "/techsite" },
                { label: "Contact Us", href: "/techsite" },
                { label: "Terms & Conditions", href: "/techsite" },
                { label: "About the Founder", href: "/techsite/Indresht" },
                { label: "Organization Structure", href: "/techsite" },
                { label: "Innovative Ideas E-Books", href: "https://happydigitalbharatcom.blogspot.com/" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Help & Support Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                Help & Support
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Advertise", href: "/advertising" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Terms of Use", href: "/terms" },
                  { label: "Support", href: "/support" },
                  { label: "Documentation", href: "/documentation" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4 - Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Reach Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div className="text-gray-300 text-sm">
                  <div className="font-medium mb-1">Main Office:</div>
                  <div>
                    Madhupur, Robertsganj, Sonbhadra, Uttar Pradesh, India
                  </div>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div className="text-gray-300 text-sm">
                  <div className="font-medium mb-1">2nd Branch:</div>
                  <div>Koladit, Khandwa, Madhya Pradesh, India</div>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div className="text-gray-300 text-sm space-y-1">
                  <a
                    href="tel:+918957445211"
                    className="block hover:text-white transition-colors"
                  >
                    +91 8957445211
                  </a>
                  <a
                    href="tel:+918081739493"
                    className="block hover:text-white transition-colors"
                  >
                    +91 8081739493
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:happydigitalbharat@gmail.com"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  happydigitalbharat@gmail.com
                </a>
              </li>
            </ul>
            {/* <div className="mt-6">
              <h1 className="text-blue-400 text-2xl font-semibold">
                Develop By
              </h1>

              <h1 className="text-gray-300 text-2xl mt-3 hover:text-white transition-colors">
                Aravind Sant Singh{" "}
              </h1>
              <span className="font-sans text-sm -mt-2 ">
                {" "}
                (Software Engineer){" "}
              </span>
              <ul className="mt-2">
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a
                    href="mailto:aravindsant563@gmail.com.com"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    aravindsant563@gmail.com
                  </a>
                </li>
                <li className="flex items-start space-x-3 mt-2">
                  <svg
                    className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
    2.76 2.24 5 5 5h14c2.76 0 5-2.24 
    5-5v-14c0-2.76-2.24-5-5-5zm-11 
    19h-3v-10h3v10zm-1.5-11.27c-.96 
    0-1.73-.79-1.73-1.73s.77-1.73 
    1.73-1.73c.95 0 1.73.78 
    1.73 1.73s-.78 1.73-1.73 
    1.73zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.88 
    0-2.17 1.46-2.17 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.76 
    1.38-1.56 2.84-1.56 3.04 0 3.6 
    2 3.6 4.59v5.6z"
                    />
                  </svg>

                  <a
                    href="https://www.linkedin.com/in/aravind-sant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    linkedin.com/in/aravind-sant
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between  items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Happy Digital Bharat. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footert;
