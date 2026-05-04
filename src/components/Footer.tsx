import { Mail, Globe, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-text-main pt-32 pb-16 overflow-hidden relative border-t border-border-warm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <img 
              src="/logo.png" 
              alt="하나주택종합관리" 
              className="h-20 md:h-28 w-auto mb-8 object-contain"
            />
            <p className="text-text-sub text-lg leading-relaxed max-w-md mb-12 font-medium">
              용산의 가치를 지키고 건물의 품격을 완성하는 <br />
              대한민국 주택관리의 표본이 되겠습니다. <br />
              휘지 않는 정직함으로 내일의 가치를 세웁니다.
            </p>
            
            <div className="flex space-x-6">
               {[Globe, Mail, MessageSquare].map((Icon, i) => (
                 <a 
                   key={i}
                   href="#" 
                   className="w-12 h-12 border border-border-warm flex items-center justify-center hover:bg-accent hover:border-accent transition-all group"
                 >
                   <Icon size={20} className="text-text-muted group-hover:text-white transition-colors" />
                 </a>
               ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <p className="text-xs font-bold text-secondary mb-8 uppercase tracking-[0.3em] font-serif">Navigation</p>
              <ul className="space-y-4">
                {[
                  { label: '회사소개', href: '/company' },
                  { label: '서비스안내', href: '/services' },
                  { label: '상담문의', href: '/inquiry' }
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="text-[15px] text-text-sub hover:text-accent transition-colors font-medium">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-2">
              <p className="text-xs font-bold text-secondary mb-8 uppercase tracking-[0.3em] font-serif">Business Information</p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                 <div className="space-y-4">
                    <div>
                      <p className="text-[11px] text-text-muted uppercase tracking-widest mb-1 font-serif">Representative</p>
                      <p className="text-sm font-bold text-primary-dark">하나주택종합관리 | 박창섭</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-text-muted uppercase tracking-widest mb-1 font-serif">Registration No.</p>
                      <p className="text-sm font-bold text-primary-dark">106-11-16539</p>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div>
                      <p className="text-[11px] text-text-muted uppercase tracking-widest mb-1 font-serif">Address</p>
                      <p className="text-sm font-bold text-primary-dark leading-relaxed">서울특별시 용산구 한강대로38가길 17</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-text-muted uppercase tracking-widest mb-1 font-serif">Concierge</p>
                      <p className="text-sm font-bold text-primary-dark">070-4227-5394</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-border-warm flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center space-x-4">
               <div className="w-6 h-[1px] bg-border-warm"></div>
               <p className="text-[11px] text-text-muted tracking-[0.2em] uppercase font-serif leading-relaxed">
                 © {new Date().getFullYear()} Hana Housing Management.
               </p>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-[11px] text-text-muted hover:text-accent transition-colors tracking-widest uppercase font-serif leading-relaxed">Privacy Policy</a>
              <a href="#" className="text-[11px] text-text-muted hover:text-accent transition-colors tracking-widest uppercase font-serif leading-relaxed">Terms of Service</a>
            </div>
          </div>
          <p className="text-[11px] text-text-muted/40 tracking-[0.2em] uppercase hidden md:block font-serif leading-relaxed">
            Since 2010
          </p>
        </div>

      </div>
      
      <div className="absolute right-[-5%] bottom-[-5%] text-[15vw] font-serif font-black text-bg-logo/30 select-none pointer-events-none uppercase tracking-tighter">
        2010
      </div>
    </footer>
  );
};

export default Footer;
