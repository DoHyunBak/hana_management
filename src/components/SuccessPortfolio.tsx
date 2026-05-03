import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SuccessPortfolio = () => {
  const portfolios = [
    {
      title: '용산구 원효로 다세대 빌라',
      type: '주거 시설',
      management: '정기 청소 + 시설 관리',
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1200&auto=format&fit=crop',
      span: 'md:col-span-2'
    },
    {
      title: '한강로2가 근린생활시설',
      type: '상업 시설',
      management: '종합 건물 관리',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop',
      span: 'md:col-span-1'
    },
    {
      title: '용산구 이촌동 소형 빌딩',
      type: '업무 시설',
      management: '유지 보수 전담',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
      span: 'md:col-span-1'
    },
    {
      title: '한남동 고급 주택 단지',
      type: '주거 시설',
      management: '프리미엄 컨시어지 관리',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      span: 'md:col-span-2'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-400 font-bold mb-4 flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-blue-400"></span>
              <span>관리 실적</span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              신뢰로 쌓아온 <br />용산의 관리 파트너
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
            15년 동안 용산의 가치를 지켜온 하나주택종합관리의 주요 관리 사례를 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolios.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`${item.span} relative group rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[450px] cursor-pointer shadow-2xl`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-blue-400 font-bold text-sm mb-2 block">{item.type}</span>
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-sm">{item.management}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessPortfolio;
