import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const FieldNewsSection = () => {
  const news = [
    {
      date: 'MAY 02, 2026',
      category: 'MAINTENANCE',
      title: '이촌동 다세대 빌라 봄맞이 대청소 및 방역 실시',
      desc: '해당 건물의 전 구역 물청소 및 하절기 대비 특별 방역 작업을 완료하였습니다. 15년 관리 매뉴얼에 따른 철저한 시공이 진행되었습니다.',
      img: '/2acdc01b-428f-454f-8ca1-8f3016f647d1.png'
    },
    {
      date: 'APR 28, 2026',
      category: 'EMERGENCY',
      title: '원효로 상가건물 노후 배관 긴급 교체 작업',
      desc: '야간에 발생한 누수 민원을 접수하여 1시간 내 현장 도착 및 수선을 완료했습니다. 신속한 대응으로 입주민 피해를 최소화하였습니다.',
      img: '/6ab07a3d-e3e6-4f9c-b824-23d4795438bc.png'
    },
    {
      date: 'APR 20, 2026',
      category: 'NEW CONTRACT',
      title: '한강로 3가 소형 오피스텔 종합 관리 개시',
      desc: '용산구 한강로의 새로운 랜드마크 소형 오피스텔과 종합 관리 계약을 체결하였습니다. 하나주택만의 차별화된 프리미엄 서비스를 시작합니다.',
      img: '/9ea66c7c-0c21-4e68-bba6-83de8418033e.png'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-serif italic text-2xl mb-6">Field Reports</h2>
            <h3 className="text-4xl md:text-6xl text-slate-950 font-serif leading-tight">
              신뢰를 쌓아가는 <br />
              <span className="text-slate-500">현장의 기록들</span>
            </h3>
          </div>
          <button className="flex items-center space-x-3 text-primary font-bold tracking-widest text-sm hover:text-secondary transition-colors group">
            <span>VIEW ALL REPORTS</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-8">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-secondary text-[11px] font-bold tracking-widest mb-4">
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>
              
              <h4 className="text-2xl font-serif text-slate-950 mb-4 group-hover:text-primary transition-colors leading-snug">
                {item.title}
              </h4>
              
              <p className="text-slate-500 text-[15px] leading-relaxed line-clamp-2 font-light mb-6">
                {item.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center group/more">
                <span className="text-xs font-bold text-slate-400 group-hover/more:text-primary transition-colors tracking-widest">READ MORE</span>
                <ArrowRight size={14} className="text-slate-300 group-hover/more:text-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldNewsSection;
