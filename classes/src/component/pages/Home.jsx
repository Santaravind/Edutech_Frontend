import React, { useEffect, useState } from 'react'
import { FaChalkboardTeacher, FaPenFancy, FaCertificate, FaQuestionCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import ceo from '../assets/ceo.jpg'
import diologY from '../assets/Biologi.jpg'
import rites from '../assets/ritesh.jpg'
import sant from '../assets/Sant.png'
import css from '../assets/Course1.png'
import html from '../assets/Course2.png'
import chs from '../assets/CHS.png'
// import ceo from '../assets/Indresh_Singh.jpg'

function Home() {
  const navigate=useNavigate();
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

     const handleCourse=(e)=>{
      e.preventDefault();
      navigate("/course");
      window.scrollTo(0, 0);

     }



  return (
    <>
   
     
    <div className="font-sans  text-gray-900">
      {/* Hero Section */}
      {/* <section className="bg-green-300 mt-3 py-12 px-4 md:px-16 rounded-b-3xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-4">
              India’s Most Trusted <br /> Live Educational Platform
            </h1>
            <p className="mb-6 text-lg text-gray-700">
              Live Classes, Mock Tests, <strong>Courses</strong>, and All In One Place
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-800 transition">Join Free Class</button>
              <button className="border border-blue-600 text-white px-5 bg-red-400 py-2 rounded-lg font-medium hover:bg-blue-600 transition">View Courses</button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg" // replace with your own if needed
            alt="Online Education"
            className="w-full md:w-1/2 mb-8 md:mb-0"
          />
        </div>
      </section> */}
        <section className="bg-gray-900 text-white py-12 px-4 md:px-16 rounded-xl m-1 " >
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
              <button className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition" onClick={handleCourse}>
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

     {/* {slider section} */}
     <div className="w-full h-20 flex items-center justify-center bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white text-lg font-medium m-1 rounded-lg mr-1">
      <div className="flex items-center gap-3 transition-opacity duration-700 ease-in-out">
        <span className="text-xl">{texts[currentIndex].icon}</span>
        <span>{texts[currentIndex].text}</span>
      </div>
    </div>

      {/* Why Choose Section */}
     <section className="py-12 px-4 md:px-16 text-center bg-gray-900 text-white mt-0.5 mb-0.5">
  <h2 className="text-2xl font-bold mb-8 ">Why Choose Our Live Classes?</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 p-6 rounded-lg shadow-sm text-white text-3xl">
      <div className="text-yellow-400 text-6xl mb-2">🧠</div>
      <p className="font-medium ">Real-time Doubt Solving</p>
    </div>
     <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 p-6 rounded-lg shadow-sm text-white text-3xl">
      <div className="text-blue-600 text-6xl mb-2">👨‍🏫</div>
      <p className="font-medium">Expert Teachers</p>
    </div>
     <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 p-6 rounded-lg shadow-sm text-white text-3xl">
      <div className="text-blue-600 text-6xl mb-2">🎥</div>
      <p className="font-medium">Class Recordings Available</p>
    </div>
    <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 p-6 rounded-lg shadow-sm text-white text-3xl " >
      <div className="text-blue-600 text-6xl mb-2">📚 </div>
       <p className="font-medium mt-6 hover:bg-white rounded-xl p-1 hover:text-blue-800">
    <button onClick={handleBook}>Buy Books</button>
  </p>
    </div>
  </div>
</section>


      {/* Our Courses */}

<section className="bg-gray-900 py-5 px-3 md:px-16 mt-0.5 mb-0.5">
  <h1 className="text-4xl font-sans font-bold text-center mb-7 text-white ">Our Courses</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
    {/* Course Card */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col">
      {/* Image */}
      <img
        // src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg"
        src={css}
        alt="CSS Course"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">CSS</h1>
          <h3 className="text-md mb-2">Cascading Style Sheets</h3>
          <p className="text-sm mb-1">💰 Rs.3000</p>
          <p className="text-sm">📅 Start Date: 2025/July/01</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Buy Now
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
     <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col">
      {/* Image */}
      <img
        // src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg"
        src={html}
        alt="CSS Course"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">HTML</h1>
          <h3 className="text-md mb-2">Cascading Style Sheets</h3>
          <p className="text-sm mb-1">💰 Rs.3000</p>
          <p className="text-sm">📅 Start Date: 2025/July/01</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Buy Now
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
    
     <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col">
      {/* Image */}
      <img
        src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg"
        alt="CSS Course"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">CSS</h1>
          <h3 className="text-md mb-2">Cascading Style Sheets</h3>
          <p className="text-sm mb-1">💰 Rs.3000</p>
          <p className="text-sm">📅 Start Date: 2025/July/01</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Buy Now
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
     <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col">
      {/* Image */}
      <img
        // src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg"
        src={chs}
        alt="CSS Course"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">CSS</h1>
          <h3 className="text-md mb-2">Cascading Style Sheets</h3>
          <p className="text-sm mb-1">💰 Rs.3000</p>
          <p className="text-sm">📅 Start Date: 2025/July/01</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Buy Now
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            View Details
          </button>
        </div>
      </div>
       
    </div>
     <div className='justify-center items-center'>
        <h1 className='text-blue-700 font-sans text-3xl  text-center   justify-center items-center font-semibold '> <button className='border-2 p-2 rounded-xl text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium  border-teal-100 hover:bg-white' onClick={handleCourse}> More Courses </button>  </h1>
     </div>
    
  </div>
 
</section>
    
    {/* Teachers */}
    <section className="bg-gray-800 py-12 px-4 md:px-16 mt-0.5 mb-0.5">
  <h2 className="text-3xl font-bold text-center mb-10 text-blue-700 font-sans ">Our Teachers</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    
    {/* Admin Teacher */}
    <div className="bg-violet-400 rounded-xl shadow-lg p-6 text-center border-2 border-violet-600">
      <img
         src={ceo}
        alt="Admin CEO"
        className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-blue-700">Mr. Indresh Kumar(Rahul)</h3>
      <p className="text-sm text-gray-600"> Founder & CEO </p>
      <span className="mt-2 inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Admin Teacher</span>
    </div>

    {/* Teacher 1 */}
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-violet-400">
      <img
        
        src={diologY}
        alt="Teacher"
        className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold">Mr. </h3>
      <p className="text-sm text-gray-600">Co Founder & Biology Teacher</p>
    </div>

    {/* Teacher 2 */}
    <div className="bg-white rounded-xl shadow-md p-6 text-center  hover:bg-violet-400">
      <img
     
        src={rites}
        alt="Teacher"
        className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold">Mr.Ritesh Kumar</h3>
      <p className="text-sm text-gray-600">Co Founder & Teacher</p>
    </div>

      {/* Teacher3 */}
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-red-500">
      <img
         src={sant}
        alt="Teacher"
        className="w-24 h-24 mx-auto rounded-full mb-5 object-cover"
      />
      <h3 className="text-lg font-semibold">Aravind Sant Singh</h3>
      <p className="text-sm text-gray-600">Bachelor in computer Science</p>
    </div>
  </div>
</section>



      {/* About Section */}
      <section className="py-12 px-4 md:px-16 text-center bg-gray-800 mt-0.5 mb-0.5">
        <h2 className="text-2xl font-bold mb-8 text-blue-700 font-sans ">About </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: 'Meenakshi',
              text: 'Itarichew speak able and never tellingiciclete.',
              tag: 'Free',
            },
            {
              name: 'Ravi',
              text: 'The rider eno-e stimuld with excellent Finns.',
              tag: 'Raii',
            },
            {
              name: 'Sneha',
              text: 'Anuby treriserviciding experience user.',
              tag: 'Spiha',
            },
            {
              name: 'Sianthia',
              text: 'Heapy and sometiment with volusabler.',
              tag: 'Sneha',
            },
          ].map((person, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={`https://randomuser.me/api/portraits/women/${index + 10}.jpg`}
                alt={person.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-lg">{person.name}</h4>
              <div className="text-yellow-500 my-1">★★★★★</div>
              <p className="text-sm text-gray-600">‘{person.text}’</p>
              <p className="text-blue-600 font-medium mt-2">{person.tag}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  


 
    </>
  )
}

export default Home
