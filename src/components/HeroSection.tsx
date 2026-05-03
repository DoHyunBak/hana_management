import { motion } from 'framer-motion';
import { Phone, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-slate-50">
      {/* Background with a subtle professional feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop" 
          alt="Building Management" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-1.5 rounded-full mb-8"
          >
            <span className="text-primary text-sm font-bold">EST. 2010</span>
            <span className="w-1 h-1 rounded-full bg-primary/30"></span>
            <span className="text-primary/70 text-sm font-medium">용산구 주택종합관리 전문</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.2] tracking-tight mb-8"
          >
            건물의 가치를 높이는 <br />
            <span className="text-primary">신뢰와 정직의 관리</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            하나주택종합관리는 15년 이상의 현장 경험을 바탕으로 <br />
            용산 지역 건물주의 자산 가치 극대화와 임차인 만족을 책임집니다.
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
