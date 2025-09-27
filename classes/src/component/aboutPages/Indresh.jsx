// import React from "react";
// import profileImg from '../assets/ceo.jpg'; 


// const Indresh = () => {
//     const [isReadMore, setIsReadMore] = React.useState(false);
    
//   return (
//     <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900 mb-10">About Us</h2>

//         {/* Main Biography Card */}
//         <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-8">
//           {/* Left: Image */}
//           <div className="flex-shrink-0 flex justify-center md:justify-start">
//             <img
//               src={profileImg}
//               alt="Indresh Kumar"
//               className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
//             />
//           </div>

//           {/* Right: Details */}
//           <div className="flex-1 space-y-6">
//             {/* Details */}
//             <div>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 <b>बायोग्राफी:</b> इंद्रेश कुमार (राहुल) <br />
//                 Junior Scientist | लेखक | शिक्षक | समाजसेवी <br />
//                 संस्थापक: हेल्पिंग हैंड्स अकैडमी | हैप्पी डिजिटल भारत
//               </p>
//             </div>

//             {/* Personal Info */}
//             <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
//               <h3 className="text-xl font-semibold mb-2">
//                 👤 व्यक्तिगत जानकारी
//               </h3>
//               <ul className="space-y-1 text-gray-700">
//                 <li>
//                   <b>पूरा नाम:</b> इंद्रेश कुमार मौर्य (राहुल)
//                 </li>
//                 <li>
//                   <b>जन्म स्थान:</b> ग्राम व पोस्ट – मधुपुर, जनपद – सोनभद्र, उत्तर
//                   प्रदेश
//                 </li>
//                 <li>
//                   <b>राष्ट्रीयता:</b> भारतीय
//                 </li>
//                 <li>
//                   <b>पता:</b> मधुपुर, तहसील – रॉबर्ट्सगंज, जिला – सोनभद्र, उत्तर
//                   प्रदेश – 231216
//                 </li>
//               </ul>
//             </div>
//              {/* {!isReadMore && ()} */}
//             {/* Author Info */}
//             <div className="bg-yellow-50 rounded-xl p-4 shadow">
//               <h3 className="text-xl font-semibold mb-2">✍ एक लेखक के रूप में</h3>
//               <p className="text-gray-700 mb-2">
//                 इंद्रेश कुमार एक बहुआयामी लेखक हैं, जिन्होंने अब तक कुल 6
//                 प्रेरणादायक और शिक्षाप्रद पुस्तकें लिखी हैं। उनकी लेखनी नवाचार,
//                 विज्ञान, तकनीक और सामाजिक जागरूकता से जुड़ी है।
//               </p>
//               <h4 className="font-semibold">📚 प्रमुख प्रकाशित पुस्तकें:</h4>
//               <ol className="list-decimal list-inside space-y-1 text-gray-700">
//                 <li>
//                   Innovative Ideas – नवाचार और रचनात्मक सोच (1700+ ऑर्डर प्राप्त)
//                 </li>
//                 <li>
//                   Son Ki Sornbhumi – सोनभद्र की ऐतिहासिक व सांस्कृतिक धरोहर
//                 </li>
//                 <li>Biology Our Life – छात्रों हेतु जीवन विज्ञान</li>
//                 <li>IT Tools and Basic Network – तकनीकी गाइड</li>
//                 <li>
//                   Innovation is the Language of Future – प्रेरणात्मक पुस्तक
//                 </li>
//                 <li>
//                   Happy Digital Bharat Notes – CCC, ADCA, ‘O’ Level सामग्री
//                 </li>
//               </ol>
//             </div>
            
//             {/* Scientist Work */}
//             <div className="bg-white rounded-xl p-4 shadow">
//               <h3 className="text-xl font-semibold mb-2">
//                 🔬 एक जूनियर साइंटिस्ट के रूप में
//               </h3>
//               <ul className="list-disc list-inside space-y-1 text-gray-700">
//                 <li>
//                   <b>नो ड्रिंक ड्राइव हेलमेट (2022):</b> शराब जांचने वाला स्मार्ट
//                   हेलमेट
//                 </li>
//                 <li>
//                   <b>एग्रीकल्चरल रोबोट (2024):</b> AI आधारित कृषि सहायक रोबोट
//                 </li>
//               </ul>
//             </div>

//             {/* Digital Education */}
//             <div className="bg-yellow-50 rounded-xl p-4 shadow">
//               <h3 className="text-xl font-semibold mb-2">
//                 💻 डिजिटल शिक्षा में योगदान
//               </h3>
//               <p className="text-gray-700">
//                 उन्होंने ग्रामीण क्षेत्र के छात्रों के लिए{" "}
//                 <b>Happy Digital Bharat</b> की शुरुआत की, जहाँ CCC, ADCA और ‘O’
//                 Level जैसे कोर्सेस तकनीक के साथ उपलब्ध कराए जाते हैं।
//               </p>
//             </div>

