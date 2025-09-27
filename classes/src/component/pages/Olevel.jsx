import { useNavigate } from "react-router-dom";
import o from "../assets/Olevel.jpg"; // update path if needed
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

export default function Olevel() {
    const navigate=useNavigate();
     const email=useSelector((state)=>state.email.email)
    // const handOlevel=()=>{
    //   //  window.location.href="https://forms.gle/3y3fVZ5k9z4K8t7U8";
    // //  navigate("/buy");
    // toast.success("comming very  soon...")
    //     window.scrollTo(0, 0);
    // }
    const handlOBuy=(e)=>{
    e.preventDefault();
      if (!email) {
     navigate("/login");
     toast.success("If you want ot buy Course , Please login to continue..");
     return;
      }
    window.open("https://pages.razorpay.com/pl_RIVypWEQgPYGDw/view", "_blank", "noopener,noreferrer");
   // navigate("/olevel");
     }
  return (
    <>
    <div className="justify-center items-center flex bg-[oklch(86.9%_0.022_252.894)]">

    
    <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden max-w-2xl w-full flex flex-col mx-auto my-6">
      
      {/* Course Image */}
      <img
        src={o}
        alt="O Level"
        className="w-full h-1/2 object-cover"
      />

      {/* Course Details */}
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
          📚 O Level Online Course
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          🎉 <span className="font-semibold">Special Offer</span> – Only{" "}
          <span className="text-yellow-600 font-bold">₹499/month</span>
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
            <li>
              Certificate: Government-recognized certificate on successful
              completion
            </li>
          </ul>
        </div>

        {/* Course Books / Modules */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">📖 Course Books / Modules</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">1. IT Tools & Business Systems</span>
              <ul className="list-disc pl-6 space-y-1">
                <li>Basics of Computers</li>
                <li>MS Office (Word, Excel, PowerPoint)</li>
                <li>Operating Systems (Windows/Linux basics)</li>
                <li>Internet & Productivity Tools</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">2. Web Design & Development</span>
              <ul className="list-disc pl-6 space-y-1">
                <li>HTML fundamentals</li>
                <li>CSS styling basics</li>
                <li>JavaScript basics</li>
                <li>Building simple web pages & forms</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">3. Programming in Python</span>
              <ul className="list-disc pl-6 space-y-1">
                <li>Python fundamentals</li>
                <li>Logic building & flow control</li>
                <li>Functions & basic data handling</li>
                <li>Mini projects for hands-on practice</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">
                4. Internet of Things (IoT) & Emerging Technologies
              </span>
              <ul className="list-disc pl-6 space-y-1">
                <li>IoT concepts & architecture</li>
                <li>Sensors, actuators & applications</li>
                <li>Cloud & smart devices overview</li>
                <li>Future technology trends</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* What You Get */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">✅ What you get</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Live interactive classes + recordings to replay</li>
            <li>Assignments, quizzes and mini-projects</li>
            <li>Personal doubt-clearing sessions (scheduled)</li>
            <li>Monthly fee plan — ₹499/month</li>
            <li>Final assessment & certificate after course completion</li>
          </ul>
        </div>

        {/* Enrollment */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">📌 How to enroll</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Fill the enrollment form (link/button below)</li>
            <li>Pay ₹499 for the first month to confirm your seat</li>
            <li>Batch starts on September 15, 2025 — 8:45 PM IST</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">📞 Contact / Support</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Email: happydigitalbharat@gmail.com</li>
            <li>Phone / WhatsApp: +91-8957445211</li>
          </ul>
        </div>
         <div className="justify-center items-center ">
          <button onClick={handlOBuy}
            type="button"
            className="text-white animate-blink 
              rounded-lg text-sm px-5  py-2.5 text-center mb-2 hover:bg-blue-800"
          >
            Buy Now
          </button>
         </div>
       

        {/* Course Fee */}
        <div className="bg-teal-100 p-4 mt-4  rounded-lg text-center">
            <button 
            onClick={handlOBuy}
            className="w-full h-full">
          <p className="text-lg font-bold text-gray-800">
            💰 Course Fee:{" "}

            <span className="text-red-500 text-2xl">₹499/-</span> per month
            (Approx. 8 months)
          </p>
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
