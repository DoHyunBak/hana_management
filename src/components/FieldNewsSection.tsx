import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

const FieldNewsSection = () => {
  const news = [
    {
      date: '2026.05.02',
      category: '정기 관리',
      title: '이촌동 다세대 빌라 봄맞이 대청소 및 방역 실시',
      desc: '해당 건물의 전 구역 물청소 및 하절기 대비 특별 방역 작업을 완료하였습니다.',
      img: '/2acdc01b-428f-454f-8ca1-8f3016f647d1.png'
    },
    {
      date: '2026.04.28',
      category: '시설 보수',
      title: '원효로 상가건물 노후 배관 긴급 교체 작업',
      desc: '야간에 발생한 누수 민원을 접수하여 1시간 내 현장 도착 및 수선을 완료했습니다.',
      img: '/6ab07a3d-e3e6-4f9c-b824-23d4795438bc.png'
    },
    {
      date: '2026.04.20',
      category: '신규 계약',
      title: '한강로 3가 소형 오피스텔 종합 관리 개시',
      desc: '새롭게 인연을 맺은 오피스텔의 입주민 만족을 위해 최선을 다하겠습니다.',
      img: '/9ea66c7c-0c21-4e68-bba6-83de8418033e.png'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-primary font-bold mb-4 flex items-center space-x-2">
              <span className="w-10 h-[2px] bg-primary"></span>
              <span className="text-lg">현장 소식</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">하나의 생생한 관리 리포트</h3>
          </div>
          <button className="flex items-center space-x-2 text-slate-500 font-bold hover:text-primary transition-colors pb-1 border-b border-slate-300">
            <span>소식 더보기</span>
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-slate-400 text-xs mb-3">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 line-clamp-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldNewsSection;
