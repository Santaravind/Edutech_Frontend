import React, { useState } from 'react'
import acmc from '../assets/class1.jpg'
import o from '../assets/Olevel.jpg'
import ccc from '../assets/CCC.png'
import doute from '../assets/liveclass.jpg'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useSelector} from 'react-redux';
function Home() {
  const navigate=useNavigate();
  
  //const[oDetails,setODetails]=useState(false);
  const email=useSelector((state)=>state.email.email)
  
  const handalClick = (e)=>{
    e.preventDefault();
    navigate('/ccourse') 
   }
   //O Level 
const handalOBuy=(e)=>{
  e.preventDefault();
   if (!email) {
      navigate("/login");
     toast.success("If you want ot buy Course , Please login to continue..");
      return;
    }
  window.open("https://pages.razorpay.com/pl_RIVypWEQgPYGDw/view", "_blank", "noopener,noreferrer");
      }

//Arduino 
   const handalABuy=(e)=>{
  e.preventDefault();
     if (!email) {
       navigate("/login");
        toast.success("If you want ot buy Course , Please login to continue..");
      return;
    }
  window.open("https://pages.razorpay.com/pl_RIuyYDY4CVwUQ4/view", "_blank", "noopener,noreferrer");
      }

      //CCC
const handalCBuy=(e)=>{
  e.preventDefault();
   if (!email) {
       navigate("/login");
       toast.success("If you want ot buy Course , Please login to continue..");
      return;
    }
  window.open("https://pages.razorpay.com/pl_RIur6XLWzRsxQh/view", "_blank", "noopener,noreferrer");
      }


          //Doute course
const handalCDoute=(e)=>{
  e.preventDefault();
   if (!email) {
       navigate("/login");
       toast.success("If you want ot buy Course , Please login to continue..");
      return;
    }
  window.open("https://pages.razorpay.com/pl_RR4RFAufqyCYHB/view", "_blank", "noopener,noreferrer");
      }

   const handalAclick=(e)=>{
    e.preventDefault();
    // toast.success("click audin")
    navigate('/arduino')
   }

   const handalOlevel=(e)=>{
    e.preventDefault();
    navigate("/olevel")
   }

   const handalDoute=(e)=>{
    e.preventDefault();
    navigate("/doute")
   }
  return (
    <div className='min-h-screen bg-gray-900 p-2'>
      <div className='container m-auto p-2'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8 text-white'>
          Our Courses
        </h2>
        
        
         <div className="min-h-screen text-white grid grid-cols-1 lg:grid-cols-3 gap-3   p-2  items-center justify-center">
          {/* {adinp course} */}
      <div className="bg-white  m-1 text-black rounded-2xl ml-2 shadow-lg overflow-hidden max-w-2xl w-full  flex flex-col h-full">
        
        {/* Course Image */}
        <img
          src={acmc}
          alt="Arduino Course"
          className="w-full h-82 p-0.5 lg:h-1/2 object-cover"
        />

        {/* Course Details */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">
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

     
       
          <button
            onClick={handalAclick}
            className="bg-[oklch(64.5%_0.246_16.439)] px-5 py-2 rounded-lg hover:bg-[oklch(70.7%_0.165_254.624)] transition"
          >
            Read More
          </button>
       
    <button
        onClick={handalABuy}
        className=" bg-blue-900 text-white hover:bg-yellow-300 hover:text-black ml-3 px-5 py-2 rounded-lg hover:bg-[oklch(70.7%_0.165_254.624)] transition"
      >
        Buy now
      </button>

       
          {/* Course Fee */}
            <div className="bg-teal-100 p-4 mt-2 rounded-lg text-center ">
              <button onClick={handalABuy}>             
              <p className="text-lg font-bold text-gray-800">
                💰 Course Fee:{" "}
                <span className="text-red-500 text-2xl">₹499/-</span> (Full Course)
              </p>
               </button>
            </div>
        </div>
      </div>
          {/* ccc lcours */}
 <div className="bg-white m-1 text-black rounded-2xl ml-2 shadow-lg overflow-hidden max-w-2xl w-full flex flex-col h-full">
  {/* Course Image */}
  <img
    src={ccc}
    alt="ccc "
    className="w-full h-82 p-0.5 lg:h-1/2 object-cover"
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

    <button
        onClick={handalClick}
        className="bg-[oklch(64.5%_0.246_16.439)] px-5 py-2 rounded-lg hover:bg-[oklch(70.7%_0.165_254.624)] transition"
      >
        Read More
      </button>
  
    <button
        onClick={handalCBuy}
        className=" bg-blue-900 text-white hover:bg-yellow-300 hover:text-black ml-3 px-5 py-2 rounded-lg hover:bg-[oklch(70.7%_0.165_254.624)] transition"
      >
        Buy now
      </button>
    

    {/* Course Fee */}
    <div className="bg-teal-100 p-4 mt-2 rounded-lg text-center">
      <button  onClick={handalCBuy}>
      <p className="text-lg font-bold text-gray-800">
        💰 Course Fee:{" "}
        <span className="text-red-500 text-2xl">₹999/-</span> (Full Course – 90
        Days)
      </p>
      </button>
    </div>
  </div>
</div>

          {/* O Level course */}
      <div className="bg-white m-1 text-black rounded-2xl ml-2 shadow-lg overflow-hidden max-w-2xl w-full flex flex-col h-full">
  {/* Course Image */}
  <img
    src={o}
    alt="O Level"
    className="w-full h-82  object-cover"
  />

  {/* Course Details */}
  <div className="p-8">
    <h2 className="text-3xl font-bold text-teal-700 mb-4">
      📚 O Level Online Course
    </h2>

    <p className="text-lg text-gray-700 mb-6">
      🎉 <span className="font-semibold">Special Offer</span> – Only{" "}
      <span className="text-yellow-600 font-bold ">₹499/month</span>
    </p>

    {/* Course Details */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">🗓 Course Details</h3>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Course start: September 15, 2025</li>
        <li>Class time (IST): 8:45 PM — 10:00 PM (Every class / Batch)</li>
        <li>Price: ₹499 / month</li>
        <li>Duration: Approx. 8 months</li>
        <li>Mode: 100% Online (Live + Recorded sessions)</li>
        <li>Certificate: Government-recognized certificate on successful completion</li>
      </ul>
    </div>

    {/* Read More Button */}
    
      <button
        onClick={handalOlevel}
        className="bg-[oklch(64.5%_0.246_16.439)] px-5 py-2 rounded-lg hover:bg-[oklch(70.7%_0.165_254.624)] transition"
      >
        Read More
      </button>
  
 <button
        onClick={handalOBuy}
        className=" bg-blue-900 text-white hover:bg-yellow-300 hover:text-black ml-3 px-5 py-2 rounded-lg hover:bg-[oklch(70.7%_0.165_254.624)] transition"
      >
        Buy now
      </button>
    {/* Extra Details (shown only when "Read More" is clicked) */}
    

    {/* Course Fee */}
   <div className="bg-teal-100 p-4 mt-2 rounded-lg text-center ">
      <button  onClick={handalOBuy}>
      <p className="text-lg font-bold text-gray-800">
        💰 Course Fee:{" "}
        <span className="text-red-500 text-2xl">₹499/-</span> (Per Months)
      </p>
      </button>
    </div>
  </div>
</div>

{/* //Doute class */}
<div className="bg-white m-1 text-black rounded-2xl ml-2 shadow-lg overflow-hidden max-w-2xl w-full flex flex-col h-full">
  {/* Course Image */}
  <img
    src={doute}
    alt="live doute class "
    className="w-full h-82  object-cover"
  />

  {/* Course Details */}
 <div className="p-8">
  <h2 className="text-3xl font-bold text-teal-700 mb-4">
    📚 Live Doubt Class
  </h2>

  <p className="text-lg text-gray-700 mb-6">
    🎉 <span className="font-semibold">Special Offer</span> - Only {" "}
    <span className="text-yellow-600 font-bold"> ₹99 /per monrh</span>
  </p>

  {/* Course Details */}
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">🗓 Course Details</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      <li>🎯 <span className="font-semibold">Course Name:</span> Happy Digital Bharat Live Doubt Class</li>
      <li>🎥 <span className="font-semibold">Mode:</span> Online (Live Video Call)</li>
      <li>👨‍🏫 <span className="font-semibold">Faculty:</span> Expert Tutors from Different Subjects</li>
      {/* <li>🕒 <span className="font-semibold">Duration:</span> Monthly Subscription (20 Live Sessions per month)</li>
      <li>💰 <span className="font-semibold">Fee:</span> ₹99/- Only per month</li>
      <li>📜 <span className="font-semibold">Certificate:</span> Government-recognized certificate on completion</li> */}
    </ul>
  </div>

  {/* Highlights */}
  {/* <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">🔍 Course Highlights / Features</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      <li>✅ हर Subject के लिए Separate Doubt Session</li>
      <li>✅ Direct Video Call पर Question पूछने की सुविधा</li>
      <li>✅ Real-time Solution – कोई भी सवाल बिना इंतज़ार के</li>
      <li>✅ 1-to-1 Interaction with Expert Tutor</li>
      <li>✅ Study Tips & Guidance हर Class में</li>
      <li>✅ Daily Flexible Timing – अपनी सुविधा के हिसाब से Join करें</li>
      <li>✅ Recorded Backup Classes (optional)</li>
    </ul>
  </div> */}

  {/* How to Join */}
  {/* <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">📲 How to Join</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      <li>⿡ Visit 👉 <a href="https://www.happydigitalbharat.com" target="_blank" className="text-blue-600 hover:underline">www.happydigitalbharat.com</a></li>
      <li>⿢ Click on <span className="font-semibold">Live Doubt Class – Join Now</span></li>
      <li>⿣ Fill your Details & Pay ₹99/-</li>
      <li>⿤ Get your Access Link on WhatsApp</li>
    </ul>
  </div> */}

  {/* Contact Section */}
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">📞 For Support / Query</h3>
    <p className="text-gray-700">📧 <a href="mailto:happydigitalbharat@gmail.com" className="text-blue-600 hover:underline">happydigitalbharat@gmail.com</a></p>
    <p className="text-gray-700">📱 +91-8957445211</p>
  </div>

  {/* Buttons */}
  <div className="flex gap-3">
    <button
      onClick={handalDoute}
      className="bg-[oklch(64.5%_0.246_16.439)] px-5 py-2 rounded-lg hover:bg-[oklch(70.7%_0.165_254.624)] transition"
    >
      Read More
    </button>

    <button
      onClick={handalOBuy}
      className="bg-blue-900 text-white hover:bg-yellow-300 hover:text-black px-5 py-2 rounded-lg transition"
    >
      Buy Now
    </button>
  </div>

  {/* Course Fee Box */}
  <div className="bg-teal-100 p-4 mt-4 rounded-lg text-center">
    <button onClick={handalCDoute}>
      <p className="text-lg font-bold text-gray-800">
        💰 Course Fee:{" "}
        <span className="text-red-500 text-2xl">₹99/-</span> (Only per month)
      </p>
    </button>
  </div>
</div>

  
</div>
    </div> 
 
        {/* Optional: Add a call-to-action section */}
        {/* <div className='mt-12 text-center'>
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
        </div> */}
      </div>
    </div>
  )
}

export default Home
