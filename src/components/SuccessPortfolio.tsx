import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const SuccessPortfolio = () => {
  const portfolios = [
    {
      title: '원효로 다세대 빌라',
      type: '주거 시설',
      management: '정기 청소 + 시설 관리',
      image: '/2acdc01b-428f-454f-8ca1-8f3016f647d1.png',
    },
    {
      title: '한강로 근린생활시설',
      type: '상업 시설',
      management: '종합 건물 관리',
      image: '/4bdae3a1-17be-4f7a-815d-2461fadefea9.png',
    },
    {
      title: '이촌동 소형 빌딩',
      type: '업무 시설',
      management: '유지 보수 전담',
      image: '/6ab07a3d-e3e6-4f9c-b824-23d4795438bc.png',
    },
    {
      title: '한남동 프리미엄 주택',
      type: '주거 시설',
      management: '컨시어지 관리',
      image: '/9ea66c7c-0c21-4e68-bba6-83de8418033e.png',
    },
    {
      title: '신용산 오피스텔',
      type: '주거 시설',
      management: '위생 및 보안 관리',
      image: '/6d8dae8a-e5ca-4736-b48b-4902bce36e74.png',
    },
    {
      title: '원효로3가 상가빌딩',
      type: '상업 시설',
      management: '종합 설비 점검',
      image: '/903da88d-a96f-4bee-a238-1f5c62508c8d.png',
    }
  ];

  const scrollingPortfolios = [...portfolios, ...portfolios];

  return (
    <section id="portfolio" className="py-32 bg-primary-deep text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <h2 className="text-secondary-light font-serif text-2xl mb-6 uppercase tracking-widest">Portfolio</h2>            <h3 className="text-4xl md:text-6xl text-white font-extrabold leading-tight tracking-[-0.03em]">
              신뢰로 쌓아온 <br />
              <span className="text-white/40 font-normal">용산의 관리 파트너</span>
            </h3>
          </div>
          <div className="max-w-sm">
            <div className="flex items-center space-x-3 text-accent mb-6">
              <ShieldCheck size={20} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase font-serif">Verified Management</span>
            </div>
            <p className="text-white/90 text-xl leading-relaxed font-medium tracking-tight break-keep shadow-sm">
              15년 동안 용산의 가치를 지켜온 <br />
              하나주택종합관리의 주요 실적입니다.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <motion.div 
          className="flex space-x-6"
          animate={{
            x: [0, -2100], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 55,
              ease: "linear",
            },
          }}
        >
          {scrollingPortfolios.map((item, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[350px] md:w-[460px] shrink-0 relative group rounded-sm overflow-hidden aspect-[4/3] cursor-pointer shadow-2xl"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <span className="text-secondary-soft font-bold text-sm mb-3 block uppercase tracking-[0.2em]">{item.type}</span>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-white/60 text-sm font-light">{item.management}</p>
                  </div>
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/20">
                    <ArrowUpRight size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Shadow overlays for depth */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-primary-deep to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-primary-deep to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="mt-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-white/20 text-[11px] tracking-[0.3em] uppercase">
            Over 500+ properties managed in Yongsan district since 2010.
          </p>
          <div className="flex space-x-8">
            <div className="h-[1px] w-12 bg-accent/30 mt-2"></div>
            <span className="text-secondary font-serif italic text-lg uppercase tracking-widest">Hana Standard</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPortfolio;
