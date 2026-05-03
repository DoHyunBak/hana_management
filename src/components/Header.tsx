import { Search } from 'lucide-react';

import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-6 pointer-events-none">
      <div className="container mx-auto flex justify-between items-center bg-white/80 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 pointer-events-auto shadow-2xl">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-md">
             <span className="text-white font-bold text-xl">H</span>
          </div>
          <span className="text-xl font-bold text-primary tracking-tight">하나주택종합관리</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/company" className="text-[15px] font-bold text-slate-700 hover:text-primary transition-colors">회사소개</Link>
          <Link to="/services" className="text-[15px] font-bold text-slate-700 hover:text-primary transition-colors">서비스안내</Link>
          <Link to="/portfolio" className="text-[15px] font-bold text-slate-700 hover:text-primary transition-colors">관리실적</Link>
          <Link to="/inquiry" className="bg-primary text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:bg-primary-light transition-all hover:scale-105 active:scale-95">
            상담문의
          </Link>
        </div>

        <button className="md:hidden text-primary">
          <Search size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
