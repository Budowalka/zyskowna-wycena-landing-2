import React from 'react';
import { Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="mb-4">
                <img 
                  src="/images/Budowalka-Logo-White.png" 
                  alt="Budowalka" 
                  className="h-8"
                />
              </div>
              <p className="mb-4">
                System do wyceny projektów dla firm 2-30 osób, który zwiększa marżę, oszczędza czas i eliminuje niedoszacowania.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/budowalka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <Facebook size={20} />
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/budowalka/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <Instagram size={20} />
                  </div>
                </a>
                <a 
                  href="https://www.youtube.com/budowalka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <Youtube size={20} />
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Linki</h3>
              <ul className="space-y-2">
                <li><a href="#funkcje" className="hover:text-white transition">Funkcje systemu</a></li>
                <li><a href="#cennik" className="hover:text-white transition">Cennik</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                <li>
                  <a 
                    href="https://budowalka.pl/legal/polityka-prywatnosci" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Polityka prywatności
                  </a>
                </li>
                <li>
                  <a 
                    href="https://budowalka.pl/legal/regulamin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Regulamin
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Kontakt</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                  <a 
                    href="mailto:hej@budowalka.pl"
                    className="hover:text-white transition"
                  >
                    hej@budowalka.pl
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {currentYear} Budowalka. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;