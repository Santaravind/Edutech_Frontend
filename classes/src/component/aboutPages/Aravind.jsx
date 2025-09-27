import React, { useState } from "react";
import profileImg from "../assets/Sant.png"; // replace with your photo

const Aravind = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <>
    
    <section className="bg-gray-50 py-10 mt-0.5 px-3 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Developer
        </h2> 

        {/* Main Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-8">
          {/* Left - Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <img
              src={profileImg}
              alt="Aravind Sant Singh"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500 shadow-xl"
            />
          </div>

          {/* Right - Details */}
          <div className="flex-1 space-y-6">
            {/* Personal Info */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
              <h3 className="text-xl font-semibold mb-2">👤 Personal Information</h3>
              <ul className="space-y-1 text-gray-700">
                <li><b>Name:</b> Aravind Sant Singh</li>
                <li><b>Email:</b> aravindsant563@gmail.com</li>
                <li><b>Location:</b> Madhupur, Robertsganj, Sonbhadra, UP – 231216</li>
                <li><b>LinkedIn:</b> <a href="https://linkedin.com/in/aravind-sant-singh-717023229" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/aravind-sant-singh</a></li>
                <li><b>GitHub:</b> <a href="https://github.com/SantaAravind" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">github.com/SantaAravind</a></li>
              </ul>
            </div>
 {isReadMore && (
              <>
            {/* Career Objective */}
            <div className="bg-yellow-50 rounded-xl p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">🎯 Career Objective</h3>
              <p className="text-gray-700">
                Results-driven BCA graduate with strong programming skills in Java, C++ and Web Development. Quick learner and adaptable team player with a passion for problem-solving and technical support. Seeking an opportunity to contribute to dynamic projects and provide efficient technical solutions.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Bachelor of Computer Application (BCA) – Rajarshi School of Management and Technology, Varanasi (2021 – 2024) | <b>71.02%</b></li>
                <li>Intermediate (12th – UP Board, 2020) | <b>70.16%</b></li>
                <li>High School (10th – UP Board, 2018) | <b>75%</b></li>
              </ul>
            </div>

            {/* Show more on toggle */}
           
                {/* Technical Skills */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow">
                  <h3 className="text-xl font-semibold mb-2">🛠 Technical Skills</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><b>Languages:</b> C, C++, Java, Spring Boot</li>
                    <li><b>Web Development:</b> HTML, CSS, JavaScript, Tailwind CSS, React.js</li>
                    <li><b>Database:</b> MySQL, JDBC</li>
                    <li><b>Other:</b> Debugging, Problem-Solving, IT Helpdesk Support</li>
                  </ul>
                </div>

                {/* Projects */}
                <div className="bg-white rounded-xl p-4 shadow">
                  <h3 className="text-xl font-semibold mb-2">💼 Projects</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Employee Management System – Java Spring Boot & React.js</li>
                    <li>Banking System – Java JDBC</li>
                    <li>Myntra Clone – React.js</li>
                  </ul>
                </div>

                {/* Internship */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow">
                  <h3 className="text-xl font-semibold mb-2">📑 Internship</h3>
                  <p className="text-gray-700">
                    <b>Java Full Stack Developer Intern</b> – Galas IT Solutions | 6 months  
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Worked on backend and frontend development</li>
                      <li>Assisted in debugging and troubleshooting</li>
                      <li>Provided technical support for deployed projects</li>
                    </ul>
                  </p>
                </div>

                {/* Work Experience */}
                <div className="bg-white rounded-xl p-4 shadow">
                  <h3 className="text-xl font-semibold mb-2">💻 Work Experience</h3>
                  <p className="text-gray-700">
                    <b>Technical Support Engineer</b> – Happy Digital Bharat  
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Handling user queries and providing technical assistance</li>
                      <li>Supporting digital learning platforms & IT projects</li>
                      <li>Ensuring smooth operations and customer satisfaction</li>
                      <li>Collaborating with the team for innovative solutions</li>
                    </ul>
                  </p>
                </div>

                {/* Strengths */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow">
                  <h3 className="text-xl font-semibold mb-2">💡 Strengths</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Quick Learner and Adaptable</li>
                    <li>Strong Communication Skills</li>
                    <li>Effective Team Player</li>
                    <li>Passion for Technology & Innovation</li>
                    <li>Dedicated Problem-Solver</li>
                  </ul>
                </div>
              </>
            )}

            {/* Toggle Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsReadMore(!isReadMore)}
                className="mt-4 px-6 py-2 text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                {isReadMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>

        {/* Highlight Footer */}
        <div className="mt-6 flex justify-end">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg">
            <h4 className="font-bold">Aravind Sant Singh</h4>
            <p className="text-sm">Java Full Stack Developer | React.js | Spring Boot | PostgreSQL</p>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};


export default Aravind
