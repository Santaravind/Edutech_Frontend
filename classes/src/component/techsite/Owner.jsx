import React from 'react'
import profileImg from '../assets/ceo.jpg'
import sant from '../assets/AssetTech/sant.png'

const Owner = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Founder & CEO Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Founder & CEO 
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12 rounded-full"></div>

          {/* Main Biography Card */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Image */}
              <div className="shrink-0">
                <div className="relative">
                  <img
                    src={profileImg}
                    alt="Indresh Kumar"
                    className="w-48 h-48 rounded-2xl object-cover border-4 border-yellow-400/50 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 space-y-6">
                {/* Intro */}
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Indresh Kumar (Rahul)
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Founder & CEO – Happy Digital Bharat | Helping Hands Academy<br />
                    Junior Scientist | Author | Educator | Social Entrepreneur
                  </p>
                </div>

                {/* Entrepreneurial Journey */}
                {/* <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/20 transform group-hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center">
                    <span className="mr-2">🚀</span> Entrepreneurial Journey
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Under <b className="text-white">Happy Digital Bharat</b>, he spearheads initiatives in multiple sectors.
                  </p>
                </div> */}

                {/* Vision */}
                <blockquote className="italic text-lg font-semibold text-gray-300 border-l-4 border-yellow-500 pl-4 py-2 transform group-hover:scale-105 transition-transform duration-300">
                  "Education and Innovation are the true pillars of a Digital and Self-Reliant India."<br />
                  <span className="text-yellow-400 not-italic">- Indresh Kumar (Rahul)</span>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Name Highlight */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1">
              <h4 className="font-bold text-xl">Indresh Kumar (Rahul)</h4>
              <p className="text-gray-300">
                Founder & CEO – Happy Digital Bharat | Helping Hands Academy
              </p>
            </div>
          </div>
        </div>

        {/* Technical Head Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Technical Head
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-12 rounded-full"></div>

          {/* Main Card */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Image */}
              <div className="shrink-0">
                <div className="relative">
                  <img
                    src={sant}
                    alt="Aravind Sant Singh"
                    className="w-48 h-48 rounded-2xl object-cover border-4 border-blue-400/50 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 space-y-6">
                {/* Personal Info */}
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20 transform group-hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                    <span className="mr-2"></span> Aravind Sant Singh
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      <b className="text-white w-20">Name:</b> Aravind Sant Singh
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      <b className="text-white w-20">Email:</b> aravindsant563@gmail.com
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      <b className="text-white w-20">LinkedIn:</b> 
                      <a 
                        href="https://linkedin.com/in/aravind-sant-singh-717023229" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300 ml-2 hover:underline"
                      >
                        linkedin.com/in/aravind-sant-singh
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Skills */}
                {/* <div className="flex flex-wrap gap-3">
                  {['Java Full Stack', 'React.js', 'Spring Boot', 'Tailwind CSS', 'Software Architecture'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:bg-blue-500/20 hover:border-blue-400/30 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          </div>

          {/* Highlight Footer */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1">
              <h4 className="font-bold text-xl">Aravind Sant Singh</h4>
              <p className="text-gray-300">Java Full Stack Developer | Software Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner