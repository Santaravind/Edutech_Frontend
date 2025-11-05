import React from "react";
import profileImg from "../assets/ceo.jpg";

const Indresht = () => {
  const [isReadMore, setIsReadMore] = React.useState(false);

  return (
    <section className="bg-gray-50 py-10 px-3  md:px-12 lg:px-20  bg-gradient-to-br from-slate-600 via-purple-900 to-slate-500 ">
      <div className="max-w-6xl mt-20 ">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center  ">
          Founder & CEO Profile
        </h2>

        {/* Main Biography Card */}
        <div className="bg-gradient-to-br from-slate-400 via-purple-600 to-slate-500 shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-8">
          {/* Left: Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <img
              src={profileImg}
              alt="Indresh Kumar"
              className="w-46 h-46 md:w-48 md:h-48 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
            />
          </div>

          {/* Right: Details */}
          <div className="flex-1 space-y-6">
            {/* Intro */}
            <div>
              <p className="text-lg  leading-relaxed text-white">
                <b>Indresh Kumar (Rahul)</b> <br />
                Founder & CEO - Happy Digital Bharat | Helping Hands Academy <br />
                Junior Scientist | Author | Educator | Social Entrepreneur
              </p>
            </div>
              {isReadMore && (
              <>
            {/* About the Founder */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
              <h3 className="text-xl font-semibold mb-2">
                📘 About the Founder
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Indresh Kumar (Rahul) is a visionary entrepreneur, researcher, and
                educationist, recognized for his contributions to digital learning,
                scientific innovation, and social development. As the Founder & CEO
                of <b>Happy Digital Bharat</b> and <b>Helping Hands Academy</b>, he has
                dedicated his career to building organizations that integrate
                technology, education, and community empowerment.
              </p>
              <p className="text-gray-700 mt-2">
                With a strong foundation in science and innovation, he has
                successfully led initiatives that combine academic excellence with
                practical skills, enabling thousands of students to pursue meaningful
                careers. His leadership style is defined by strategic vision,
                innovative thinking, and a commitment to social responsibility.
              </p>
              <p className="text-gray-700 mt-2">
                Driven by the belief that knowledge and innovation are the true
                engines of progress, Indresh Kumar continues to pioneer projects in
                digital education, research, and rural empowerment, positioning
                himself as one of the promising young leaders shaping India’s future.
              </p>
            </div>

            {/* Show More Section */}
           
                {/* Entrepreneurial Journey */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow">
                  <h3 className="text-xl font-semibold mb-2">
                    🚀 Entrepreneurial Journey
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Under <b>Happy Digital Bharat</b>, he spearheads initiatives in
                    multiple sectors:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>
                      <b>EdTech:</b> Offering online courses, computer courses, skill
                      development programs, competitive exam preparation, and
                      entrepreneurship guidance aimed at empowering students, youth,
                      and professionals.
                    </li>
                    <li>
                      <b>E-Commerce:</b> Running a platform for buying/selling old
                      books, providing new books, and offering research materials for
                      students and educators.
                    </li>
                    <li>
                      <b>Organization & Foundation:</b> Leading social programs that
                      promote digital literacy, community development, and skill
                      empowerment.
                    </li>
                    <li>
                      <b>Co-Founder, MS Poja Construction:</b> Managing strategic
                      planning and project execution in infrastructure and construction
                      projects.
                    </li>
                  </ul>
                </div>

                {/* Research & Innovation */}
                <div className="bg-white rounded-xl p-4 shadow">
                  <h3 className="text-xl font-semibold mb-2">
                    🔬 Research & Innovation
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>
                      <b>No Drink-Drive Helmet (2022):</b> A life-saving innovation
                      designed to detect alcohol consumption and disable vehicle
                      ignition to prevent drunk driving accidents.
                    </li>
                    <li>
                      <b>Agricultural Robot (2024):</b> An AI-based robot for seed
                      sowing, crop monitoring, disease detection, and harvesting—
                      improving farmers’ productivity.
                    </li>
                  </ul>
                </div>

                {/* Authorship */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow">
                  <h3 className="text-xl font-semibold mb-2">✍ Authorship</h3>
                  <p className="text-gray-700 mb-2">
                    A passionate writer, he has authored six books covering topics
                    from innovation and motivation to science and technology. His
                    best-known work, <b>Innovative Ideas</b>, received 1700+ orders,
                    marking a milestone in his literary journey.
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700">
                    <li>
                      Innovative Ideas – Encouraging creative and innovative thinking
                      (1700+ orders)
                    </li>
                    <li>
                      Son Ki Sornbhumi – A cultural and historical exploration of
                      Sonbhadra district
                    </li>
                    <li>Biology Our Life – Simplifying life sciences for students</li>
                    <li>
                      IT Tools and Basic Network – A guide to computer tools and
                      networking
                    </li>
                    <li>
                      Innovation is the Language of Future – Inspirational insights on
                      innovation
                    </li>
                    <li>
                      Happy Digital Bharat Notes – Study material for CCC, ADCA, ‘O’
                      Level, etc.
                    </li>
                  </ol>
                </div>

                {/* Vision */}
                <blockquote className="italic text-lg font-semibold text-white border-l-4 border-yellow-500 pl-4">
                  “Education and Innovation are the true pillars of a Digital and
                  Self-Reliant India.” <br />- Indresh Kumar (Rahul)
                </blockquote>
              </>
            )}

            {/* Read More Button */}
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

        {/* Name + Qualification Highlight */}
        <div className="mt-6 flex justify-end">
          <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-6 py-3 rounded-lg shadow-lg">
            <h4 className="font-bold">Indresh Kumar (Rahul)</h4>
            <p className="text-sm">
              Founder & CEO - Happy Digital Bharat | Helping Hands Academy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indresht;