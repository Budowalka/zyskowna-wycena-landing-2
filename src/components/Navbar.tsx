import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/Budowalka-Logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Budowalka" 
            className="h-8"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#funkcje" className="text-gray-700 hover:text-blue-600 transition">Funkcje</a></li>
              <li><a href="#cennik" className="text-gray-700 hover:text-blue-600 transition">Cennik</a></li>
              <li><a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a></li>
            </ul>
          </nav>
          <a 
            href="https://easl.ink/3UC8E"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full font-medium transition transform hover:scale-105"
          >
            Policz stawkę
          </a>
        </div>
        
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-5">
            <ul className="space-y-4">
              <li><a href="#funkcje" className="block text-gray-700 hover:text-blue-600 py-2 transition" onClick={() => setIsMenuOpen(false)}>Funkcje</a></li>
              <li><a href="#cennik" className="block text-gray-700 hover:text-blue-600 py-2 transition" onClick={() => setIsMenuOpen(false)}>Cennik</a></li>
              <li><a href="#faq" className="block text-gray-700 hover:text-blue-600 py-2 transition" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
              <li>
                <a 
                  href="https://easl.ink/TNDXx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-medium text-center transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Policz stawkę
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;