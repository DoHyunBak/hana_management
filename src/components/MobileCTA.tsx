import { Phone, FileText, MessageSquare } from 'lucide-react';

const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
      <div className="bg-primary border-t border-secondary/30 flex items-stretch h-16 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <a 
          href="tel:070-4227-5394" 
          className="flex-1 flex items-center justify-center space-x-2 text-white border-r border-white/5 active:bg-primary-dark transition-colors"
        >
          <Phone size={16} className="text-secondary" />
          <span className="text-xs font-bold tracking-wider">전화상담</span>
        </a>
        
        <a 
          href="#contact" 
          className="flex-1 flex items-center justify-center space-x-2 text-white border-r border-white/5 active:bg-primary-dark transition-colors"
        >
          <FileText size={16} className="text-secondary" />
          <span className="text-xs font-bold tracking-wider">견적문의</span>
        </a>

        <a 
          href="sms:07042275394"
          className="flex-1 bg-secondary flex items-center justify-center space-x-2 text-white active:bg-secondary-dark transition-colors px-4"
        >
          <MessageSquare size={16} />
          <span className="text-xs font-bold tracking-wider">문자상담</span>
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;
