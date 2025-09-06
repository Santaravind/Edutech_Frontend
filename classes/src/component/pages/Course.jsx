import React from 'react'
import acmc from '../assets/class1.jpg'
import { toast } from 'react-toastify';
function Home() {
  function handleDetail(){
    toast.success("Comming soon !!", {duration:2000})
  }
  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-500 via-purple-200 to-yellow-300 p-2'>
      <div className='container m-auto p-2'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8 text-gray-800'>
          Our Courses
        </h2>
        
        
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 justify-center">
                  {/* Responsive Grid Layout */}
         <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col">
      {/* Image */}
      <img
       
        src={acmc}
        alt="CSS Course"
        className="w-full h-58  object-cover"
      />

      {/* Content */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">ACMC</h1>
          <h3 className="text-md mb-2 font-semibold">Arduino Coding Master Class
          </h3>
          <p className="text-sm mb-1 font-bold text-yellow-500 "> ₹ 499.00</p>
          <p className="text-sm flex "><h3 className='mr-1
           text-red-600 font-semibold font-serif text-[18px]'> 📅 Start Date: </h3>  15/September/2025</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            className="text-white animate-blink 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2 hover:bg-blue-800"
          >
            Buy Now
          </button>

          <button
           onClick={handleDetail}
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
       
        src={acmc}
        alt="CSS Course"
        className="w-full h-58  object-cover"
      />

      {/* Content */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">ACMC</h1>
          <h3 className="text-md mb-2 font-semibold">Arduino Coding Master Class
          </h3>
          <p className="text-sm mb-1 font-bold text-yellow-500 "> ₹ 499.00</p>
          <p className="text-sm flex "><h3 className='mr-1
           text-red-600 font-semibold font-serif text-[18px]'> 📅 Start Date: </h3>  15/September/2025</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            className="text-white animate-blink 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2 hover:bg-blue-800"
          >
            Buy Now
          </button>

          <button
           onClick={handleDetail}
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
       
        src={acmc}
        alt="CSS Course"
        className="w-full h-58  object-cover"
      />

      {/* Content */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">ACMC</h1>
          <h3 className="text-md mb-2 font-semibold">Arduino Coding Master Class
          </h3>
          <p className="text-sm mb-1 font-bold text-yellow-500 "> ₹ 499.00</p>
          <p className="text-sm flex "><h3 className='mr-1
           text-red-600 font-semibold font-serif text-[18px]'> 📅 Start Date: </h3>  15/September/2025</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            className="text-white animate-blink 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2 hover:bg-blue-800"
          >
            Buy Now
          </button>

          <button
           onClick={handleDetail}
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
       
        src={acmc}
        alt="CSS Course"
        className="w-full h-58  object-cover"
      />

      {/* Content */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">ACMC</h1>
          <h3 className="text-md mb-2 font-semibold">Arduino Coding Master Class
          </h3>
          <p className="text-sm mb-1 font-bold text-yellow-500 "> ₹ 499.00</p>
          <p className="text-sm flex "><h3 className='mr-1
           text-red-600 font-semibold font-serif text-[18px]'> 📅 Start Date: </h3>  15/September/2025</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            type="button"
            className="text-white animate-blink 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2 hover:bg-blue-800"
          >
            Buy Now
          </button>

          <button
           onClick={handleDetail}
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
</div>
        
        {/* Optional: Add a call-to-action section */}
        <div className='mt-12 text-center'>
          <div className='bg-white/20 backdrop-blur-sm rounded-2xl p-8 mx-auto max-w-2xl'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Ready to Start Learning?
            </h3>
            <p className='text-gray-700 mb-6'>
              Choose from our wide range of computer courses and advance your career today!
            </p>
            <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200'>
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
