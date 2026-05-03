import { motion, useScroll, useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Company from './pages/Company';
import ServicesPage from './pages/Services';
import Inquiry from './pages/Inquiry';

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTopOnNavigate />
      <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary antialiased">
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[200]" 
          style={{ scaleX }} 
        />

        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/inquiry" element={<Inquiry />} />
          </Routes>
        </main>
        <Footer />
        <MobileCTA />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
