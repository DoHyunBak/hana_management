import { Phone, FileText, MessageSquare } from 'lucide-react';

const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
      <div className="bg-primary-deep border-t border-white/10 flex items-stretch h-18 shadow-[0_-4px_30px_rgba(0,0,0,0.5)] backdrop-blur-lg">
        <a
          href="tel:070-4227-5394"
          className="flex-1 flex flex-col items-center justify-center space-y-1 text-white border-r border-white/10 active:bg-primary-dark transition-colors"
        >
          <Phone size={18} className="text-white/70" />
          <span className="text-[10px] font-bold tracking-widest">전화상담</span>
        </a>

        <a
          href="#contact"
          className="flex-1 flex flex-col items-center justify-center space-y-1 text-white border-r border-white/10 active:bg-primary-dark transition-colors"
        >
          <FileText size={18} className="text-white/70" />
          <span className="text-[10px] font-bold tracking-widest">무료상담</span>
        </a>

        <a
          href="sms:07042275394"
          className="flex-1 flex flex-col items-center justify-center space-y-1 text-white active:bg-primary-dark transition-colors"
        >
          <MessageSquare size={18} className="text-white/70" />
          <span className="text-[10px] font-bold tracking-widest">문자문의</span>
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;
