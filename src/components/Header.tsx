import { Search } from 'lucide-react';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none">
      <div className="container mx-auto flex justify-between items-center bg-white border border-slate-200 rounded-xl px-6 py-3 md:px-8 md:py-4 pointer-events-auto shadow-xl">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-lg md:text-xl font-bold text-primary tracking-tight">하나주택종합관리</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-[15px] font-medium text-slate-600 hover:text-primary transition-colors">회사소개</a>
          <a href="#services" className="text-[15px] font-medium text-slate-600 hover:text-primary transition-colors">주요서비스</a>
          <a href="#portfolio" className="text-[15px] font-medium text-slate-600 hover:text-primary transition-colors">관리실적</a>
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-[15px] font-bold shadow-md hover:bg-primary-light transition-all">
            상담문의
          </button>
        </div>

        <button className="md:hidden text-primary p-2">
          <Search size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
