import { motion } from 'framer-motion';
import { Mail, Globe, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-12"
            >
              HANA <br />
              <span className="text-secondary italic">PARTNERSHIP</span>
            </motion.h2>
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-sm mb-16">
              귀하의 건물이 가진 가치와 품격을 <br />
              완성하는 마지막 퍼즐, 하나주택종합관리입니다.
            </p>
            
            <div className="flex space-x-6">
               {[Globe, Mail, MessageSquare].map((Icon, i) => (
                 <motion.a 
                   key={i}
                   whileHover={{ scale: 1.1, color: '#FFD700' }}
                   href="#" 
                   className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-colors"
                 >
                   <Icon size={20} />
                 </motion.a>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <p className="text-[10px] font-black text-white/20 tracking-[0.3em] uppercase mb-10">Navigation</p>
              <ul className="space-y-6">
                {['About', 'Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm font-bold hover:text-secondary transition-colors uppercase tracking-widest">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-2">
              <p className="text-[10px] font-black text-white/20 tracking-[0.3em] uppercase mb-10">Legal & Privacy</p>
              <div className="space-y-8">
                 <div>
                    <p className="text-xs font-bold text-white/60 mb-2">Corporate Identity</p>
                    <p className="text-sm font-black">하나주택종합관리 | 대표 박창섭</p>
                 </div>
                 <div>
                    <p className="text-xs font-bold text-white/60 mb-2">Business Registration</p>
                    <p className="text-sm font-black">106-11-16539</p>
                 </div>
                 <div>
                    <p className="text-xs font-bold text-white/60 mb-2">Head Office</p>
                    <p className="text-sm font-black leading-relaxed">서울특별시 용산구 한강대로38가길 17</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase">
            © {new Date().getFullYear()} Hana Housing Management. All rights reserved.
          </p>
          <div className="flex space-x-10">
            <a href="#" className="text-[10px] font-black text-white/20 hover:text-white transition-colors uppercase tracking-[0.2em]">Privacy Policy</a>
            <a href="#" className="text-[10px] font-black text-white/20 hover:text-white transition-colors uppercase tracking-[0.2em]">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Background Big Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[30rem] font-black leading-none">HANA</h2>
      </div>
    </footer>
  );
};

export default Footer;
