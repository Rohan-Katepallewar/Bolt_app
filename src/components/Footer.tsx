import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-6 md:mb-0">
            Made with curiosity by a learning systems builder
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
            
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center transition-colors"
            >
              <Mail size={18} className="mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;