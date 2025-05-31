import React from 'react';
import { partners } from '../../data';

const GlobalSection: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Global Meets Local
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-600 mb-12">
            Youth Impact brings global experience and rigorous evidence to support state systems in delivering high-quality education at scale. Our partnerships with leading organizations enable us to combine the best research with practical implementation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="flex flex-col items-center"
                style={{
                  animation: `fadeIn 0.5s ease-out ${partner.id * 0.1}s both`
                }}
              >
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">
              Our Approach to Partnership
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-800 mb-2">What We Bring:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Evidence-based teaching methodologies</li>
                  <li>Rigorous impact measurement</li>
                  <li>Technology platforms that scale</li>
                  <li>Training and capacity building</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-800 mb-2">How We Work Together:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Adapt global best practices to local contexts</li>
                  <li>Build on existing government systems</li>
                  <li>Co-design solutions with local stakeholders</li>
                  <li>Focus on sustainability from day one</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;