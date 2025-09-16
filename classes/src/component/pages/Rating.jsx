

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Rating() {
    
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev >= cards.length - 4 ? cards.length - 4 : prev + 1
    );
  };
  const cards = [
    {
      text: "1. Excellent Learning Platform.",
      tag: "Happy Digital Bharat Education is one of the best platforms for online learning. The classes are very interactive, and the teachers explain everything in a simple and easy way.",
    },
    {
      text: "2. Professional & Supportive.",
      tag: "The team is very supportive. They provide proper guidance and study materials. I improved my computer skills a lot after joining.",
    },
    {
      text: "3. Affordable & Valuable",
      tag: "Courses are very affordable compared to other institutes, and the quality is excellent. Truly value for money!",
    },
    {
      text: "4. Great for Beginners",
      tag: "Even if you don’t have much knowledge in computers, this academy makes everything easy to understand. Highly recommended for beginners",
    },
    {
      text: "5.Best Digital Education Initiative",
      tag: "Happy Digital Bharat Education is doing a great job in spreading digital knowledge in India. A very innovative and helpful initiative for students.",
    }
    // {
    //   text: "6. Flexible Timing",
    //   tag: "I can attend classes as per my convenience. Very flexible for working professionals.",
    // },
  ];


  return (
    <section className="py-12 px-4 md:px-16 text-center bg-gray-800 mb-0.5">
      <h2 className="text-2xl font-bold mb-8 text-white font-sans">About</h2>

      {/* Desktop Carousel */}
      <div className="relative hidden md:block">
        {/* Arrow Left */}
        <button
          onClick={prevSlide}
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-rose-500"
        >
          <ChevronLeft  className="hover:text-white"/>
        </button>

        {/* Cards container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 25}%)` }}
          >
            {cards.map((person, idx) => (
              <div key={idx} className="w-1/4 flex-shrink-0 px-2">
                <div className="bg-white hover:bg-slate-500 shadow-md rounded-lg p-4 h-full">
                  <p className="text-2xl font-serif hover:text-white text-gray-900">
                    {person.text}
                  </p>
                  <p className="text-black font-medium mt-2 hover:text-white">
                    {person.tag}
                  </p>
                  <div className="text-yellow-500  text-2xl my-1">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Right */}
        <button
          onClick={nextSlide}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-red-500"
        >
          <ChevronRight className="hover:text-white"/>
        </button>
      </div>

      {/* Mobile Vertical List */}
      <div className="flex flex-col gap-4 md:hidden">
        {cards.map((person, idx) => (
          <div key={idx} className="bg-white hover:bg-slate-400 shadow-md rounded-lg p-4">
            <p className="text-2xl font-serif text-gray-900">{person.text}</p>
            <p className="text-black font-medium mt-2 hover:text-white">
              {person.tag}
            </p>
            <div className="text-yellow-500 text-2xl my-1">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
}
