import React from 'react';
import { Briefcase, Target, Database, Zap } from 'lucide-react';

const ModulesSection: React.FC = () => {
  const modules = [
    {
      id: 1,
      icon: <Briefcase className="w-10 h-10 text-white" />,
      iconBg: 'bg-red-500',
      title: 'Moduł 1',
      heading: 'RENTGEN FINANSOWY TWOJEJ FIRMY',
      points: [
        'Prześwietlisz ukryte koszty, które zjadają Twój zysk i nauczysz się je skutecznie uwzględniać w każdej wycenie.',
        'Stworzysz system, który zapewnia, że każdy projekt pokrywa swoją część kosztów funkcjonowania firmy.',
        'Zidentyfikujesz wszystkie koszty pośrednie i systematycznie uwzględnisz je w procesie wyceniania.',
      ],
      conclusion: 'Koniec z projektami pozornie zyskownymi, ale faktycznie przynoszącymi straty.'
    },
    {
      id: 2,
      icon: <Target className="w-10 h-10 text-white" />,
      iconBg: 'bg-blue-500',
      title: 'Moduł 2',
      heading: 'KOMPLETNA DIAGNOZA PROJEKTU',
      points: [
        'Opanujesz sztukę systematycznego zbierania kompletnych informacji do wyceny.',
        'Otrzymasz gotowe checklisty pytań i techniki zbierania informacji od klienta.',
        'Nauczysz się zdobywać nie tylko wymiary i specyfikacje techniczne, ale także głębsze potrzeby klienta.',
      ],
      conclusion: 'Unikniesz kosztownych pomyłek i konieczności wielokrotnego kontaktowania się z klientem.'
    },
    {
      id: 3,
      icon: <Database className="w-10 h-10 text-white" />,
      iconBg: 'bg-green-500',
      title: 'Moduł 3',
      heading: 'TURBO WYCENY W 15 MINUT',
      points: [
        'Stworzysz własną bazę komponentów, która pozwoli Ci wyceniać projekty w 15 minut zamiast 3 godzin.',
        'Zbudujesz bibliotekę gotowych, sprawdzonych elementów, które wykorzystasz wielokrotnie.',
        'To jak klocki Lego - zamiast budować każdą wycenę od podstaw, złożysz ją z gotowych elementów.',
      ],
      conclusion: 'Zaoszczędzisz dziesiątki godzin miesięcznie, które teraz tracisz na żmudne wyceny.'
    },
    {
      id: 4,
      icon: <Zap className="w-10 h-10 text-white" />,
      iconBg: 'bg-purple-500',
      title: 'Moduł 4',
      heading: 'SYSTEM NA AUTOPILOCIE',
      points: [
        'Zautomatyzujesz proces wycen i generowania ofert, oszczędzając dziesiątki godzin miesięcznie.',
        'Poznasz dostępne narzędzia do automatyzacji żmudnych, powtarzalnych zadań w wycenach.',
        'Twoja wiedza będzie wykorzystywana tylko do finalnych korekt, a nie do pracy, którą może wykonać automat.',
      ],
      conclusion: 'Uwolnisz czas i energię na rozwijanie biznesu zamiast gaszenia pożarów.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            System Zyskowna Wycena
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Kompleksowe rozwiązanie składające się z 4 modułów
          </p>
          
          <div className="space-y-8">
            {modules.map((module) => (
              <div key={module.id} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className={`w-16 h-16 ${module.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      {module.icon}
                    </div>
                    <div className="text-blue-600 font-medium">
                      {module.title}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mt-2 md:mt-4 leading-tight">
                      {module.heading}
                    </h3>
                  </div>
                  
                  <div className="md:w-3/4">
                    <ul className="space-y-4 mb-6">
                      {module.points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-3">•</span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                      <p className="text-blue-800 font-medium">
                        {module.conclusion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="#cennik"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-4 px-10 rounded-full font-semibold transition transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              Wdrażam system
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection; 