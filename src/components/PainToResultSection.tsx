import React from 'react';
import { Clock, AlertTriangle, LineChart } from 'lucide-react';

const PainToResultSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">
            Tracisz 4 h/tydz. i średnio 17 % marży – zobacz dlaczego
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Problemy, które rozwiązuje system:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Problem 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Czas</h3>
              <p className="text-gray-600">
                Każda wycena pochłania od 1 do 5 godzin, które mógłbyś przeznaczyć na rodzinę lub rozwój firmy
              </p>
            </div>
            
            {/* Problem 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dokładność</h3>
              <p className="text-gray-600">
                Niedoszacowania zjadają <span className="font-semibold">średnio 17%</span> marży (nasze testy na 11 firmach)
              </p>
            </div>
            
            {/* Problem 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Spójność</h3>
              <p className="text-gray-600">
                7 z 10 firm zapomina o kosztach pośrednich. Nigdy nie masz pewności, czy wszystkie materiały i prace zostały uwzględnione w wycenie
              </p>
            </div>
          </div>
          
          {/* Before & After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Before */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90"></div>
              <div className="aspect-[4/3] bg-gray-200">
                <div className="w-full h-full bg-gray-800 p-6 flex items-center justify-center">
                  {/* <div className="grid grid-cols-5 gap-2 w-full max-w-xs opacity-60">
                    {Array(20).fill(0).map((_, i) => (
                      <div key={i} className="h-4 bg-gray-600 rounded"></div>
                    ))}
                  </div> */}
                  <img 
                    src="/images/messy-excel.png" 
                    alt="Chaotyczny Excel przed wdrożeniem systemu" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">PRZED</span>
                  <span className="bg-red-500 text-white rounded-full py-1 px-4 font-bold">3h+</span>
                </div>
                <p className="text-sm mt-2 opacity-90">Chaotyczny Excel, trudny do odczytania</p>
              </div>
            </div>
            
            {/* After */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60"></div>
              <div className="aspect-[4/3] bg-gray-200">
                <div className="w-full h-full bg-white p-6 flex flex-col items-center justify-center">
                  {/* <div className="w-full mb-4">
                    <div className="h-8 bg-blue-600 rounded w-full mb-2"></div>
                    <div className="grid grid-cols-2 gap-2 w-full">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-3 gap-2">
                    {Array(9).fill(0).map((_, i) => (
                      <div key={i} className="h-12 bg-gray-100 rounded shadow-sm"></div>
                    ))}
                  </div> */}
                  <img 
                  src="/images/nice-pdf.png" 
                  alt="Profesjonalny PDF po wdrożeniu systemu" 
                  className="w-full h-full object-contain"
                />
              </div>
                </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">PO</span>
                  <span className="bg-green-500 text-white rounded-full py-1 px-4 font-bold">15 min</span>
                </div>
                <p className="text-sm mt-2 opacity-90">Elegancki PDF, profesjonalny i przejrzysty</p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <a
              href="#cennik"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-4 px-10 rounded-full font-semibold transition transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              Policz stawkę w 20 min – 97 zł
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainToResultSection;