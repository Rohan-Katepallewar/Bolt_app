import React from 'react';
import { Phone, Users, BookOpen } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Phone size={40} className="text-blue-500" />,
      title: "1:1 Tutoring Calls",
      description: "Personalized phone-based tutoring sessions connect students with expert educators to focus on their specific learning needs."
    },
    {
      icon: <Users size={40} className="text-green-500" />,
      title: "Parent Engagement",
      description: "Parents become active participants in their child's learning journey through regular updates and simple home activities."
    },
    {
      icon: <BookOpen size={40} className="text-indigo-500" />,
      title: "Tech + Pedagogy",
      description: "Evidence-based teaching methods combined with technology track progress and adapt to each student's learning pace."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          How It Works
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our comprehensive approach combines multiple elements to create a powerful learning system that delivers measurable improvements in foundational numeracy.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform hover:translate-y-[-5px]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-4">
            The Connected Learning Experience
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex-1 max-w-md">
              <p className="text-gray-700 mb-4">
                When these three elements work together, they create a powerful ecosystem for learning:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Regular practice reinforces concepts</li>
                <li>Immediate feedback corrects misconceptions</li>
                <li>Data-driven insights guide instruction</li>
                <li>Community support strengthens motivation</li>
                <li>Adaptive content meets learners where they are</li>
              </ul>
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">Interactive diagram</p>
                  <p className="text-sm text-gray-400">(Visual representation of the learning system)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;