import React from 'react'
import {useNavigate} from 'react-router-dom'




function Course() {
    const courseList = ["CCC", "ADCA", "BCA", "DCA", "CCC", "ADCA", "BCA", "DCA"];
    const navigate=useNavigate();
    function handalonBuynow(CourseName){
     //alert(`you click buy now for ${CourseName}`)
    //   console.log("buy now clicked!!");
    navigate("/signin")
    }

    function handleDetails(CourseName){
        alert(`you click on details of ${CourseName}`)
    }
  return (
    <div className="bg-gradient-to-r from-gray-500 via-purple-200 to-yellow-400 min-h-screen p-4">
      <h2 className="text-3xl mb-4 text-center font-bold">Our Courses</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courseList.map((course, index) => (
          <div
            key={index}
            className="w-full h-64 p-4 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-lg shadow-lg flex flex-col justify-between   hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <h1 className="text-2xl font-semibold text-white">{course}</h1>
            
            <div className='flex flex-col sm:flex-row gap-3'>
                <button className='flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200' onClick={()=>handalonBuynow(course)}>
                  Buy Now
                </button>
                <button 
                  onClick={()=>handleDetails(course)}
                className='flex-1 bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-medium py-2 px-4 rounded-xl transition-all duration-200' 
                >
                  Details
                </button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;

