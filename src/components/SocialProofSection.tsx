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
  
  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      text: "Wycena skrócona z 4h do 25 min, marża wzrosła o 15%. System już po pierwszym projekcie się zwrócił.",
      author: "Marek K.",
      company: "firma remontowa (8 osób)",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      text: "Przestałem się zastanawiać, czy wszystko policzyłem. Wyceniam szybciej o 80% i klienci dostają oferty dokładnie wtedy, kiedy obiecuję.",
      author: "Adam W.",
      company: "wykończenia wnętrz (5 osób)",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Logo Bar */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {companyLogos.map(logo => (
                <div key={logo.id} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {/* Placeholder for actual company logos */}
                  <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 font-medium">{logo.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
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
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                
                {/* Author info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
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