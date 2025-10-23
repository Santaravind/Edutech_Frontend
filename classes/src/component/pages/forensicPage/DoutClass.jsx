import React from "react";
 import doute from '../../assets/forensicdout.jpg'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

const DoutClass = () => {
   const navigate=useNavigate();
    const email=useSelector((state)=>state.email.email)
    
    const handaldoute=(e)=>{
        e.preventDefault();
        if(!email){
          navigate("/login");
          toast.success("If you want to buy Course, Please login to continue..");
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
          alt="Forensic Science Doubt Class"
          className="w-full h-1/2 p-0.5 lg:h-1/2 object-cover"
        />

        {/* Course Details */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">
            🧬 Forensic Science Live Doubt Class
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            🎉 <span className="font-semibold">Special Offer</span> - Only{" "}
            <span className="text-yellow-600 font-bold">₹99/-</span> for 90 days
          </p>

          {/* Course Details */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">🎯 Course Details</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>🧬 <span className="font-semibold">Course Name:</span> Forensic Science Live Doubt Class – Happy Digital Bharat</li>
              <li>🎥 <span className="font-semibold">Mode:</span> Online (Live Video Call)</li>
              <li>👨‍🏫 <span className="font-semibold">Faculty:</span> Expert Tutors of Forensic Science</li>
              <li>🕒 <span className="font-semibold">Duration:</span> 90 Days Subscription (20 Live Sessions per month)</li>
              <li>💰 <span className="font-semibold">Fee:</span> ₹99/- only</li>
            </ul>
          </div>

          {/* Course Highlights / Features */}
          <div className="mb-6 mt-6">
            <h3 className="text-xl font-semibold mb-2">🔍 Course Highlights / Features</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>✅ Forensic Science के लिए Separate Live Doubt Session</li>
              <li>✅ Direct Video Call पर Question पूछने की सुविधा</li>
              <li>✅ Real-time Solution - कोई भी सवाल बिना इंतज़ार के</li>
              <li>✅ 1-to-1 Interaction with Expert Forensic Faculty</li>
              <li>✅ Study Tips & Guidance हर Class में</li>
              <li>✅ Daily Flexible Timing - अपनी सुविधा के हिसाब से Join करें</li>
              <li>✅ Recorded Backup Classes (optional)</li>
            </ul>
          </div>

          {/* How to Join */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">📲 How to Join</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li> Visit 👉 <a href="https://www.happydigitalbharat.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.happydigitalbharat.com</a></li>
              <li> Click on <span className="font-semibold">"Forensic Science Doubt Class - Join Now"</span></li>
              <li> Fill your details & pay ₹99/-</li>
              <li> Get your Access Link on WhatsApp</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">📞 For Support / Query</h3>
            <p className="text-gray-700 mb-2">
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
              className="text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-lg px-8 py-3 text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Join Now - ₹99/-
            </button>
          </div>

          {/* Course Fee Highlight */}
          <div className="bg-gradient-to-r from-teal-100 to-blue-100 p-4 mt-6 rounded-lg text-center border-2 border-teal-300 hover:shadow-md transition-all duration-300">
            <button onClick={handaldoute} className="w-full">
              <p className="text-lg font-bold text-gray-800">
                💰 Course Fee:{" "}
                <span className="text-red-600 text-2xl font-extrabold">₹99/-</span> for 90 days
              </p>
              <p className="text-sm text-gray-600 mt-1">Start your Forensic Science journey today!</p>
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">📚 Note:</span> This course is specifically designed for Forensic Science students covering all topics from basic to advanced level.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default DoutClass
