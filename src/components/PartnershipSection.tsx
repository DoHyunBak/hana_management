import { motion } from 'framer-motion';
import { Wrench, Zap, Flame, ShieldAlert, Scale, Calculator } from 'lucide-react';

const PartnershipSection = () => {
  const partners = [
    { icon: <Zap size={24} />, title: '전기 설비', desc: '노후 배선 점검 및 긴급 보수' },
    { icon: <Wrench size={24} />, title: '배관·누수', desc: '정밀 탐지 및 즉각적인 수선' },
    { icon: <Flame size={24} />, title: '소방 안전', desc: '정기 점검 및 소방 시설 관리' },
    { icon: <ShieldAlert size={24} />, title: '방역·방재', desc: '해충 박멸 및 정기 소독 서비스' },
    { icon: <Scale size={24} />, title: '법률 자문', desc: '임대차 분쟁 및 법적 대응 지원' },
    { icon: <Calculator size={24} />, title: '세무 상담', desc: '종합부동산세 및 임대수익 관리' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold mb-4 flex items-center space-x-2">
              <span className="w-10 h-[2px] bg-primary"></span>
              <span className="text-lg">협력 네트워크</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              용산의 베테랑들과 함께 <br />어떤 문제도 신속히 해결합니다
            </h3>
          </div>
          <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
            15년 동안 쌓아온 지역 내 기술 전문가들과의 긴밀한 협력으로, <br className="hidden md:block" />
            단순 관리를 넘어 기술적 결함까지 책임집니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-slate-50 border border-slate-100 text-center group hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex p-3 bg-white rounded-lg text-primary shadow-sm mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {partner.icon}
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{partner.title}</h4>
              <p className="text-xs text-slate-500 break-keep">{partner.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
           <div className="flex items-center space-x-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                 <ShieldAlert size={28} />
              </div>
              <div>
                 <p className="text-lg font-bold">24시간 긴급 대응 인프라 구축</p>
                 <p className="text-slate-400 text-sm">심야 시간대 배관 파손, 전기 정전 등 비상 상황 즉시 출동</p>
              </div>
           </div>
           <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors shrink-0">
              협력사 정보 확인
           </button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
