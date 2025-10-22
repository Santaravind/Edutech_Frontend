import React from 'react'
import harsit from '../../assets/HarsitSir.jpg'
function ForensicDetails() {
  // const courseInfo = {
  //   title: "Forensic Science, Semester I",
  //   // subtitle: "Paper I — Introduction to Forensic Science (Theory)",
  //   // code: "DSC 1",
  //   // credits: 4,
  //   // maxMarks: 100,
  //   // minPassing: 40,
  //   // lectures: 60,
  //   // program: "Certificate",
  //   // year: "First",
  //   // semester: "First"
  // };

  const units = [
    {
      id: 1,
      title: "Development and Growth of Forensic Science",
      lectures: 10,
      topics: [
        "Definition, Laws and Principles",
        "Historical Development of Forensic Science",
        "Need, Function and Scope of Forensic Science in Present Scenario",
        "Branches of Forensic Science"
      ],
       },
    {
      id: 2,
      title: "Forensic Science Laboratories",
      lectures: 10,
      topics: [
        "Historical Development and Growth of Forensic Science Laboratories in India – CFSL & SFSL",
        "Services and Functionalities provided by various FSLs",
        "Various Divisions of the FSL",
        "Mobile Forensic Science Laboratory: its Functions and Utility",
        "Introduction to Various Institutions: IITR, CCMB, CDFD, NCRB, CDTS"
      ],
      },
    {
      id: 3,
      title: "Law of Evidence",
      lectures: 15,
      topics: [
        "Evidence, Fact, Types, Testimonial and Real Evidence",
        "Burden of Proof, Evidence in Enquiry and Trial",
        "First Information Report, Interview and Interrogation",
        "Witness, Types of Witnesses, Admissibility of Evidence",
        "Brain Fingerprinting & Narco Analysis",
        "Polygraphy: History, Procedure, Limitations",
        "Indian Judiciary and Criminal Justice System",
        "Court Procedure and Testimony",
        "Police: Role and Function, Relationship with Forensic Scientists"
      ],
        },
    {
      id: 4,
      title: "Legal Provisions Related to Forensic Science",
      lectures: 15,
      topics: [
        "Constitution of India: Preamble, Article 20, 21, 22",
        "Bharatiya Nyaya Sanhita (2023): Introduction and Comparison to IPC",
        "Offences against Woman: Sections 63-71, 80",
        "Offences against Person: Various Sections",
        "Offences against Property: Sections 303-356",
        "Bharatiya Sakshya Adhiniyam (2023): Key Sections",
        "Bharatiya Nagarik Suraksha Sanhita (2023): Key Sections"
      ],
        },
    {
      id: 5,
      title: "Crime and Criminological Aspects",
      lectures: 10,
      topics: [
        "Crime: Definition, Types, Cause & Elements, Prevention",
        "Criminological Theories",
        "Juvenile Delinquency: Introduction, Nature, Types, Factors",
        "Juvenile Justice (Care and Prevention) Act",
        "Social Aspects of Crime"
      ],
       }
  ];

  const courseOutcomes = [
    "Understand the evolution and scope of Forensic Science",
    "Comprehend the Indian law of evidence",
    "Gain insight into the Indian judiciary and criminal justice system",
    "Interpret key legal provisions relevant to Forensic Science",
    "Analyze the concept and causes of crime"
  ];

  return (
    <> 
    <div className='flex justify-center items-center'>
    <div className="min-h-screen max-w-4xl bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto   ">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border border-blue-100">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Forensic Science</h1>
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Course Details </h2>
          
               <img
                    src={harsit}
                    alt="CCC"
                    className="w-full h-1/2 p-0.5 lg:h-1/2 object-cover"
                  />
           
            
          </div>
        </div>

        {/* Course Objective */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Course Objective</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            This course would introduce the students to Forensic Science and its role in the investigative system. 
            The students would be apprised about the Functions and Principles of Forensic Science, its historical development, 
            and the different types of evidences encountered in the field of Forensic Science. They would also acquire knowledge 
            regarding the functions and services provided by Forensic Laboratories.
          </p>
        </div>

        {/* Course Outcomes */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">📚 Course Outcomes</h3>
          <div className="space-y-3">
            {courseOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mt-1 mr-3">
                  {index + 1}
                </span>
                <span className="text-gray-700 text-lg">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Units and Topics */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">📖 Units and Topics</h3>
          <div className="space-y-8">
            {units.map((unit, index) => (
              <div key={unit.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={harsit} 
                      alt={unit.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-4">
                        Unit {unit.id}
                      </span>
                      <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {unit.lectures} Lectures
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-4">{unit.title}</h4>
                    
                    <div className="space-y-2">
                      {unit.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl shadow-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">🎓 Course Completion</h3>
          
            <p className="text-lg opacity-90">
              This course provides comprehensive foundation in Forensic Science with practical legal applications
            </p>
          </div>
        </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default ForensicDetails
