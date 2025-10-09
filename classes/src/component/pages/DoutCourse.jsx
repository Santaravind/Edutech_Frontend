
import React from "react";
import doute from '../assets/liveclass.jpg'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

const DoutCourse = () => {
   const navigate=useNavigate();
    const email=useSelector((state)=>state.email.email)
    const handlClick=(e)=>{
        e.preventDefault();
        if(!email){
          navigate("/login");
          toast.success("If you want ot buy Course , Please login to continue..");
          return;
        }
        window.open("https://pages.razorpay.com/pl_RR4RFAufqyCYHB/view", "_blank", "noopener,noreferrer");
      }

    //CCC 
     const handaldoute=(e)=>{
  e.preventDefault();
   if(!email){
          navigate("/login");
          toast.success("If you want ot buy Course , Please login to continue..");
          return;
        }
  window.open("https://pages.razorpay.com/pl_RR4RFAufqyCYHB/view", "_blank", "noopener,noreferrer");
      }
     

  return (
    <>
    <div className="justify-center items-center flex bg-[oklch(86.9%_0.022_252.894)]">

    
    <div className="bg-white m-1 text-black rounded-2xl ml-2 shadow-lg overflow-hidden max-w-2xl w-full flex flex-col">
      {/* Course Image */}
      <img
        src={doute}
        alt="doute class"
        className="w-full h-1/2 p-0.5 lg:h-1/2 object-cover"
      />

      {/* Course Details */}
     
<div className="p-8">
  <h2 className="text-3xl font-bold text-teal-700 mb-4">
    📘 Live Doubt Class
  </h2>

  <p className="text-lg text-gray-700 mb-6">
    🎉 <span className="font-semibold">Special Offer</span> - Only{" "}
    <span className="text-yellow-600 font-bold">₹99/-</span> per month
  </p>

  {/* Course Details */}
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2"> Course Details</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      <li>🎯 <span className="font-semibold">Course Name:</span> Happy Digital Bharat Live Doubt Class</li>
      <li>🎥 <span className="font-semibold">Mode:</span> Online (Live Video Call)</li>
      <li>👨‍🏫 <span className="font-semibold">Faculty:</span> Expert Tutors from Different Subjects</li>
      <li>🕒 <span className="font-semibold">Duration:</span> Monthly Subscription (20 Live Sessions per month)</li>
      <li>💰 <span className="font-semibold">Fee:</span> ₹99/- Only per month</li>
    </ul>
  </div>

  {/* Course Highlights / Features */}
  <div className="mb-6 mt-6">
    <h3 className="text-xl font-semibold mb-2">🔍 Course Highlights / Features</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      <li>✅ हर Subject के लिए Separate Doubt Session</li>
      <li>✅ Direct Video Call पर Question पूछने की सुविधा</li>
      <li>✅ Real-time Solution - कोई भी सवाल बिना इंतज़ार के</li>
      <li>✅ 1-to-1 Interaction with Expert Tutor</li>
      <li>✅ Study Tips & Guidance हर Class में</li>
      <li>✅ Daily Flexible Timing -  अपनी सुविधा के हिसाब से Join करें</li>
      <li>✅ Recorded Backup Classes (optional)</li>
    </ul>
  </div>

  {/* How to Join */}
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">📲 How to Join</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      {/* <li> Visit 👉 <a href="https://www.happydigitalbharat.com" target="_blank" className="text-blue-600 hover:underline">www.happydigitalbharat.com</a></li> */}
      <li> Click on <span className="font-semibold">Live Doubt Class-Join Now</span></li>
      <li> Fill your Details & Pay ₹99/only-</li>
      <li>Get your Access Link on WhatsApp</li>
    </ul>
  </div>

  {/* Contact Section */}
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">📞 For Support / Query</h3>
    <p className="text-gray-700">
      📧 <a href="mailto:happydigitalbharat@gmail.com" className="text-blue-600 hover:underline">
        happydigitalbharat@gmail.com
      </a>
    </p>
    <p className="text-gray-700">📱 +91-8957445211</p>
  </div>

  {/* Buy Button */}
  <div className="flex justify-center items-center mt-6">
    <button
      onClick={handaldoute}
      type="button"
      className="text-white bg-blue-700 animate-blink hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center mb-2 transition"
    >
      Buy Now
    </button>
  </div>

  {/* Course Fee */}
  <div className="bg-teal-100 p-4 mt-2 rounded-lg text-center hover:bg-blue-600 transition">
    <button onClick={handaldoute}>
      <p className="text-lg font-bold text-gray-800">
        💰 Course Fee:{" "}
        <span className="text-red-500 text-2xl">₹99/-</span> per month
      </p>
    </button>
  </div>
</div>

    </div>
    </div>
    </>
  );
};

export default DoutCourse;


