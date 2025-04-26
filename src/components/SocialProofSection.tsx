import React from 'react';
import { Star } from 'lucide-react';

const SocialProofSection: React.FC = () => {
  // Mock data for company logos
  const companyLogos = [
    { id: 1, name: "Company 1" },
    { id: 2, name: "Company 2" },
    { id: 3, name: "Company 3" },
    { id: 4, name: "Company 4" },
    { id: 5, name: "Company 5" },
  ];
  
  // Real testimonials
  const testimonials = [
    {
      id: 1,
      text: "Pieniądze 💰 wydane na współpracę z Piotrem to bardzo dobra inwestycja. Pokazał mi, jak łatwo pilnować budżetu. Teraz dokładnie wiem, ile mam zysku z projektu i nie tracę czasu na rozliczanie pracowników – wszystko robi się automatycznie.",
      author: "Krystian Piątek",
      company: ""
    },
    {
      id: 2,
      text: "Współpraca uświadomiła mi, jak obliczać realny zysk i marże, co wliczać w koszty i jak mierzyć wydajność. Wnioski? Moje prace były bardzo zaniżone.",
      author: "Rafał Sadecki",
      company: ""
    },
    {
      id: 3,
      text: "To jest super! Moja firma jest dobrym przykładem na to, że system Piotra naprawdę działa i oszczędza obecnie mnóstwo czasu.",
      author: "Marius Venckus",
      company: ""
    },
    {
      id: 4,
      text: "Dzięki rozwiązaniom Piotra zyskałem kontrolę nad firmą. Nauczyłem się efektywnie zbierać dane finansowe. Inwestycja zwróciła się bardzo szybko w postaci dużo większej ilości wolnego czasu.",
      author: "Adrian Seifert",
      company: ""
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Logo Bar - Can be uncommented when real logos are available */}
          {/* <div className="mb-16">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {companyLogos.map(logo => (
                <div key={logo.id} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 font-medium">{logo.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Co mówią użytkownicy
          </h2>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg relative">
                {/* Quote mark */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-serif">"</span>
                </div>
                
                {/* Star rating */}
                <div className="flex mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                
                {/* Author info */}
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  {testimonial.company && (
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;