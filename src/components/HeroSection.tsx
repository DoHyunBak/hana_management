import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-primary-dark">
      {/* Background with a sophisticated atmosphere */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/6d8dae8a-e5ca-4736-b48b-4902bce36e74.png" 
          alt="하나주택종합관리 현장" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/40 to-primary-dark"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-secondary"></div>
            <span className="text-secondary font-serif italic text-xl tracking-wide">Established 2010</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-8xl text-white leading-[1.2] md:leading-[1.1] mb-10 font-black tracking-tighter"
          >
            <span className="block whitespace-nowrap">용산의 가치를 지키는</span>
            <span className="text-heritage block whitespace-nowrap">정직한 주택관리의 표본</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-14 max-w-2xl leading-relaxed font-light break-keep"
          >
            하나주택종합관리는 지난 15년 동안 용산의 변화를 함께해 왔습니다. <br />
            유행을 따르기보다 본질에 집중하는 관리 철학으로 <br />
            당신의 자산에 흔들리지 않는 신뢰를 더합니다.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="bg-secondary text-white px-10 py-5 text-lg font-bold hover:bg-secondary-light transition-all flex items-center justify-center space-x-3 group border border-secondary/50">
              <span>무료 현장 진단 신청</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="tel:070-4227-5394"
              className="flex items-center justify-center space-x-4 text-white border border-white/20 px-10 py-5 hover:bg-white/10 transition-colors"
            >
              <Phone size={18} className="text-secondary" />
              <span className="font-bold tracking-wider">070-4227-5394</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 w-[1px] h-32 bg-gradient-to-t from-secondary to-transparent hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
