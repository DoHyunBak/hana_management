import { Phone, MessageSquare, FileText, ArrowUpRight } from 'lucide-react';

const MobileActionBar = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[90%]">
      <div className="bg-primary/90 backdrop-blur-2xl rounded-3xl p-3 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
        <a 
          href="tel:070-4227-5394" 
          className="flex-1 flex flex-col items-center justify-center space-y-1 text-white"
        >
          <Phone size={20} className="text-secondary" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Call Now</span>
        </a>
        
        <div className="w-[1px] h-8 bg-white/10"></div>
        
        <a 
          href="#contact" 
          className="flex-1 flex flex-col items-center justify-center space-y-1 text-white"
        >
          <FileText size={20} className="text-secondary" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Quote</span>
        </a>

        <div className="w-[1px] h-8 bg-white/10"></div>

        <button className="flex-1 flex flex-col items-center justify-center space-y-1 text-white">
          <MessageSquare size={20} className="text-secondary" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Chat</span>
        </button>
        
        <button className="bg-secondary p-4 rounded-2xl text-white ml-2 shadow-xl active:scale-90 transition-transform">
          <ArrowUpRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MobileActionBar;
