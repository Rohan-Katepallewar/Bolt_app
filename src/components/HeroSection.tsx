import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Learning That <span className="text-blue-600">Works</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Transforming education systems with evidence-based approaches 
          that deliver measurable improvements in foundational learning.
        </p>
        <button 
          onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
        >
          See Our Impact
        </button>
      </div>
    </section>
  );
};

export default HeroSection;