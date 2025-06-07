import React from 'react'



const courseList = ["CCC", "ADCA", "BCA", "DCA", "CCC", "ADCA", "BCA", "DCA"];

function Course() {
  return (
    <div className="bg-gradient-to-r from-gray-500 via-purple-200 to-yellow-400 min-h-screen p-4">
      <h2 className="text-3xl mb-4 text-center font-bold">Our Courses</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courseList.map((course, index) => (
          <div
            key={index}
            className="w-full h-64 p-4 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <h1 className="text-2xl font-semibold text-white">{course}</h1>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 p-2 rounded-xl text-white">
                Buy Now
              </button>
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 p-2 rounded-xl text-white">
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

