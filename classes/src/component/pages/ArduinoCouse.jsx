import toast from 'react-hot-toast';
import acmc from '../assets/class1.jpg'; // update path
import { useNavigate } from "react-router-dom";

export default function ArduinoCouse() {
   const navigate=useNavigate();
    const handalClick=(e)=>{
        e.preventDefault();
        window.open("https://pages.razorpay.com/pl_RIuyYDY4CVwUQ4/view", "_blank", "noopener,noreferrer");
      }

       //Arduino 
   const handalABuy=(e)=>{
  e.preventDefault();
  window.open("https://pages.razorpay.com/pl_RIuyYDY4CVwUQ4/view", "_blank", "noopener,noreferrer");
      }
  return (
    <>    <div className='bg-[oklch(86.9%_0.022_252.894)]'> 
    <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden max-w-2xl w-full flex flex-col mx-auto my-6">
      
      {/* Course Image */}
      <img
        src={acmc}
        alt="Arduino Course"
        className="w-full h-1/2 object-cover"
      />

      {/* Course Details */}
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
          🤖 Arduino Coding – Master Class
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          🎉 <span className="font-semibold">Special Offer</span> – Only{" "}
          <span className="text-yellow-600 font-bold">₹499/-</span>
        </p>

        {/* Course Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">🗓 Course Details</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Course Name: Arduino Coding Master Class</li>
            <li>Duration: 30 Days (1 Month)</li>
            <li>Starting Date: 25th September</li>
            <li>Class Time: 10:00 PM – 11:30 PM</li>
            <li>Mode: Online Live Classes</li>
          </ul>
        </div>

        {/* Special Features */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">✨ Special Features</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>💻 Software & Coding</li>
            <li>🔌 Hardware & Pin Details</li>
            <li>⚡ Circuit Diagram Installation</li>
            <li>🛠 Make Your Own Science Projects</li>
          </ul>
        </div>

        {/* What You Will Learn */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">📚 What You Will Learn</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Arduino IDE & Coding Basics</li>
            <li>Interfacing Sensors & Modules</li>
            <li>Circuit Design & Connections</li>
            <li>Project-Based Learning (Mini + Major Projects)</li>
            <li>Science Exhibition Level Projects</li>
          </ul>
        </div>

            <div className="justify-center items-center ">
          <button onClick={handalABuy}
            type="button"
            className="text-white animate-blink 
              rounded-lg text-sm px-5  py-2.5 text-center mb-2 hover:bg-blue-800"
          >
            Buy Now
          </button>
         </div>
        {/* Course Fee */}
        <div className="bg-teal-100 p-4 mt-4 rounded-lg text-center">
          <button onClick={handalClick}>
          <p className="text-lg font-bold text-gray-800">
            💰 Course Fee:{" "}
            <span className="text-red-500 text-2xl">₹499/-</span> (Full Course)
          </p>
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
