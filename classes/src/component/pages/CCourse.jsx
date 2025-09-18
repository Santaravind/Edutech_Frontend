
import React from "react";
import ccc from '../assets/CCC.png'
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const CCourse = () => {
   const navigate=useNavigate();
    const handlClick=(e)=>{
        e.preventDefault();
        window.open("https://pages.razorpay.com/pl_RIur6XLWzRsxQh/view", "_blank", "noopener,noreferrer");
      }

    //CCC 
     const handalCBuy=(e)=>{
  e.preventDefault();
  window.open("https://pages.razorpay.com/pl_RIur6XLWzRsxQh/view", "_blank", "noopener,noreferrer");
      }
     

  return (
    <>
    <div className="justify-center items-center flex bg-[oklch(86.9%_0.022_252.894)]">

    
    <div className="bg-white m-1 text-black rounded-2xl ml-2 shadow-lg overflow-hidden max-w-2xl w-full flex flex-col">
      {/* Course Image */}
      <img
        src={ccc}
        alt="CCC"
        className="w-full h-1/2 p-0.5 lg:h-1/2 object-cover"
      />

      {/* Course Details */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">
          📘 CCC – 90 Days Master Class
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          🎉 <span className="font-semibold">Special Offer</span> – Only{" "}
          <span className="text-yellow-600 font-bold">₹999/-</span>
        </p>

        {/* Course Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">🗓 Course Details</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Course Name: CCC (Course on Computer Concepts)</li>
            <li>Duration: 90 Days (Approx. 3 Months)</li>
            <li>Starting Date: 22nd September</li>
            <li>Class Time: 07:00 PM – 08:30 PM</li>
            <li>Mode: Online Live Classes</li>
          </ul>
        </div>

         

        {/* Extra Details */}
        
          
            {/* Special Features */}
            <div className="mb-6 mt-6">
              <h3 className="text-xl font-semibold mb-2">✨ Special Features</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>📅 Daily Question Practice</li>
                <li>❓ Doubt Clearing Live Class</li>
                <li>📖 Free E-Book</li>
                <li>📝 5 Previous Months Question Solutions</li>
              </ul>
            </div>

            {/* What You Will Learn */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">📚 What You Will Learn</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Basics of Computer & IT</li>
                <li>Operating System & File Management</li>
                <li>MS Office (Word, Excel, PowerPoint)</li>
                <li>Internet, Email & Digital Services</li>
                <li>Practical Assignments & Mock Tests</li>
              </ul>
            </div>
        
              <div className="justify-center items-center ">
          <button onClick={handalCBuy}
            type="button"
            className="text-white animate-blink 
              rounded-lg text-sm px-5  py-2.5 text-center mb-2 hover:bg-blue-800"
          >
            Buy Now
          </button>
         </div>

        {/* Course Fee */}
        <div className="bg-teal-100 p-4 mt-2 rounded-lg text-center hover:bg-blue-600">
          <button onClick={handlClick}>
          
          <p className="text-lg font-bold text-gray-800">
            💰 Course Fee:{" "}
            <span className="text-red-500 text-2xl">₹999/-</span> (Full Course – 90
            Days)
          </p>
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default CCourse;

