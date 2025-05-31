import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { quotes } from '../../data';

const QuoteCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    // Auto-advance carousel every 8 seconds
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % quotes.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? quotes.length - 1 : current - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % quotes.length);
  };
  
  const handlePlayAudio = () => {
    setIsPlaying(true);
    // Simulate audio playing
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {quotes.map((quote, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 px-6"
            >
              <blockquote className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <p className="text-gray-700 text-lg italic mb-4">"{quote.text}"</p>
                <footer>
                  <p className="font-semibold text-gray-800">{quote.author}</p>
                  <p className="text-gray-500 text-sm">{quote.role}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button 
          onClick={handlePrev}
          className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
          aria-label="Previous quote"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex space-x-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              } transition-colors`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={handleNext}
          className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
          aria-label="Next quote"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

const VoicesSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayAudio = () => {
    setIsPlaying(true);
    // Simulate audio playing
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <section id="voices" className="py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Voices from the Ground
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Hear from the teachers, parents, and officials who have experienced the impact of our programs firsthand.
        </p>
        
        <QuoteCarousel />
        
        <div className="mt-16 max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Listen to a Sample Tutoring Call
          </h3>
          <div className="flex items-center justify-center">
            <button
              onClick={handlePlayAudio}
              disabled={isPlaying}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full ${
                isPlaying 
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                  : 'bg-green-500 text-white hover:bg-green-600'
              } transition-colors`}
            >
              <Play size={20} />
              <span>{isPlaying ? 'Playing...' : 'Play Sample'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;