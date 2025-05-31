import React, { useState } from 'react';
import { BarData } from '../../types';
import { impactData } from '../../data';
import { Info } from 'lucide-react';

const BarGraph: React.FC<{ data: BarData[] }> = ({ data }) => {
  const [hoverInfo, setHoverInfo] = useState<{ show: boolean; text: string; x: number; y: number }>({
    show: false,
    text: '',
    x: 0,
    y: 0
  });

  const maxValue = Math.max(...data.map(item => item.value));
  
  const handleMouseEnter = (e: React.MouseEvent, label: string, value: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverInfo({
      show: true,
      text: `${label}: ${value} SD`,
      x: rect.left + rect.width / 2,
      y: rect.top
    });
  };
  
  const handleMouseLeave = () => {
    setHoverInfo({
      ...hoverInfo,
      show: false
    });
  };

  return (
    <div className="mt-8 h-64 flex items-end space-x-4 relative">
      {data.map((item, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center flex-1"
          onMouseEnter={(e) => handleMouseEnter(e, item.label, item.value)}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="w-full rounded-t-md transition-all duration-1000 transform origin-bottom"
            style={{ 
              backgroundColor: item.color,
              height: `${(item.value / maxValue) * 100}%`,
              animation: `growUp 1.5s ease-out ${index * 0.2}s both`
            }}
          />
          <div className="text-xs font-medium mt-2 text-center">{item.label}</div>
          <div className="text-sm font-bold">{item.value} SD</div>
        </div>
      ))}
      
      {hoverInfo.show && (
        <div 
          className="absolute bg-gray-800 text-white px-3 py-1 rounded text-sm"
          style={{
            left: `${hoverInfo.x}px`,
            top: `${hoverInfo.y - 40}px`,
            transform: 'translateX(-50%)',
            zIndex: 10
          }}
        >
          {hoverInfo.text}
        </div>
      )}
    </div>
  );
};

const ImpactSection: React.FC = () => {
  const [showDefinition, setShowDefinition] = useState(false);
  
  return (
    <section id="impact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Impact at Scale
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <h3 className="text-xl md:text-2xl font-semibold text-center">
              One of the biggest learning gains in education
            </h3>
            <button 
              className="ml-2 text-blue-600 hover:text-blue-800"
              onClick={() => setShowDefinition(!showDefinition)}
              aria-label="Show effect size definition"
            >
              <Info size={20} />
            </button>
          </div>
          
          {showDefinition && (
            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded transition-all">
              <p>
                <strong>Effect Size (SD):</strong> A standardized measure that quantifies the difference between groups. 
                In education, an effect size of 0.2 is considered small, 0.5 is medium, and 0.8+ is large. 
                ConnectEd's 0.3 SD effect represents approximately 3 months of additional learning.
              </p>
            </div>
          )}
          
          <BarGraph data={impactData} />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;