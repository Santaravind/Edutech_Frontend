
import React from 'react';
import delhi from  '../assets/AssetTech/delhi.jpg';
import dehati from '../assets/AssetTech//dehati.jpg';
import hindustan from '../assets/AssetTech/hindustan.jpg';
import mahadev from '../assets/AssetTech/mahadev.jpg';
import pms from '../assets/AssetTech/pms.jpg';
import sonanchal from '../assets/AssetTech/sonanchal.jpg';
import sukuntimes from '../assets/AssetTech/sukuntimes.jpg';
import bharat from '../assets/AssetTech/logo.jpg'
const Client = () => {
  const clients = [
    { name: 'Delhi34 News', logo: delhi },
    { name: 'Dehati', logo: dehati },
    { name: 'Hindustan', logo: hindustan },
    { name: 'Mahadev', logo: mahadev },
    { name: 'PMS', logo: pms },
    { name: 'Sonanchal', logo: sonanchal },
    { name: 'Sukun Times', logo: sukuntimes },
    { name: 'Bharat', logo: bharat },
  ];

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative py-20  ">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 -w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 -w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          
          {/* Live Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold text-sm">LIVE</span>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Trusted by industry leaders and innovative startups worldwide
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 -w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 -w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
          
          {/* Scrolling Logos */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-12 py-4">
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="shrink-0 group"
                >
                  <div className="w-40 h-32 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:border-white/20 transition-all duration-500 shadow-lg group-hover:shadow-xl overflow-hidden">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-36 h-24 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">
                      {/* {client.name} */}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-40rem * 3.5));
          }
        }
        .animate-scroll {
          animation: scroll 40s gradient infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Client;