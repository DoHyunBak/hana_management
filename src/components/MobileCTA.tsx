import { motion } from 'framer-motion';
import { Phone, Send, ShieldCheck } from 'lucide-react';

const MobileCTA = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md md:hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
        className="bg-primary-deep/90 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        <div className="flex items-center h-20 px-2">
          <a
            href="tel:070-4227-5394"
            className="flex-1 flex flex-col items-center justify-center space-y-1.5 text-white active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Phone size={18} className="text-secondary-light" />
            </div>
            <span className="text-[10px] font-bold tracking-tighter opacity-80">전화상담</span>
          </a>

          <div className="w-[1px] h-8 bg-white/5"></div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-1 flex flex-col items-center justify-center space-y-1.5 text-white active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Send size={18} className="text-secondary-light" />
            </div>
            <span className="text-[10px] font-bold tracking-tighter opacity-80">무료상담</span>
          </a>

          <div className="w-[1px] h-8 bg-white/5"></div>

          <a
            href="/services"
            className="flex-1 flex flex-col items-center justify-center space-y-1.5 text-white active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <ShieldCheck size={18} className="text-secondary-light" />
            </div>
            <span className="text-[10px] font-bold tracking-tighter opacity-80">서비스</span>
          </a>
        </div>
      </motion.div>

      {/* Glossy Reflection Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default MobileCTA;
