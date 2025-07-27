import React, { useState } from 'react';

const AllProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "Vantage Grid Cloud Services Project",
      date: "2024",
      description: "Fully configured network from scratch, including essential services such as DNS, DHCP, NTP, FTP, web hosting, and secure access controls. The infrastructure was implemented with virtual machines, Cisco routers, and both Windows and Linux servers.",
      technologies: ["DNS", "CISCO", "Networking", "VMWare", "Active Directory"],
      status: "Completed",
      link: "https://large-puma-4e9.notion.site/Project-1-Vantage-Grid-Cloud-Services-45bcd884e7b249c1b020a3f36c8ee36d",
      linkText: "View on Notion",
      category: "Infrastructure",
      highlights: ["Network Configuration", "Multi-OS Environment", "Security Implementation"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "The Cloud Resume Challenge - Front End",
      date: "2025",
      description: "Created a responsive resume site using React.js and Tailwind CSS, with a clean, component-based layout. Hosted on AWS S3 with CloudFront for fast global delivery. Version-controlled with Git, the front-end emphasizes best practices, accessibility, and smooth AWS integration.",
      technologies: ["Git", "React", "Tailwind CSS", "AWS S3", "CloudFront"],
      status: "Completed",
      link: "https://large-puma-4e9.notion.site/AWS-The-Cloud-Resume-Challenge-Front-end-230ba0d128c980d29799c7380506d13e",
      linkText: "View on Notion",
      category: "Cloud Development",
      highlights: ["CDN Optimization", "Static Hosting with S3 & CloudFront", "Responsive UI with React & Tailwind CSS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "The Cloud Resume Challenge - Back End",
      date: "2025",
      description: "Built a scalable, serverless back end using AWS Lambda, API Gateway, and DynamoDB to track and return website visitor count. All infrastructure was automated with CloudFormation.",
      technologies: ["Python", "AWS Lambda", "DynamoDB", "API Gateway", "CloudFormation"],
      status: "Completed",
      link: "https://large-puma-4e9.notion.site/AWS-The-Cloud-Resume-Challenge-Back-end-238ba0d128c9800cbc9cf57c598b44e4",
      linkText: "View on Notion",
      category: "Cloud Development",
      highlights: ["Serverless API with Lambda & API Gateway", "Real-Time Visitor Counter with DynamoDB", "Infrastructure as Code with CloudFormation"],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const StatusBadge = ({ status }) => (
    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-medium shadow-sm">
      {status}
    </span>
  );

  const TechBadge = ({ tech }) => (
    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium border border-white/30 hover:bg-white/30 transition-all duration-300">
      {tech}
    </span>
  );

  const CategoryBadge = ({ category }) => (
    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-md font-medium border border-white/20">
      {category}
    </span>
  );

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-3xl">📁</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Projects
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore my complete portfolio of technical projects spanning cloud infrastructure, 
            networking, full-stack development, and innovative solutions
          </p>
          
          {/* Back to Home Link */}
          <div className="mt-8">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Projects Showcase */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Project Counter */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-white/70 text-sm">
              <span>{String(activeProject + 1).padStart(2, '0')}</span>
              <div className="w-12 h-px bg-white/30"></div>
              <span>{String(projects.length).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Main Project Display */}
          <div className="relative">
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${activeProject * 100}%)` }}>
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-6xl mx-auto">
                    
                    {/* Project Card */}
                    <div className={`relative bg-gradient-to-br ${project.color} rounded-3xl p-1 shadow-2xl`}>
                      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
                        
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                          <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <CategoryBadge category={project.category} />
                            <StatusBadge status={project.status} />
                          </div>
                          <div className="flex items-center text-white/70 text-sm">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                            </svg>
                            {project.date}
                          </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          
                          {/* Left Content */}
                          <div className="space-y-8">
                            <div>
                              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                {project.title}
                              </h2>
                              <p className="text-white/80 text-lg leading-relaxed">
                                {project.description}
                              </p>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h3 className="text-white font-semibold mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Technologies Used
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                  <TechBadge key={techIndex} tech={tech} />
                                ))}
                              </div>
                            </div>

                            {/* CTA Button */}
                            <div>
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                              >
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                {project.linkText}
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                              </a>
                            </div>
                          </div>

                          {/* Right Content - Highlights */}
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-white font-bold text-xl mb-6 flex items-center">
                              <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                              Key Highlights
                            </h3>
                            <div className="space-y-4">
                              {project.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-white/90 leading-relaxed">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center group"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center group"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeProject 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Interested in Working Together?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:joseortizgarciaq.ca@gmail.com" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;