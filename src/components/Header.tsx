import { Link, useLocation } from 'react-router-dom';
import { Search, Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Use scrolled state or if we are NOT on the home page to decide background
  const showSolidHeader = isScrolled || !isHomePage;

  const navItems = [
    { label: '회사소개', href: '/company' },
    { label: '서비스안내', href: '/services' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 py-3 ${
      isMenuOpen
        ? 'bg-bg-warm'
        : (showSolidHeader ? 'bg-bg-warm/95 backdrop-blur-md shadow-md border-b border-border-warm' : 'bg-transparent')
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group shrink-0 relative z-[1001]" onClick={() => setIsMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="하나주택종합관리"
            className={`h-14 md:h-20 lg:h-24 w-auto block transition-all duration-500 ${
              !showSolidHeader && !isMenuOpen ? 'brightness-0 invert' : ''
            }`}
          />
        </Link>

        <div className="hidden lg:flex flex-1 justify-end items-center lg:space-x-8 xl:space-x-12 ml-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-xs xl:text-sm font-bold tracking-widest transition-all duration-300 hover:text-accent whitespace-nowrap relative group/link ${
                showSolidHeader ? 'text-primary-dark' : 'text-white'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover/link:w-full"></span>
            </Link>
          ))}

          <div className={`flex items-center lg:space-x-4 xl:space-x-6 lg:pl-4 xl:pl-6 border-l ${
            showSolidHeader ? 'border-primary-dark/10' : 'border-white/20'
          }`}>
            <a
              href="tel:070-4227-5394"
              className={`flex items-center space-x-2 transition-colors duration-500 whitespace-nowrap ${
                showSolidHeader ? 'text-primary-dark' : 'text-white'
              }`}
            >
              <Phone size={14} className="text-secondary" />
              <span className="font-bold text-xs">070-4227-5394</span>
            </a>
            <Link
              to={isHomePage ? '#' : '/inquiry'}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`lg:px-4 xl:px-8 py-3 text-xs font-bold transition-all whitespace-nowrap uppercase tracking-widest shadow-md ${
                showSolidHeader ? 'bg-primary-dark text-white hover:bg-primary-deep' : 'bg-white text-primary-dark hover:bg-primary-light'
              }`}
            >
              Consulting
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-6 lg:hidden relative z-[1001]">
          <button className={`${showSolidHeader || isMenuOpen ? 'text-primary-dark' : 'text-white'}`}>
            <Search size={24} />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${showSolidHeader || isMenuOpen ? 'text-primary-dark' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 bg-bg-warm z-[1000] flex flex-col pt-32 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-bold text-primary-dark tracking-tighter border-b border-border-warm pb-4"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-8 flex flex-col space-y-6">
                <a
                  href="tel:070-4227-5394"
                  className="flex items-center space-x-4 text-primary-dark"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-text-sub font-bold uppercase tracking-widest">Call Concierge</p>
                    <p className="text-xl font-bold">070-4227-5394</p>
                  </div>
                </a>
                <Link
                  to="/inquiry"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-primary-dark text-white py-6 text-center font-bold text-xl rounded-sm shadow-xl"
                >
                  무료 상담 신청하기
                </Link>
              </div>
            </div>

            <div className="mt-auto pb-12">
              <p className="text-secondary font-serif italic text-lg tracking-widest uppercase">Hana Standard</p>
              <p className="text-text-muted text-xs mt-2 uppercase tracking-[0.2em]">Next-Gen Property Management</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
