import React from 'react';
import ceo from '../assets/ceo.jpg'
const AboutUsFooter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-rose-800 to-gray-400 mt-2">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-400 via-rose-800 to-gray-400 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Happy Digital Bharat</h1>
          <p className="text-center mt-2 text-blue-100">Transforming Education Through Technology & Innovation</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Happy Digital Bharat</h2>
            <p className="text-lg text-gray-600 mb-8">
              A leading EdTech and Skill Development platform dedicated to transforming education through technology, innovation, and empowerment.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 italic">
                "We aim to bridge the gap between education and employability by integrating modern learning methods with real-world applications."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-gradient-to-r from-purple-400 via-rose-800 to-gray-400 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100">
                To make learning accessible, affordable, and impactful for every learner by combining technology, creativity, and practical application.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100">
                To build a Digitally Empowered and Educated Bharat, where innovation, knowledge, and social responsibility go hand in hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Founder & CEO Profile</h2>
          
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-48 bg-indigo-600 flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* image  */}
                    <span className="text-xl font-bold"><img src={ceo} alt="ceo image" /></span>
                  </div>
                  <h3 className="font-bold text-lg">Indresh Kumar</h3>
                  <p className="text-sm">(Rahul)</p>
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold mb-2">
                  Founder & CEO – Happy Digital Bharat | Helping Hands Academy
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Junior Scientist</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Author</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Educator</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Social Entrepreneur</span>
                </div>
                <p className="mt-2 text-gray-600">
                  Indresh Kumar (Rahul) is a visionary entrepreneur, researcher, and educationist known for his contributions to digital learning, scientific innovation, and social development.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Entrepreneurial Journey</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-indigo-700 mb-2">EdTech Division</h4>
                <p className="text-gray-600 text-sm">
                  Delivering online learning programs, live doubt classes, skill development training, and entrepreneurship guidance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-indigo-700 mb-2">E-Commerce Division</h4>
                <p className="text-gray-600 text-sm">
                  Operating a unique platform for buying and selling old books, providing new study materials, and research resources.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-indigo-700 mb-2">Organization & Foundation</h4>
                <p className="text-gray-600 text-sm">
                  Running social initiatives focused on digital literacy, community development, and skill empowerment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-bold text-lg text-indigo-700 mb-2">Infrastructure Leadership</h4>
                <p className="text-gray-600 text-sm">
                  Managing strategic planning, operations, and project execution with a focus on innovation and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses & Programs */}
      <section className="py-12 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Courses & Programs</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Happy Digital Bharat offers a diverse range of courses designed to prepare learners for academic excellence, digital skills, and professional success.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Computer Courses */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-indigo-600 p-4 text-white">
                <h3 className="text-xl font-bold">💻 Computer Related Courses</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Basic Computer Course (BCC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Diploma in Computer Application (DCA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Advanced Diploma in Computer Application (ADCA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Tally with GST</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Graphic Design & Video Editing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Web Designing & Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Programming Languages (C, C++, Java, Python, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Cyber Security Basics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Diploma & Degree Programs */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-blue-600 p-4 text-white">
                <h3 className="text-xl font-bold">🎓 Diploma, B.Sc & B.Tech Programs</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Polytechnic / Engineering Diploma Preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>B.Sc (Computer Science, IT, Forensic Science, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>B.Tech (CSE, Electrical, Mechanical, Civil, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Semester Exam & Project Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Internship & Career Counseling</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Entrance Exam Preparation */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-purple-600 p-4 text-white">
                <h3 className="text-xl font-bold">📚 Entrance Exam Preparation</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>IIT–JEE (Engineering)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>NEET (Medical)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>CUET / BHU / JNU Entrance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Polytechnic & ITI Entrance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>B.Sc / B.Tech Admission Tests</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Board Exam Preparation */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-green-600 p-4 text-white">
                <h3 className="text-xl font-bold">📝 Board Exam Preparation</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Science (Physics, Chemistry, Biology)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Mathematics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Computer Science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>English & General Studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Mock Tests, Live Doubt Sessions & Result Analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Government Job Preparation */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-amber-600 p-4 text-white">
                <h3 className="text-xl font-bold">🏛️ Government Job Preparation</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>SSC, Railway, Police, Banking, UPSC, State PSC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>CBT Practice & Mock Tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Current Affairs & GK Updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Interview & Personality Development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skill Development & Entrepreneurship */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-red-600 p-4 text-white">
                <h3 className="text-xl font-bold">🚀 Skill Development & Entrepreneurship</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Digital Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>MS Office & Productivity Tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Spoken English & Communication Skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Graphic Design & Multimedia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Entrepreneurship & Startup Skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Freelancing & Online Earning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-indigo-50 p-6 rounded-lg text-center border border-indigo-100">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Innovation</h3>
              <p className="text-gray-600">Redefining education through creativity and technology.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Integrity</h3>
              <p className="text-gray-600">Building trust through honesty and excellence.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg text-center border border-purple-100">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Inclusion</h3>
              <p className="text-gray-600">Ensuring learning for everyone, everywhere.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center border border-green-100">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Impact</h3>
              <p className="text-gray-600">Creating real change in lives and communities.</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};



export default AboutUsFooter
