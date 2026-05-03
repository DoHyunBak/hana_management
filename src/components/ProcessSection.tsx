import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    { title: 'CONSULTATION', desc: '귀하의 건물에 대한 기초 데이터를 수집하고 첫 상담을 진행합니다.' },
    { title: 'ON-SITE ANALYSIS', desc: '전문 팀이 직접 현장을 방문하여 정밀한 상태 진단을 실시합니다.' },
    { title: 'CUSTOMIZED PLAN', desc: '분석된 데이터를 바탕으로 건물 맞춤형 관리 플랜을 설계합니다.' },
    { title: 'EXECUTION', desc: '확정된 플랜에 따라 프리미엄 관리 서비스를 즉각 시작합니다.' }
  ];

  return (
    <section id="process" className="py-32 bg-gray-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]"
            >
              OUR <br />
              <span className="text-secondary italic underline decoration-white/10 underline-offset-8">JOURNEY</span>
            </motion.h2>
          </div>
          <p className="text-white/40 text-lg font-light max-w-sm">
            하나주택종합관리와 함께하는 <br />
            체계적이고 투명한 4단계 관리 로드맵.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pt-12 border-t border-white/10 group cursor-default"
            >
              <span className="absolute top-0 left-0 -translate-y-1/2 text-sm font-black text-secondary bg-gray-900 px-4">STEP 0{idx + 1}</span>
              <h4 className="text-2xl font-black mb-6 group-hover:text-secondary transition-colors">{step.title}</h4>
              <p className="text-white/40 font-medium leading-relaxed mb-10">{step.desc}</p>
              
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Dynamic Background Circle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default ProcessSection;
