import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

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

  const showSolidHeader = isScrolled || !isHomePage;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 py-3 ${
        showSolidHeader ? 'bg-bg-warm/95 backdrop-blur-md shadow-md border-b border-border-warm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center group shrink-0 relative z-10">
            <img
              src="/logo.png"
              alt="하나주택종합관리"
              className={`h-14 md:h-20 lg:h-24 w-auto block transition-all duration-500 ${
                !showSolidHeader ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>

          <div className="hidden lg:flex flex-1 justify-end items-center lg:space-x-8 xl:space-x-12 ml-8">
            {[
              { label: '회사소개', href: '/company' },
              { label: '서비스안내', href: '/services' }
            ].map((item) => (
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

          <button
            className={`lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors ${
              showSolidHeader ? 'text-primary-dark' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[998] bg-bg-warm flex flex-col lg:hidden overflow-y-auto">
          <div className="pt-24 px-8 pb-12 flex flex-col h-full">
            <nav className="flex flex-col space-y-2 border-b border-border-warm pb-8">
              {[
                { label: '회사소개', href: '/company' },
                { label: '서비스안내', href: '/services' },
                { label: '상담문의', href: '/inquiry' }
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-primary-dark py-4 hover:text-accent transition-colors tracking-tight"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 space-y-4">
              <a
                href="tel:070-4227-5394"
                className="flex items-center gap-3 text-primary-dark font-bold text-lg"
              >
                <Phone size={20} className="text-secondary shrink-0" />
                070-4227-5394
              </a>
              <Link
                to="/inquiry"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-primary-dark text-white py-4 text-center font-bold uppercase tracking-widest text-sm min-h-[44px]"
              >
                Consulting
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
