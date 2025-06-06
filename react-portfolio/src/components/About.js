import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Profile Image */}
        <div className="text-center mb-6">
          <div className="w-40 h-40 mx-auto mb-5 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
            <img 
              src="/assests/image/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-3xl font-bold mb-3 text-center">About Me</h2>
          <p className="text-lg text-white/90 font-light mb-6">
            System Administrator | Montreal
          </p>
        </div>

        {/* Main Description */}
        <p className="text-base max-w-3xl mx-auto leading-relaxed text-center mb-10">
          I'm a dedicated IT professional with hands-on experience across a wide range of technologies 
          and environments. Based in Montreal, I specialize in building reliable infrastructure and 
          supporting diverse IT projects from cloud deployments and automation to system maintenance 
          and user support both on-premises and in the cloud.
        </p>

        {/* Stats Section */}
        <div className="flex justify-center gap-6 md:gap-12 mb-10 flex-wrap">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">1+</div>
            <div className="text-xs text-white/80 uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">4+</div>
            <div className="text-xs text-white/80 uppercase tracking-wider">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">24/7</div>
            <div className="text-xs text-white/80 uppercase tracking-wider">System Uptime</div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold mb-3">Current Focus</h3>
            <p className="text-white/90 leading-relaxed text-sm">
              Diving deep into Infrastructure as Code and strengthening my understanding of SQL for 
              managing and querying relational databases. Currently focused on learning how to provision 
              and automate infrastructure efficiently, while building a strong foundation in data 
              handling and backend integration.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="text-lg font-semibold mb-3">What I Do</h3>
            <p className="text-white/90 leading-relaxed text-sm">
              Configure and manage networked systems using Cisco technologies, Linux servers, and Windows Server 
              environments. I work with network services to build secure, scalable infrastructures. 
              I enjoy integrating open-source tools and automating 
              system tasks to streamline operations.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold mb-3">Goals</h3>
            <p className="text-white/90 leading-relaxed text-sm">
              Build a meaningful career in IT by combining technical expertise with real-world problem 
              solving. Focused on developing practical solutions that add value, while staying adaptable 
              in a fast-evolving industry.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-lg font-semibold mb-3">Learning & Growth</h3>
            <p className="text-white/90 leading-relaxed text-sm">
              Committed to lifelong learning through hands-on practice, certifications, and community 
              involvement. Continuously expanding my skills in modern IT infrastructure, 
              while staying curious, adaptable, and engaged with new technologies.
            </p>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-3 flex-wrap">
          <a 
            href="#contact" 
            className="px-6 py-2 bg-white text-indigo-900 font-semibold rounded-full hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 shadow-lg text-sm"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="px-6 py-2 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-900 hover:-translate-y-1 transition-all duration-300 text-sm"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;