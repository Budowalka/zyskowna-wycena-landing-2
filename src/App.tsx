import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PainToResultSection from './components/PainToResultSection';
import SocialProofSection from './components/SocialProofSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import BonusesSection from './components/BonusesSection';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PainToResultSection />
        <SocialProofSection />
        <FeaturesSection />
        <PricingSection />
        <BonusesSection />
        <GuaranteeSection />
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
}

export default App;