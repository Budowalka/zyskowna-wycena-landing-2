import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckSquare } from 'lucide-react';

const BonusesSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const bonuses = [
    {
      id: 1,
      title: "Checklisty inspekcji obiektu",
      value: "300 zł",
      description: [
        "Gotowe listy kontrolne dla różnych typów projektów (łazienki, kuchnie, całe domy)",
        "Zbierasz wszystkie dane techniczne podczas pierwszej wizyty",
        "Klienci widzą Cię jako profesjonalistę już na etapie spotkania"
      ]
    },
    {
      id: 2,
      title: "Kalkulator kosztów pośrednich",
      value: "700 zł",
      description: [
        "Precyzyjnie oblicza, jakie narzuty musisz stosować w każdej wycenie",
        "Uwzględnia ukryte koszty, o których większość firm zapomina",
        "Gwarantuje, że każdy projekt przyniesie zysk, nie stratę"
      ]
    },
    {
      id: 3,
      title: "Metodologia zmian projektu",
      value: "700 zł",
      description: [
        "System przekształcający \"dodatkowe prace\" w źródło dodatkowego zysku",
        "System uzyskiwania potwierdzeń od klienta (OK kod)",
        "Koniec z \"dokładaniem\" do projektów przy zmianach zakresu"
      ]
    },
    {
      id: 4,
      title: "Tracker rentowności",
      value: "500 zł",
      description: [
        "Monitorujesz na żywo, czy projekt idzie zgodnie z planem finansowym",
        "System wczesnego ostrzegania o potencjalnych stratach",
        "Błyskawiczne raportowanie rentowności każdego projektu"
      ]
    },
    {
      id: 5,
      title: "Szablon budżetu firmy",
      value: "300 zł",
      description: [
        "Gotowy arkusz planowania finansów Twojej firmy",
        "Koniec z \"znikającymi pieniędzmi\" i zaskakującymi wydatkami",
        "Pełna kontrola nad przepływem środków"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Bonusy – tylko dla planu 1497 zł
          </h2>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-300">
            <button
              className="w-full py-6 px-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="text-xl font-semibold text-blue-900">
                Rozwiń, aby zobaczyć 5 dodatkowych narzędzi
              </span>
              <span className="text-blue-600">
                {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </span>
            </button>
            
            {isExpanded && (
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {bonuses.map((bonus) => (
                    <div key={bonus.id} className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-700 font-bold text-lg">{bonus.id}</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-bold mr-2">{bonus.title}</h3>
                          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                            {bonus.value}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {bonus.description.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-lg font-semibold">
                    Łączna wartość narzędzi – 2500 zł. <span className="text-green-600">Dziś 0 zł.</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;