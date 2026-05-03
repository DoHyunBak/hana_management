import { motion } from 'framer-motion';

const HistorySection = () => {
  const history = [
    { year: '2025', title: '관리 주택 500개소 돌파', desc: '용산구 내 최대 규모의 민간 주택 관리 실적 달성' },
    { year: '2020', title: '설립 10주년 및 서비스 고도화', desc: '체계적인 민원 대응 및 시설 점검 시스템 구축' },
    { year: '2015', title: '사업 영역 확장', desc: '상가 건 및 근린생활시설 종합 관리 서비스 런칭' },
    { year: '2010', title: '하나주택종합관리 설립', desc: '서울특별시 용산구에서 주택 관리 전문 기업으로 시작' },
  ];

  return (
    <section id="history" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-primary font-bold mb-4 flex items-center space-x-2">
            <span className="w-10 h-[2px] bg-primary"></span>
            <span className="text-lg">회사 연혁</span>
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 tracking-tight">신뢰로 쌓아온 15년의 발자취</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {history.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-8 md:gap-16 pb-12 border-l-2 border-slate-100 pl-8 relative last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
              <div className="w-24 shrink-0">
                <span className="text-3xl font-black text-primary/20 leading-none">{item.year}</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
