import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "The Complete SQL Bootcamp",
      issuer: "Udemy",
      year: "2022",
      icon: "🗄️",
      link: "/assests/The Complete SQL Bootcamp Cert.pdf",
      platform: "Udemy"
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      year: "2024",
      icon: "🌐",
      link: "https://www.credly.com/badges/07b7c313-368b-4141-b9c2-bd4ca874379f/public_url",
      platform: "Credly"
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      year: "2025",
      icon: "🌐",
      link: "https://www.credly.com/badges/78d31053-795f-409e-bcd8-14cb050acba3/public_url",
      platform: "Credly"
    },
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco Networking Academy",
      year: "2025",
      icon: "🌐",
      link: "https://www.credly.com/badges/fc9c6833-ab08-4fd7-b88b-6824dbe854af/public_url",
      platform: "Credly"
    }
  ];

  return (
    <section id="certifications" className="bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Certifications
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto text-sm">
          Professional certifications demonstrating expertise across networking, cybersecurity, SQL, and programming
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-white p-5 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-200 text-center"
            >
              <div className="flex items-center justify-center mb-3">
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full ml-auto">
                  {cert.year}
                </div>
              </div>
              
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-center">
                {cert.title}
              </h3>
              
              <p className="text-xs text-gray-600 font-medium mb-3 text-center">
                {cert.issuer}
              </p>
              
              {cert.link && (
                <div className="mb-3 text-center">
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors group/link"
                  >
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View on {cert.platform}
                    <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              )}
              
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-center">
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Certification
                  </div>
                  {cert.platform && (
                    <div className="text-xs text-gray-400 font-medium ml-3">
                      {cert.platform}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 text-xs">
            Continuously expanding knowledge through professional development and industry certifications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;