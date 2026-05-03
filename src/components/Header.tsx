import { Link, useLocation } from 'react-router-dom';
import { Search, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use scrolled state or if we are NOT on the home page to decide background
  const showSolidHeader = isScrolled || !isHomePage;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      showSolidHeader ? 'bg-white shadow-md py-4' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 md:gap-5 group shrink-0 relative z-10">
          <div className={`shrink-0 w-11 h-11 md:w-13 md:h-13 flex items-center justify-center transition-all duration-500 ${showSolidHeader ? 'bg-primary' : 'bg-white shadow-lg shadow-black/10'}`}>
             <span className={`${showSolidHeader ? 'text-white' : 'text-primary'} font-serif font-black text-2xl md:text-3xl`}>H</span>
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span className={`text-lg lg:text-xl xl:text-2xl font-serif font-bold tracking-tight whitespace-nowrap transition-colors duration-500 ${
              showSolidHeader ? 'text-slate-900' : 'text-white'
            }`}>
              하나주택종합관리
            </span>
            <span className={`text-[9px] lg:text-[10px] xl:text-[11px] tracking-[0.2em] uppercase mt-0.5 hidden sm:block transition-colors duration-500 ${
              showSolidHeader ? 'text-slate-400' : 'text-white/60'
            }`}>
              Yongsan's Standard
            </span>
          </div>
        </Link>
        
        <div className="hidden lg:flex flex-1 justify-end items-center lg:space-x-8 xl:space-x-12 ml-8">
          {[
            { label: '회사소개', href: '/company' },
            { label: '서비스안내', href: '/services' },
            { label: '관리실적', href: '/portfolio' }
          ].map((item) => (
            <Link 
              key={item.label}
              to={item.href} 
              className={`text-xs xl:text-sm font-bold tracking-widest transition-colors duration-500 hover:text-secondary whitespace-nowrap ${
                showSolidHeader ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="flex items-center lg:space-x-4 xl:space-x-6 lg:pl-4 xl:pl-6 border-l border-white/10">
            <a 
              href="tel:070-4227-5394" 
              className={`flex items-center space-x-2 transition-colors duration-500 whitespace-nowrap ${
                showSolidHeader ? 'text-primary' : 'text-white'
              }`}
            >
              <Phone size={14} className="text-secondary" />
              <span className="font-bold text-xs">070-4227-5394</span>
            </a>
            <Link to="/inquiry" className={`lg:px-4 xl:px-8 py-3 text-xs font-bold transition-all whitespace-nowrap ${
              showSolidHeader 
                ? 'bg-primary text-white hover:bg-primary-light' 
                : 'bg-secondary text-white hover:bg-secondary-light shadow-xl'
            }`}>
              상담문의
            </Link>
          </div>
        </div>

        <button className={`lg:hidden ${showSolidHeader ? 'text-primary' : 'text-white'}`}>
          <Search size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
