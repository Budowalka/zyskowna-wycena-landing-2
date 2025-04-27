import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PainToResultSection from './components/PainToResultSection';
import ModulesSection from './components/ModulesSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import BonusesSection from './components/BonusesSection';
import GuaranteeSection from './components/GuaranteeSection';
import SocialProofSection from './components/SocialProofSection';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PainToResultSection />
        <ModulesSection />
        <FeaturesSection />
        <SocialProofSection />
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