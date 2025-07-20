import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Vantage Grid Cloud Services Project",
      date: "2024",
      description: "Fully configured network from scratch, including essential services such as DNS, DHCP, NTP, FTP, web hosting, and secure access controls. The infrastructure was implemented with virtual machines, Cisco routers, and both Windows and Linux servers.",
      technologies: ["CISCO", "Networking", "VMWare", "Active Directory"],
      status: "Completed",
      link: "https://large-puma-4e9.notion.site/Project-1-Vantage-Grid-Cloud-Services-45bcd884e7b249c1b020a3f36c8ee36d",
      linkText: "View on Notion",
      category: "Infrastructure",
      highlights: ["Network Configuration", "Multi-OS Environment", "Security Implementation"]
    },
    {
      title: "The Cloud Resume Challenge on AWS - Front End",
      date: "2025",
      description: "Created a responsive resume site using React.js and Tailwind CSS, with a clean, component-based layout. Hosted on AWS S3 with CloudFront for fast global delivery. Version-controlled with Git, the front-end emphasizes best practices, accessibility, and smooth AWS integration.",
      technologies: ["Git", "React", "AWS S3", "CloudFront"],
      status: "Completed",
      link: "https://large-puma-4e9.notion.site/AWS-The-Cloud-Resume-Challenge-Front-end-230ba0d128c980d29799c7380506d13e",
      linkText: "View on Notion",
      category: "Cloud Development",
      highlights: ["CDN Optimization", "Static Hosting with S3 & CloudFront", "Responsive UI with React & Tailwind CSS"]
    }
  ];

  const StatusBadge = ({ status }) => (
    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-medium shadow-sm">
      {status}
    </span>
  );

  const TechBadge = ({ tech }) => (
    <span className="px-2 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs rounded-full font-medium border border-blue-200 hover:border-blue-300 transition-colors">
      {tech}
    </span>
  );

  const CategoryBadge = ({ category }) => (
    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-md font-medium">
      {category}
    </span>
  );

  return (
    <section id="projects" className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900 py-16 px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-5">
            <span className="text-2xl">🚀</span>
          </div>
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto">
            A showcase of technical projects demonstrating cloud infrastructure, networking, and full-stack development skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 border border-gray-100 hover:border-blue-200 relative overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Header with category and status */}
                <div className="flex items-center justify-between mb-3">
                  <CategoryBadge category={project.category} />
                  <StatusBadge status={project.status} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Date */}
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {project.date}
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Key Highlights
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <TechBadge key={techIndex} tech={tech} />
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                <div className="pt-3 border-t border-gray-100">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors group/link"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {project.linkText}
                    <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;