//             {/* Quote */}
//             <blockquote className="italic text-lg font-semibold text-gray-700 border-l-4 border-yellow-500 pl-4">
//               “शिक्षा और नवाचार का मेल ही भारत को डिजिटल और आत्मनिर्भर बनाएगा।”{" "}
//               <br />– इंद्रेश कुमार (राहुल)
//             </blockquote>
//           </div>
//         </div>
              
//         {/* Name + Qualification Highlight */}
//         <div className="mt-6 flex justify-end">
//           <div className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg">
//             <h4 className="font-bold">इंद्रेश कुमार (राहुल)</h4>
//             <p className="text-sm">
//               Junior Scientist | लेखक | शिक्षक | समाजसेवी
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Indresh;
import React from "react";
import profileImg from "../assets/ceo.jpg";

const Indresh = () => {
  const [isReadMore, setIsReadMore] = React.useState(false);

  return (
    <section className="bg-gray-50 py-10 px-3 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">CEO- Happy Digital Bharat</h2>

        {/* Main Biography Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-8">
          {/* Left: Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <img
              src={profileImg}
              alt="Indresh Kumar"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
            />
          </div>

          {/* Right: Details */}
          <div className="flex-1 space-y-6">
            {/* Intro */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <b>बायोग्राफी:</b> इंद्रेश कुमार (राहुल) <br />
                Junior Scientist | लेखक | शिक्षक | समाजसेवी <br />
                संस्थापक: हेल्पिंग हैंड्स अकैडमी | हैप्पी डिजिटल भारत
              </p>
            </div>

            {/* Personal Info */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
              <h3 className="text-xl font-semibold mb-2">
                👤 व्यक्तिगत जानकारी
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <b>पूरा नाम:</b> इंद्रेश कुमार मौर्य (राहुल)
                </li>
                <li>
                  <b>जन्म स्थान:</b> ग्राम व पोस्ट – मधुपुर, जनपद – सोनभद्र, उत्तर
                  प्रदेश
                </li>
                <li>
                  <b>राष्ट्रीयता:</b> भारतीय
                </li>
                <li>
                  <b>पता:</b> मधुपुर, तहसील – रॉबर्ट्सगंज, जिला – सोनभद्र, उत्तर
                  प्रदेश – 231216
                </li>
              </ul>
            </div>
{isReadMore && (
              <>
            {/* Author Info */}
            <div className="bg-yellow-50 rounded-xl p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">✍ एक लेखक के रूप में</h3>
              <p className="text-gray-700 mb-2">
                इंद्रेश कुमार एक बहुआयामी लेखक हैं, जिन्होंने अब तक कुल 6
                प्रेरणादायक और शिक्षाप्रद पुस्तकें लिखी हैं। उनकी लेखनी नवाचार,
                विज्ञान, तकनीक और सामाजिक जागरूकता से जुड़ी है।
              </p>
              <h4 className="font-semibold">📚 प्रमुख प्रकाशित पुस्तकें:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>
                  Innovative Ideas – नवाचार और रचनात्मक सोच (1700+ ऑर्डर प्राप्त)
                </li>
                <li>
                  Son Ki Sornbhumi – सोनभद्र की ऐतिहासिक व सांस्कृतिक धरोहर
                </li>
                <li>Biology Our Life – छात्रों हेतु जीवन विज्ञान</li>
                <li>IT Tools and Basic Network – तकनीकी गाइड</li>
                <li>
                  Innovation is the Language of Future – प्रेरणात्मक पुस्तक
                </li>
                <li>
                  Happy Digital Bharat Notes – CCC, ADCA, ‘O’ Level सामग्री
                </li>
              </ol>
            </div>

            {/* Show when Read More is active */}
            
                {/* Scientist Work */}
                <div className="bg-white rounded-xl p-4 shadow">
                  <h3 className="text-xl font-semibold mb-2">
                    🔬 एक जूनियर साइंटिस्ट के रूप में
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>
                      <b>नो ड्रिंक ड्राइव हेलमेट (2022):</b> शराब जांचने वाला स्मार्ट
                      हेलमेट
                    </li>
                    <li>
                      <b>एग्रीकल्चरल रोबोट (2024):</b> AI आधारित कृषि सहायक रोबोट
                    </li>
                  </ul>
                </div>

                {/* Digital Education */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow">
                  <h3 className="text-xl font-semibold mb-2">
                    💻 डिजिटल शिक्षा में योगदान
                  </h3>
                  <p className="text-gray-700">
                    उन्होंने ग्रामीण क्षेत्र के छात्रों के लिए{" "}
                    <b>Happy Digital Bharat</b> की शुरुआत की, जहाँ CCC, ADCA और ‘O’
                    Level जैसे कोर्सेस तकनीक के साथ उपलब्ध कराए जाते हैं।
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="italic text-lg font-semibold text-gray-700 border-l-4 border-yellow-500 pl-4">
                  “शिक्षा और नवाचार का मेल ही भारत को डिजिटल और आत्मनिर्भर बनाएगा।”{" "}
                  <br />– इंद्रेश कुमार (राहुल)
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
          <div className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg">
            <h4 className="font-bold">इंद्रेश कुमार (राहुल)</h4>
            <p className="text-sm">
              Junior Scientist | लेखक | शिक्षक | समाजसेवी
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indresh;
