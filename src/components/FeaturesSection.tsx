import React from 'react';
import { Calculator, CheckSquare, Library, FileCheck } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: "Kalkulator narzutu",
      description: "100% kosztów Twojej firmy uwzględnionych w każdej wycenie"
    },
    {
      id: 2,
      icon: <CheckSquare className="w-8 h-8 text-blue-600" />,
      title: "Checklista pomiarów",
      description: "Kompletna diagnoza projektu i oczekiwań klienta"
    },
    {
      id: 3,
      icon: <Library className="w-8 h-8 text-blue-600" />,
      title: "Biblioteka komponentów",
      description: "Wyceniasz złożone projekty w 15 minut zamiast 3 godzin"
    },
    {
      id: 4,
      icon: <FileCheck className="w-8 h-8 text-blue-600" />,
      title: "Autopilot PDF",
      description: "Profesjonalna oferta generowana jednym kliknięciem"
    }
  ];

  return (
    <section id="funkcje" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 rounded-l-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Co otrzymujesz
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {feature.description}
                </p>
                {/* Subtle visual indicator */}
                <div className="w-12 h-1 bg-blue-500 rounded-full mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;