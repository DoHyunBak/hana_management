import { Phone, FileText, MessageSquare } from 'lucide-react';

const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
      <div className="bg-primary-deep border-t border-accent/20 flex items-stretch h-18 shadow-[0_-4px_30px_rgba(0,0,0,0.5)] backdrop-blur-lg">
        <a 
          href="tel:070-4227-5394" 
          className="flex-1 flex flex-col items-center justify-center space-y-1 text-white border-r border-white/5 active:bg-primary-dark transition-colors"
        >
          <Phone size={18} className="text-secondary" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Call</span>
        </a>
        
        <a 
          href="#contact" 
          className="flex-1 flex flex-col items-center justify-center space-y-1 text-white border-r border-white/5 active:bg-primary-dark transition-colors"
        >
          <FileText size={18} className="text-accent" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Consult</span>
        </a>

        <a 
          href="sms:07042275394"
          className="flex-1 bg-primary flex flex-col items-center justify-center space-y-1 text-white active:bg-primary-dark transition-colors px-4 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-accent"></div>
          <MessageSquare size={18} />
          <span className="text-[10px] font-bold tracking-widest uppercase">Inquiry</span>
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;
