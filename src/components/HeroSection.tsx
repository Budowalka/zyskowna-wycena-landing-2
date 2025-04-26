import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-04-27T23:59:00+02:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900">
            Wycena w 15 min — zero niedoszacowań
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            <strong>Oferta wysłana do klienta zgodnie z obietnicą</strong>, a nie 3 tygodnie później... lub nigdy.
          </p>
          
          {/* Video Section */}
          <div className="max-w-3xl mx-auto mb-12 relative rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1078937332?share=copy"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://easl.ink/3UC8E"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg md:text-xl py-4 px-10 rounded-full font-semibold transition transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Policz stawkę w 20 min – 97 zł
            </a>
            
            <div className="inline-block rounded-full px-6 py-3 mt-4">
              <div className="text-center">
                <div className="text-lg font-bold mb-2">OFERTA WAŻNA...</div>
                <div className="flex justify-center items-center space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold">{timeLeft.days}</div>
                    <div className="text-sm">dni</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-sm">godz</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-sm">min</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-sm">sek</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;