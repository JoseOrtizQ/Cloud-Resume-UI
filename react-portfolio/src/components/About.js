import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="text-center mb-8">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
            <img 
              src="/assests/image/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-xl text-white/90 font-light mb-8">
            System Administrator | Montreal
          </p>
        </div>

        {/* Main Description */}
        <p className="text-lg max-w-4xl mx-auto leading-relaxed text-center mb-12">
          I'm a dedicated IT professional with hands-on experience across a wide range of technologies 
          and environments. Based in Montreal, I specialize in building reliable infrastructure and 
          supporting diverse IT projects from cloud deployments and automation to system maintenance 
          and user support both on-premises and in the cloud.
        </p>

        {/* Stats Section */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12 flex-wrap">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1+</div>
            <div className="text-sm text-white/80 uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">4+</div>
            <div className="text-sm text-white/80 uppercase tracking-wider">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm text-white/80 uppercase tracking-wider">System Uptime</div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
            <p className="text-white/90 leading-relaxed">
              Diving deep into Infrastructure as Code and strengthening my understanding of SQL for 
              managing and querying relational databases. Currently focused on learning how to provision 
              and automate infrastructure efficiently, while building a strong foundation in data 
              handling and backend integration.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-semibold mb-4">What I Do</h3>
            <p className="text-white/90 leading-relaxed">
              Configure and manage networked systems using Cisco technologies, Linux servers, and Windows Server 
              environments. I work with network services to build secure, scalable infrastructures. 
              I enjoy integrating open-source tools and automating 
              system tasks to streamline operations.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-4">Goals</h3>
            <p className="text-white/90 leading-relaxed">
              Build a meaningful career in IT by combining technical expertise with real-world problem 
              solving. Focused on developing practical solutions that add value, while staying adaptable 
              in a fast-evolving industry.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-4">Learning & Growth</h3>
            <p className="text-white/90 leading-relaxed">
              Committed to lifelong learning through hands-on practice, certifications, and community 
              involvement. Continuously expanding my skills in modern IT infrastructure, 
              while staying curious, adaptable, and engaged with new technologies.
            </p>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white text-indigo-900 font-semibold rounded-full hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-900 hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;