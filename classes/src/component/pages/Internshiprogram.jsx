import { useNavigate } from "react-router-dom";
import mca from '../assets/mca.jpeg'
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

 function Internshiprogram() {
    const navigate=useNavigate();
     const email=useSelector((state)=>state.email.email)
    // const handOlevel=()=>{
    //   //  window.location.href="https://forms.gle/3y3fVZ5k9z4K8t7U8";
    // //  navigate("/buy");
    // toast.success("comming very  soon...")
    //     window.scrollTo(0, 0);
    // }
    const handlOBuy=(e)=>{
    // e.preventDefault();
    //   if (!email) {
    //  navigate("/login");
    //  toast.success("If you want ot buy Course , Please login to continue..");
    //  return;
    //   }
    window.open("https://pages.razorpay.com/pl_SDDSHqlINjyj96/view", "_blank", "noopener,noreferrer");
   // navigate("/olevel");
     }
  return (
    <>
    <div className="justify-center items-center flex bg-[oklch(86.9%_0.022_252.894)]">

    
    <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden max-w-2xl w-full flex flex-col mx-auto my-6">
      
      {/* Course Image */}
      <img
        src={mca}
        alt="Internship details image "
        className="w-full h-1/2 object-cover"
      />

      {/* Course Details */}
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
        🔷 INTERNSHIP PROGRAM – BCA / MCA SPECIAL
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          🎉 <span className="font-semibold">Special Offer</span> – Only{" "}
          <span className="text-yellow-600 font-bold">₹779/only</span>
        </p>

{/* Internship Program Details */}
<div className="mb-6">
  <h3 className="text-xl font-semibold mb-2">🗓 Internship Details</h3>
  <ul className="list-disc pl-6 text-gray-700 space-y-1">
    <li>Program: 30-Days IT Internship Program</li>
    <li>Duration: 30 Days</li>
    <li>Fee: ₹779/- only</li>
    <li>Mode: 100% Online</li>
    <li>Guided by: Experienced Trainers</li>
    <li>Certificate: Internship Certificate Provided</li>
  </ul>
</div>

{/* Who Can Apply */}
<div className="mb-6">
  <h3 className="text-xl font-semibold mb-2">🎓 Who Can Apply?</h3>
  <ul className="list-disc pl-6 text-gray-700 space-y-1">
    <li>BCA / MCA Students</li>
    <li>Final Year Students (Project Support Available)</li>
    <li>Freshers starting career in IT</li>
    <li>Students interested in Web & Software Development</li>
  </ul>
</div>

{/* Technologies Covered */}
<div className="mb-6">
  <h3 className="text-xl font-semibold mb-2">💻 Technologies Covered</h3>
  <ul className="list-disc pl-6 text-gray-700 space-y-2">
    <li>
      <span className="font-semibold">Web Development:</span>
      <ul className="list-disc pl-6 space-y-1">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </li>

    <li>
      <span className="font-semibold">Programming Languages:</span>
      <ul className="list-disc pl-6 space-y-1">
        <li>PHP</li>
        <li>Python</li>
        <li>Java</li>
      </ul>
    </li>

    <li>
      <span className="font-semibold">Databases:</span>
      <ul className="list-disc pl-6 space-y-1">
        <li>MySQL</li>
        <li>MongoDB</li>
      </ul>
    </li>

    <li>
      <span className="font-semibold">Frameworks (Basic Level):</span>
      <ul className="list-disc pl-6 space-y-1">
        <li>React</li>
        <li>Django</li>
        <li>Laravel</li>
      </ul>
    </li>
  </ul>
</div>

{/* Program Highlights */}
<div className="mb-6">
  <h3 className="text-xl font-semibold mb-2">🚀 Program Highlights</h3>
  <ul className="list-disc pl-6 text-gray-700 space-y-1">
    <li>100% Practical Training</li>
    <li>Live Project-Based Learning</li>
    <li>Beginner to Intermediate Level</li>
    <li>Industry-Oriented Curriculum</li>
    <li>Doubt Clearing Sessions</li>
    <li>Internship Certificate Provided</li>
  </ul>
</div>

{/* Career Benefits */}
<div className="mb-6">
  <h3 className="text-xl font-semibold mb-2">🎯 Career Benefits</h3>
  <ul className="list-disc pl-6 text-gray-700 space-y-1">
    <li>Strong Resume Building</li>
    <li>Hands-on Programming Experience</li>
    <li>Better Job & Placement Readiness</li>
    <li>Foundation for Freelancing & Startups</li>
  </ul>
</div>

{/* Enrollment Section */}
<div className="mb-6">
  <h3 className="text-xl font-semibold mb-2">📌 How to Enroll</h3>
  <ul className="list-disc pl-6 text-gray-700 space-y-1">
    <li>Fill the enrollment form</li>
    <li>Pay ₹779/- to confirm your internship seat</li>
    <li>Start your 30-day internship journey</li>
  </ul>
</div>

{/* Tagline */}
<div className="text-center mt-8">
  <h2 className="text-2xl font-bold text-blue-700">
    Happy Digital Bharat – Learn Today, Lead Tomorrow 🚀
  </h2>
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

            <span className="text-red-500 text-2xl">₹779/-</span> per month
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


export default Internshiprogram
