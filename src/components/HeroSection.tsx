import { motion } from 'framer-motion';
import { Phone, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-slate-50">
      {/* Background with a subtle professional feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/6d8dae8a-e5ca-4736-b48b-4902bce36e74.png" 
          alt="하나주택종합관리 현장" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-3 bg-white border border-slate-200 px-5 py-2 rounded-lg mb-10 shadow-sm"
          >
            <span className="text-primary font-bold text-base border-r border-slate-200 pr-3">SINCE 2010</span>
            <span className="text-slate-600 text-base font-medium">15년 전통 용산 주택관리의 기준</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-10"
          >
            대대로 이어가는 <br />
            <span className="text-primary">건물의 가치와 신뢰</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-slate-700 mb-12 max-w-2xl leading-relaxed font-medium"
          >
            하나주택종합관리는 2010년부터 용산 한 자리를 지켜왔습니다. <br />
            오랜 시간 쌓아온 정직함으로 당신의 자산을 책임 있게 관리합니다.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-primary-light transition-all flex items-center justify-center space-x-2">
              <span>무료 상담 신청하기</span>
              <ChevronRight size={20} />
            </button>
            <button className="flex items-center justify-center space-x-3 text-slate-700 bg-white border border-slate-200 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors">
              <Phone size={20} className="text-primary" />
              <span className="font-bold">070-4227-5394</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
