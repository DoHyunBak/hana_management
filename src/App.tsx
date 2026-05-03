import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import CheckBeforeChoosingSection from './components/CheckBeforeChoosingSection';
import SuccessPortfolio from './components/SuccessPortfolio';
import ServicesSection from './components/ServicesSection';
import ManagementScopeSection from './components/ManagementScopeSection';
import TargetSection from './components/TargetSection';
import LocalTrustSection from './components/LocalTrustSection';
import ChecklistSection from './components/ChecklistSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white selection:bg-secondary/20 selection:text-secondary antialiased">
      {/* Signature Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-secondary origin-left z-[200]" 
        style={{ scaleX }} 
      />

      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <CheckBeforeChoosingSection />
        <SuccessPortfolio />
        <ServicesSection />
        <ManagementScopeSection />
        <TargetSection />
        <LocalTrustSection />
        <ChecklistSection />
        <ProcessSection />
        <ContactSection />
        <FAQSection />
        <MapSection />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;
