import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "AEC - Gestion de Réseaux et Sécurité des Systèmes",
      school: "Collège de Maisonneuve",
      location: "Montréal, QC",
      period: "2024 – 2025",
      status: "Current",
      isRecent: true
    },
    {
      id: 2,
      degree: "Bachelor's Degree in Electronic Engineering",
      school: "Dr. Rafael Belloso Chacín University",
      location: "Maracaibo, Venezuela",
      period: "2016 – 2020",
      status: "Completed",
      isRecent: false
    }
  ];

  return (
    <section id="education" className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-8 left-8 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-8 right-8 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-5">
            <span className="text-3xl">🎓</span>
          </div>
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Continuous learning journey in technology and engineering
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div 
              key={edu.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Status badge */}
              <div className="flex justify-between items-start mb-5">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 pr-3 text-left">
                    {edu.degree}
                  </h3>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
                  edu.isRecent 
                    ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
                    : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                }`}>
                  {edu.status}
                </span>
              </div>

              {/* School and location info */}
              <div className="mb-3">
                <div className="flex items-center text-purple-200 mb-2">
                  <span className="mr-2 text-base">🏆</span>
                  <span className="font-medium text-base">{edu.school}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-5 space-y-1 sm:space-y-0 text-gray-300 text-sm">
                  <div className="flex items-center">
                    <span className="mr-2">📍</span>
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📅</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;