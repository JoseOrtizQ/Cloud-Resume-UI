import React from 'react';
import VisitorCounter from '../VisitorCounter';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="assests/videos/main_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Hi, I'm José</h1>
        <section className="flex flex-wrap justify-center gap-11 text-3xl text-gray-300 drop-shadow-md">
          {[
            ['python-plain-wordmark', 'Python'],
            ['github-original', 'GitHub'],
            ['amazonwebservices-original', 'AWS'],
            ['docker-plain', 'Docker'],
            ['postgresql-plain-wordmark', 'SQL'],
            ['linux-plain', 'Linux'],
            ['windows8-original', 'Windows']
          ].map(([icon, label]) => (
            <div key={label} className="flex flex-col items-center group">
              <i className={`devicon-${icon} transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500`} />
              <span className="text-sm mt-2 group-hover:text-blue-500">{label}</span>
            </div>
          ))}
        </section>

        {/* Visitor Counter */}
        <div className="text-center mt-4 text-white">
          <VisitorCounter />
        </div>

      </div>
    </div>
  );
};

export default Hero;
