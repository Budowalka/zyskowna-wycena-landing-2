import React, { useState, useRef, useEffect } from 'react';
import { Check, X } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const fullPlanRef = useRef<HTMLDivElement>(null);
  
  // Sprawdzanie czy urządzenie jest mobilne
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px to breakpoint dla md: w Tailwind
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Przewijanie do pakietu "Pełny System" po wybraniu opcji rat na mobilnych urządzeniach
  useEffect(() => {
    if (isYearly && isMobile && fullPlanRef.current) {
      // Dodanie małego opóźnienia dla lepszego UX
      setTimeout(() => {
        fullPlanRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [isYearly, isMobile]);
  
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '97',
      popular: false,
      features: [
        { id: 1, text: '40-min szkolenie "Rzeczywista stawka"', included: true },
        { id: 2, text: 'Excel-kalkulator', included: true },
        { id: 3, text: 'Kompletny system 4 modułów', included: false },
        { id: 4, text: 'Dodatkowe 5 narzędzi (wartość 2500 zł)', included: false },
        { id: 5, text: '30 dni wsparcia (Slack/Q&A)', included: false },
        { id: 6, text: 'Zwrot po 1-2 projektach', included: false },
        { id: 7, text: 'Gwarancja 14 dni', included: false },
        { id: 8, text: '4h wspólnej konfiguracji', included: false },
        { id: 9, text: 'Audyt kosztów', included: false },
        { id: 10, text: '1 termin/tydzień', included: false },
      ],
      ctaText: 'Odblokuj za 97 zł',
      ctaLink: 'https://easl.ink/3UC8E',
      ctaColor: 'bg-gray-500 hover:bg-gray-600'
    },
    {
      id: 'full',
      name: 'Pełny System',
      price: '1497',
      popular: true,
      features: [
        { id: 1, text: '40-min szkolenie "Rzeczywista stawka"', included: true },
        { id: 2, text: 'Excel-kalkulator', included: true },
        { id: 3, text: 'Kompletny system 4 modułów', included: true },
        { id: 4, text: 'Dodatkowe 5 narzędzi (wartość 2500 zł)', included: true },
        { id: 5, text: '30 dni wsparcia (Slack/Q&A)', included: true },
        { id: 6, text: 'Zwrot po 1-2 projektach', included: true },
        { id: 7, text: 'Gwarancja 14 dni', included: true },
        { id: 8, text: '4h wspólnej konfiguracji', included: false },
        { id: 9, text: 'Audyt kosztów', included: false },
        { id: 10, text: '1 termin/tydzień', included: false },
      ],
      ctaText: 'Wdrażam system',
      ctaLink: 'https://easl.ink/TNDXx',
      ctaColor: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      id: 'consulting',
      name: 'Pełne wdrożenie',
      price: '2900',
      popular: false,
      features: [
        { id: 1, text: '40-min szkolenie "Rzeczywista stawka"', included: true },
        { id: 2, text: 'Excel-kalkulator', included: true },
        { id: 3, text: 'Kompletny system 4 modułów', included: true },
        { id: 4, text: 'Dodatkowe 5 narzędzi (wartość 2500 zł)', included: true },
        { id: 5, text: '30 dni wsparcia (Slack/Q&A)', included: true },
        { id: 6, text: 'Zwrot po 1-2 projektach', included: true },
        { id: 7, text: 'Gwarancja 14 dni', included: true },
        { id: 8, text: '4h wspólnej konfiguracji', included: true },
        { id: 9, text: 'Audyt kosztów', included: true },
        { id: 10, text: '1 termin/tydzień', included: true },
      ],
      ctaText: 'Rezerwuję termin',
      ctaLink: 'https://easl.ink/miTwG',
      ctaColor: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <section id="cennik" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Wybierz odpowiedni plan
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Zacznij od podstaw lub wdróż kompletny system oszczędzający czas i zwiększający marżę
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button
                className={`py-2 px-4 rounded-full ${!isYearly ? 'bg-white shadow-md text-blue-600' : 'text-gray-600'}`}
                onClick={() => setIsYearly(false)}
              >
                Jednorazowo
              </button>
              <button
                className={`py-2 px-4 rounded-full ${isYearly ? 'bg-white shadow-md text-blue-600' : 'text-gray-600'}`}
                onClick={() => setIsYearly(true)}
              >
                3 raty
              </button>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                ref={plan.id === 'full' ? fullPlanRef : null}
                className={`bg-white rounded-2xl overflow-hidden ${
                  plan.popular 
                    ? 'ring-4 ring-orange-500 shadow-2xl lg:-mt-6 lg:mb-6 relative z-20' 
                    : 'border border-gray-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                    Najpopularniejszy
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold">
                        {isYearly && plan.id === 'full' ? '549' : 
                         isYearly && plan.id === 'consulting' ? '1100' : plan.price}
                      </span>
                      <span className="text-gray-600 mb-1">zł</span>
                      {isYearly && (plan.id === 'full' || plan.id === 'consulting') && (
                        <span className="text-sm text-gray-500 mb-1 ml-1">× 3 raty</span>
                      )}
                    </div>
                    {isYearly && plan.id === 'full' && (
                      <div className="text-sm text-gray-500 mt-1">
                        Łącznie: 1647 zł
                      </div>
                    )}
                    {isYearly && plan.id === 'consulting' && (
                      <div className="text-sm text-gray-500 mt-1">
                        Łącznie: 3300 zł
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.id} className="flex items-start">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 px-6 text-center text-white font-semibold rounded-lg transition ${plan.ctaColor} ${plan.popular ? 'transform hover:scale-105' : ''}`}
                  >
                    {plan.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;