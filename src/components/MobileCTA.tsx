import { Phone, MessageSquare, FileText, ArrowUpRight } from 'lucide-react';

const MobileActionBar = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[92%]">
      <div className="bg-primary/95 backdrop-blur-xl rounded-2xl p-3 flex justify-between items-center shadow-2xl border border-white/10">
        <a 
          href="tel:070-4227-5394" 
          className="flex-1 flex flex-col items-center justify-center space-y-1 text-white border-r border-white/10"
        >
          <Phone size={18} className="text-blue-300" />
          <span className="text-[11px] font-bold">전화문의</span>
        </a>
        
        <a 
          href="#contact" 
          className="flex-1 flex flex-col items-center justify-center space-y-1 text-white border-r border-white/10"
        >
          <FileText size={18} className="text-blue-300" />
          <span className="text-[11px] font-bold">견적상담</span>
        </a>

        <button className="flex-1 flex flex-col items-center justify-center space-y-1 text-white">
          <MessageSquare size={18} className="text-blue-300" />
          <span className="text-[11px] font-bold">문자문의</span>
        </button>
        
        <a href="#contact" className="bg-white text-primary p-3 rounded-xl ml-2 shadow-lg active:scale-95 transition-transform">
          <ArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;
