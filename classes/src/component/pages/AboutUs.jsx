import React, { useEffect, useState } from 'react'
import { FaCertificate, FaChalkboardTeacher, FaPenFancy, FaQuestionCircle } from 'react-icons/fa';

function AboutUs() {
  const texts = [
    { icon: <FaChalkboardTeacher />, text: 'Live Classes with India’s Top Educators' },
    { icon: <FaPenFancy />, text: 'Mock Tests & Practice Series Included' },
    { icon: <FaCertificate />, text: 'Free Certificates After Every Course' },
    { icon: <FaQuestionCircle />, text: 'Get Doubts Solved in Real-Time' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === texts.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    window.open("https://www.happydigitalbharat.com/", "_blank");
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12 px-4 md:px-16 rounded-b-3xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-4">
              India’s Most Trusted <br /> Live Educational Platform
            </h1>
            <p className="mb-6 text-lg">
              Live Classes, Mock Tests, <strong>Courses</strong>, and All In One Place
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg font-medium hover:bg-yellow-500 transition">
                Join Free Class
              </button>
              <button className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                View Courses
              </button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg"
            alt="Online Education"
            className="w-full md:w-1/2 mb-8 md:mb-0 rounded-lg"
          />
        </div>
      </section>

      {/* Auto Slider */}
      <div className="w-full h-20 flex items-center justify-center bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white text-lg font-medium">
        <div className="flex items-center gap-3">
          <span className="text-xl">{texts[currentIndex].icon}</span>
          <span>{texts[currentIndex].text}</span>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="py-12 px-4 md:px-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Why Choose Our Live Classes?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-indigo-100 p-6 rounded-lg shadow-sm">
            <div className="text-indigo-700 text-5xl mb-2">🧠</div>
            <p className="font-medium">Real-time Doubt Solving</p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-sm">
            <div className="text-indigo-700 text-5xl mb-2">👨‍🏫</div>
            <p className="font-medium">Expert Teachers</p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-sm">
            <div className="text-indigo-700 text-5xl mb-2">🎥</div>
            <p className="font-medium">Class Recordings Available</p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-sm">
            <div className="text-indigo-700 text-5xl mb-2">📚</div>
            <button onClick={handleBook} className="mt-4 text-indigo-700 underline">Buy Books</button>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="bg-white py-12 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Teachers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-indigo-50 rounded-xl shadow-lg p-6 text-center border-2 border-indigo-600">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Admin" className="w-28 h-28 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-indigo-700">Mr. Rakesh Sharma</h3>
            <p className="text-sm text-gray-600">M.Sc. Physics, B.Ed</p>
            <span className="mt-2 inline-block bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">Admin Teacher</span>
          </div>
          <div className="bg-indigo-50 rounded-xl shadow-md p-6 text-center">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Teacher" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold">Ms. Priya Verma</h3>
            <p className="text-sm text-gray-600">M.A. English Literature</p>
          </div>
          <div className="bg-indigo-50 rounded-xl shadow-md p-6 text-center">
            <img src="https://randomuser.me/api/portraits/men/47.jpg" alt="Teacher" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold">Mr. Aman Tiwari</h3>
            <p className="text-sm text-gray-600">M.Tech Computer Science</p>
          </div>
          <div className="bg-indigo-50 rounded-xl shadow-md p-6 text-center">
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Teacher" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold">Ms. Kavita Reddy</h3>
            <p className="text-sm text-gray-600">MBA, B.Ed</p>
          </div>
        </div>
      </section>
    </div>
  );
}


export default AboutUs
