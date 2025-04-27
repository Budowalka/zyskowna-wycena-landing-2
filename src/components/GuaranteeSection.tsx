import React, { useState } from 'react';
import { Shield, ChevronDown, ChevronUp } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const faqItems = [
    {
      id: 1,
      question: "Jak długo trwa wdrożenie systemu?",
      answer: "Podstawowe wdrożenie zajmuje 2-3 dni. Pełne dostosowanie do specyfiki Twojej firmy to maksymalnie 2 tygodnie przy odpowiednim zaangażowaniu, szczególnie jeśli tworzysz własne kartoteki RMS. Pierwsze wyceny w nowym systemie zrobisz już w ciągu 24 godzin od otrzymania dostępu."
    },
    {
      id: 2,
      question: "Czy potrzebuję specjalistycznego sprzętu lub oprogramowania?",
      answer: "Nie. System działa w chmurze i wymaga jedynie dostępu do internetu oraz podstawowych umiejętności obsługi komputera (poziom Excel). Współpracuje z popularnymi narzędziami jak Google Sheets, Excel czy LibreOffice."
    },
    {
      id: 3,
      question: "Czy mogę rozłożyć płatność na raty?",
      answer: "Tak, oferujemy możliwość płatności w 3 ratach po 549 zł (łącznie 1647 zł) dla planu \"System Zyskowna Wycena\"."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Guarantee Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-16 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-96 h-96" />
              </div>
            </div>
            
            <div className="relative z-10">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Gwarancja 100% satysfakcji
              </h2>
              <h3 className="text-xl font-semibold mb-6 text-blue-800">
                14 dni pełnej satysfakcji lub zwrot pieniędzy – bez zbędnych pytań
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Jeśli z jakiegokolwiek powodu uznasz, że system nie spełnia Twoich oczekiwań, po prostu napisz do nas w ciągu 14 dni od zakupu, a zwrócimy Ci każdą złotówkę.
              </p>
            </div>
          </div>
          
          {/* FAQ Section */}
          <h2 className="text-3xl font-bold mb-12 text-center">
            Często zadawane pytania
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div 
                key={item.id} 
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(item.id)}
                >
                  <span className="font-semibold text-lg">{item.question}</span>
                  <span className="text-blue-600">
                    {openFaq === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                
                {openFaq === item.id && (
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;