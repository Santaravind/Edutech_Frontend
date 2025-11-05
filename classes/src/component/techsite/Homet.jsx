import React from "react";
import Owner from "./Owner";
import Client from "./Client";
import Service from "./Service";

const Homet = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-800 to-slate-900  ">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Gradient Orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto  px-6 relative z-10 mt-40">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight 
               bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 
                   bg-clip-text text-transparent"
            >
              <span className="block">HAPPY DIGITAL BHARAT</span>

              <span className="block text-3xl mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BUILD YOUR DREAM IN REAL
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Expert Digital Solutions for the Modern Era
            </p>

            <Client />
          </div>
        </div>
      </section>
      <Service />
      <Owner />
    </>
  );
};

export default Homet;
