import React, { useEffect, useState } from 'react'
import { FaChalkboardTeacher, FaPenFancy, FaCertificate, FaQuestionCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import ceo from '../assets/ceo.jpg'
import diologY from '../assets/Biologi.jpg'
import rites from '../assets/ritesh.jpg'
import sant from '../assets/Sant.png'
import acmc from '../assets/class1.jpg'
import o from '../assets/Olevel.jpg'
import ccc from '../assets/CCC.png'
import harsit from '../assets/HarsitSir.jpg'
import harsitphoto from '../assets/harsitphoto.jpg'
import logo from '../assets/withg20.png'
import { toast } from 'react-toastify';
import Rating from './Rating';
import { useSelector } from 'react-redux';


function Home() {
  const navigate=useNavigate();
   const texts = [
  { icon: <FaChalkboardTeacher />, text: 'Live Classes with India’s Top Educators' },
  { icon: <FaPenFancy />, text: 'Mock Tests & Practice Series Included' },
  { icon: <FaCertificate />, text: 'Free Certificates After Every Course' },
  { icon: <FaQuestionCircle />, text: 'Get Doubts Solved in Real-Time' },
];

  const [isModalOpen, setIsModalOpen] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);
 const email=useSelector((state)=>state.email.email)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === texts.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

 const handleBook = (e) => {
  e.preventDefault(); 
  window.open("https://happydigitalbharatcom.blogspot.com/", "_blank");
     };

     const handleCourse=(e)=>{
      e.preventDefault();
      navigate("/course");
      window.scrollTo(0, 0);

     }

     const handleDetail =()=>{
     
      navigate("/course")

     }

     const handleaBuy=(e)=>{
      e.preventDefault();
      navigate("/arduino");
      window.scrollTo(0, 0);
     }     
     const handlOBuy=(e)=>{
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
     
     const handlOView=(e)=>{
      e.preventDefault();
      navigate("/olevel");
     }


     const handlCBuy=(e)=>{
      e.preventDefault();
      navigate("/ccourse");
     }
     const handleJoin=(e)=>{
      e.preventDefault();
     window.open("https://meet.google.com/dto-evxp-oft", "_blank", "noopener,noreferrer");

     }
 const hanalIndresh=(e)=>{
  e.preventDefault();
   navigate("/indresh");
   window.scrollTo(0, 0);
 }
 const hanalSant=(e)=>{ 
  e.preventDefault();
   navigate("/sant");
   window.scrollTo(0, 0);
 }
 const handlDoute=(e)=>{
    e.preventDefault();
    navigate("/doute")
    // console.log("click handal ")
    window.scroll(0,0);

 }

 //Forensic Science
 const   handlFView=(e)=>{
  e.preventDefault();
  navigate("/framedetails"),
  window.scroll(0,0);

 }

 const handIFrame=(e)=>{
  e.preventDefault();
  navigate("/Iframe")
   window.scroll(0,0);

 }


  return (
    <>
   
     
    <div className="font-sans bg-black text-gray-900">
      {/* Hero Section */}
     
        <section className="bg-gray-900 text-white py-12 px-4 md:px-16 rounded-xl m-.5 " >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-4">
              India’s Most Trusted <br /> Live Educational Platform
            </h1>
            <p className="mb-6 text-lg">
              Live Classes, Mock Tests, <strong>Courses</strong>, and All In One Place
            </p>
            <div className="flex gap-4">
             <button 
   className="relative bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg font-medium hover:bg-yellow-500 transition group"
     onClick={handleJoin}
>
  Join Free Class

  {/* Tooltip */}
  <span className="absolute top-7 left-1/2 -translate-x-1/2 
                   bg-gray-800 text-white text-sm px-3 py-1 rounded-md 
                   opacity-0 group-hover:opacity-100 transition">
    Class Timing: 8:45 PM
  </span>
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
     <div className="w-full h-20 flex items-center justify-center bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white text-lg font-medium m-1 rounded-lg mr-1 ml-0.5">
      <div className="flex items-center gap-3 transition-opacity duration-700 ease-in-out">
        <span className="text-xl">{texts[currentIndex].icon}</span>
        <span>{texts[currentIndex].text}</span>
      </div>
    </div>

      {/* Why Choose Section */}
     <section className="py-12 px-4 md:px-16 text-center bg-gray-900 text-white mt-0.5 mb-0.5">
  <h2 className="text-2xl font-bold mb-8 ">Why Choose Our Live Classes?</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6"
    
  >
    {/* doute classe added */}
    <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 p-6 rounded-lg shadow-sm text-white text-3xl cursor-pointer" 
      onClick={handlDoute}
      >
      <div className="text-yellow-400 text-6xl mb-2">🧠</div>
      <p className="font-medium ">Real-time Doubt Solving</p>
    </div>

     <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 p-6 rounded-lg shadow-sm text-white text-3xl">
      <div className="text-blue-600 text-6xl mb-2">👨‍🏫</div>
      <p className="font-medium">Expert Teachers</p>
    </div>
    <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 p-6 rounded-lg shadow-sm text-white">
  <div className="text-blue-600 text-4xl sm:text-5xl md:text-6xl mb-2">🎥</div>
  <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">
    Class Recordings Available
  </p>
</div>

    <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 p-6 rounded-lg shadow-sm text-white text-3xl " >
      <div className="text-blue-600 text-6xl mb-2">📚 </div>
       <p className="font-medium mt-0.5 mb-2 rounded-xl p-1 hover:bg-blue-600 ">
    <button onClick={handleBook}>Buy Books</button>
  </p>
    </div>
  </div>
</section>


      {/* Our Courses */}

<section className="bg-gray-900 py-5 px-3 md:px-16 mt-0.5 mb-0.5">
  <h1 className="text-4xl font-sans font-bold text-center mb-7 text-white ">Our Courses</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 justify-center">
    {/* Course Card */}
    {/* { First image} */}
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
          <button onClick={handalABuy}
            type="button"
            className="text-white animate-blink 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2 hover:bg-blue-800"
          >
            Buy Now
          </button>

          <button
           onClick={handleaBuy}
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


    {/* Harshit singh  */}
       <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col">
      {/* Image */}
      <img
       
        src={harsit}
        alt="Forensic Science"
        className="w-full h-58  object-cover"
      />

      {/* Content */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">Forensic Science</h1>
          <h3 className="text-md mb-2 font-semibold">Forensic Science (For B.Sc. First Semester)
          </h3>
          <p className="text-sm mb-1 font-bold text-yellow-500 "> 100% FREE</p>
          <p className="text-sm flex "><h3 className='mr-1
           text-red-600 font-semibold font-serif text-[18px]'> 📅 Start Date: </h3>01/November/2025</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button onClick={handIFrame}
            type="button"
            className="text-white animate-blink 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2 hover:bg-blue-800"
          >
            100% Free Join Click
          </button>

          <button
           onClick={handlFView}
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

    {/* { Second image} */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col">
      {/* Image */}
      <img
       
        src={o}
        alt="O-level Course"
        className="w-full h-58  object-cover"
      />

      {/* Content */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">O-Level</h1>
          <h3 className="text-md mb-2 font-semibold">O-Level Online Course
          </h3>
          <p className="text-sm mb-1 font-bold text-yellow-500 "> ₹ 499.00</p>
          <p className="text-sm flex "><h3 className='mr-1
           text-red-600 font-semibold font-serif text-[18px]'> 📅 Start Date: </h3>  15/September/2025</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button onClick={handlOBuy}
            type="button"
            className="text-white animate-blink 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2 hover:bg-blue-800"
          >
            Buy Now
          </button>

          <button
           onClick={ handlOView}
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
    {/* { Third image} */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto flex flex-col">
      {/* Image */}
      <img
       
        src={ccc}
        alt="CSS Course"
        className="w-full h-58  object-cover"
      />

      {/* Content */}
      <div className="bg-teal-600 text-white p-6 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">CCC</h1>
          <h3 className="text-md mb-2 font-semibold">Course on Computer Concepts
          </h3>
          <p className="text-sm mb-1 font-bold text-yellow-500 "> ₹ 999.00</p>
          <p className="text-sm flex "><h3 className='mr-1
           text-red-600 font-semibold font-serif text-[18px]'> 📅 Start Date: </h3>  22/September/2025</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button onClick={handalCBuy}
            type="button"
            className="text-white 
              rounded-lg text-sm px-5 py-2.5 text-center mb-2 animate-blink hover:bg-blue-800 "
          >
            Buy Now
          </button>

          <button
           onClick={handlCBuy}
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
        <h1 className='text-white font-sans text-3xl  text-center   justify-center items-center font-semibold '> <button className='border-2 p-2 rounded-x bg-purple-600 rounded-2xl' onClick={handleCourse}> More Courses </button>  </h1>
     </div>
    
  </div>
 
</section>
    
    {/* Teachers */}
    <section className="bg-gray-800 py-12 px-4 md:px-16 mt-0.5 mb-0.5">
  <h2 className="text-3xl font-bold text-center mb-10 text-white font-sans ">Our Teachers</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    
    {/* Admin Teacher */}
    <div className="bg-violet-400 rounded-xl cursor-pointer shadow-lg p-6 text-center border-2 border-violet-600">
     <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
        <div className="w-full h-full rounded-full bg-white p-1">
      <img
         src={ceo}
        alt="Admin CEO"
        className="w-full h-full mx-auto rounded-full mb-4 object-cover"
        onClick={hanalIndresh}
      />
      </div>
      </div>
      <h3 className="text-xl font-semibold text-blue-700">Mr. Indresh Kumar(Rahul)</h3>
      <p className="text-sm text-gray-600"> Founder & CEO </p>
      <span className="mt-2 inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Founder & CEO</span>
    </div>

    {/* Teacher 1 */}
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:text-white hover:bg-violet-400">
       <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
        <div className="w-full h-full rounded-full bg-white p-1">
      <img
        
        src={diologY}
        alt="Teacher"
        className="w-full h-full mx-auto rounded-full  object-cover"
      />
      </div>
      </div> 
      <h3 className="text-lg font-semibold">Dr. Mohit </h3>
      <p className="text-sm ">Co Founder & Biology Teacher</p>
    </div>

    {/* Teacher 2 */}
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:text-white  hover:bg-violet-400">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
        <div className="w-full h-full rounded-full bg-white p-1">
      <img
     
        src={rites}
        alt="Teacher"
        className="w-full h-full mx-auto rounded-full mb-4 object-cover"
      />
      </div>
      </div>
      <h3 className="text-lg font-semibold">Mr.Ritesh Kumar</h3>
      <p className="text-sm ">Co Founder & Teacher</p>
    </div>


      {/* Teacher Harshit Rana  */}
  
 <div 
        className="  bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl hover:bg-violet-400 transition-all duration-300 border border-gray-100 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
    <div className="w-full h-full rounded-full bg-white p-1">
      <img
        src={harsitphoto} 
        alt="Harshit Rana"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  </div>
        <div className="mt-3">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Harshit Rana</h3>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Educator
          </span>
        </div>
      </div>

      {/* Simple Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Harshit Rana</h3>
            <p className="text-blue-600 font-medium mb-6">Educator</p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">•</span>
                <span>5+ years teaching experience</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">•</span>
                <span>Ex-Unacademy Meerut Centre Learner</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">•</span>
                <span>Ex-Inspiring Agricon Faculty</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">•</span>
                <span>2 Times NEET Qualified</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">•</span>
                <span>Tutored & Mentored 500+ students</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full mt-6 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Teacher3 */}
    {/* <div className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer">
      <img
         src={sant}
        alt="Teacher"
        className="w-30 h-24 mx-auto rounded-full mb-5 object-cover shadow-sm ring-neutral-300 "
        onClick={hanalSant}
      />
      <h3 className="text-lg font-semibold">Aravind Sant Singh</h3>
      <span className="text-[3xl] text-gray-900  ">
        Technical Head 
      </span>
    </div> */}
    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
    <div className="w-full h-full rounded-full bg-white p-1">
      <img
        src={sant} 
        alt="sant"
        className="w-full h-full rounded-full object-cover"
        onClick={hanalSant}
      />
    </div>
  </div>
  
  <h3 className="text-xl font-bold text-gray-800 mb-2">Aravind Sant Singh</h3>
  <p className="text-lg text-blue-600 font-medium mb-4">Technical Head </p>
  
</div>


{/* Teacher 4 */}
{/* <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
    <div className="w-full h-full rounded-full bg-white p-1">
      <img
        src={logo} 
        alt="sant"
        className="w-24 h-24  object-cover"
        
      />
    </div>
  </div>
  
  <h3 className="text-xl font-bold text-gray-800 mb-2">Aravind Sant Singh</h3>
  <p className="text-lg text-blue-600 font-medium mb-4">Technical Head </p>
  
</div> */}
  </div>

  
  
</section>



      {/* About Section */}
     
      <Rating/>
    </div>
  


 
    </>
  )
}

export default Home
