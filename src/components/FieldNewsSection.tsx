import { motion } from 'framer-motion';
import { Wrench, Scale, Leaf, ShieldAlert, Thermometer, Droplets } from 'lucide-react';

const FieldNewsSection = () => {
  const coverages = [
    {
      category: 'FACILITY',
      title: '기계 및 전기 설비 정밀 유지보수',
      desc: '승강기, 펌프, 수배전반 등 건물의 핵심 심장부를 전문가가 상시 점검합니다.',
      icon: <Wrench size={18} className="text-secondary" />
    },
    {
      category: 'LEGAL & TAX',
      title: '법무 및 세무 행정 통합 지원',
      desc: '복잡한 임대차 보호법 대응부터 관리비 정산, 부가세 신고까지 전문가가 돕습니다.',
      icon: <Scale size={18} className="text-blue-500" />
    },
    {
      category: 'LANDSCAPE',
      title: '건물 외관 및 조경 환경 디자인',
      desc: '계절별 수목 관리와 화단 정비를 통해 건물의 첫인상과 가치를 높입니다.',
      icon: <Leaf size={18} className="text-green-500" />
    },
    {
      category: 'SAFETY',
      title: '24시간 무인 경비 및 보안 관제',
      desc: '첨단 보안 시스템과 연동하여 외부인 출입 통제 및 사고 예방을 책임집니다.',
      icon: <ShieldAlert size={18} className="text-red-500" />
    },
    {
      category: 'ENERGY',
      title: '에너지 효율 최적화 솔루션',
      desc: '공용 전기 및 수도료 절감을 위한 설비 세팅과 에너지 진단을 주기적으로 실시합니다.',
      icon: <Thermometer size={18} className="text-amber-500" />
    },
    {
      category: 'HYGIENE',
      title: '수질 관리 및 특수 살균 방역',
      desc: '저수조 청소와 법정 방역은 물론, 유행성 질환 예방을 위한 공간 살균을 진행합니다.',
      icon: <Droplets size={18} className="text-cyan-500" />
    }
  ];

  const scrollingCoverages = [...coverages, ...coverages];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-serif text-2xl mb-6">Service Scope</h2>
            <h3 className="text-4xl md:text-6xl text-slate-950 font-serif leading-tight">
              단순 관리를 넘어 <br />
              <span className="text-slate-500 font-light">자산 가치를 설계합니다</span>
            </h3>
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              하나주택종합관리는 건물 운영에 필요한 모든 영역을 전문가의 시선으로 통합 관리합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <motion.div 
          className="flex space-x-8"
          animate={{
            x: [0, -2100], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {scrollingCoverages.map((item, idx) => (
            <div
              key={idx}
              className="w-[350px] md:w-[450px] shrink-0 bg-slate-50 p-10 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-primary-dark group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">{item.category}</span>
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-6 leading-snug break-keep group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-slate-500 text-lg leading-relaxed font-light break-keep">
                  {item.desc}
                </p>
              </div>
              
              <div className="mt-12 flex items-center space-x-2 text-[10px] font-bold text-secondary tracking-widest uppercase">
                <span className="w-8 h-[1px] bg-secondary/30"></span>
                <span>Hana Premium Standard</span>
              </div>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="mt-20 container mx-auto px-6 text-center border-t border-slate-100 pt-10">
        <p className="text-slate-300 text-[10px] font-bold tracking-[0.4em] uppercase">
          Comprehensive Property Management Solutions in Yongsan
        </p>
      </div>
    </section>
  );
};

export default FieldNewsSection;
