import React from 'react'

function Home() {
  const courses = [
    { id: 1, name: 'CCC', description: 'Course on Computer Concepts' },
    { id: 2, name: 'ADCA', description: 'Advanced Diploma in Computer Applications' },
    { id: 3, name: 'BCA', description: 'Bachelor of Computer Applications' },
    { id: 4, name: 'DCA', description: 'Diploma in Computer Applications' },
    { id: 5, name: 'PGDCA', description: 'Post Graduate Diploma in Computer Applications' },
    { id: 6, name: 'MCA', description: 'Master of Computer Applications' },
    { id: 7, name: 'Web Development', description: 'Full Stack Web Development Course' },
    { id: 8, name: 'Data Science', description: 'Complete Data Science Program' }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-500 via-purple-200 to-yellow-400 py-8'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8 text-gray-800'>
          Our Courses
        </h2>
        
        {/* Responsive Grid Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {courses.map((course) => (
            <div 
              key={course.id}
              className='bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
            >
              <h3 className='text-2xl font-bold text-white mb-2'>
                {course.name}
              </h3>
              <p className='text-purple-100 text-sm mb-4 min-h-[40px]'>
                {course.description}
              </p>
              
              <div className='flex flex-col sm:flex-row gap-3'>
                <button className='flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200'>
                  Buy Now
                </button>
                <button className='flex-1 bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-medium py-2 px-4 rounded-xl transition-all duration-200'>
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional: Add a call-to-action section */}
        <div className='mt-12 text-center'>
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
        </div>
      </div>
    </div>
  )
}

export default Home
