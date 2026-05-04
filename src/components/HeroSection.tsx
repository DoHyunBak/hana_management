import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[500px] flex items-center overflow-hidden bg-primary-deep pt-20">
      {/* Background with a sophisticated atmosphere */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/6d8dae8a-e5ca-4736-b48b-4902bce36e74.png" 
          alt="하나주택종합관리 현장" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/90 via-primary-deep/60 to-primary-deep"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-accent"></div>
            <span className="text-secondary-light font-serif text-xl tracking-[0.2em] uppercase">Since 2010</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-8xl text-white leading-[1.2] md:leading-[1.1] mb-10 font-extrabold tracking-[-0.05em]"
          >
            <span className="block">용산의 가치를 지키는</span>
            <span className="text-secondary-light block">정직한 주택관리의 표본</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-14 max-w-2xl leading-relaxed font-medium tracking-tight break-keep shadow-sm"
          >
            하나주택종합관리는 지난 15년 동안 용산의 변화를 함께해 왔습니다. <br />
            유행을 따르기보다 본질에 집중하는 관리 철학으로 <br />
            휘지 않는 정직함과 흔들리지 않는 신뢰를 더합니다.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex"
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-6 py-4 md:px-12 md:py-6 text-base md:text-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center space-x-4 group border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">무료 현장 진단 및 상담 신청</span>
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute top-0 left-0 w-1 h-full bg-accent transition-all duration-300 group-hover:w-full opacity-10"></div>
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 w-[1px] h-32 bg-gradient-to-t from-accent to-transparent hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
