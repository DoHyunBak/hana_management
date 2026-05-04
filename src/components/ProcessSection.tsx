import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    { title: '상담 및 진단', desc: '귀하의 건물에 대한 기초 데이터를 수집하고 현황 상담을 진행합니다.' },
    { title: '현장 방문 분석', desc: '전문 팀이 직접 현장을 방문하여 정밀한 상태 진단을 실시합니다.' },
    { title: '맞춤형 플랜 설계', desc: '분석된 데이터를 바탕으로 건물 특성에 맞는 관리 플랜을 제안합니다.' },
    { title: '관리 개시', desc: '확정된 플랜에 따라 체계적인 관리 서비스를 즉각 시작합니다.' }
  ];

  return (
    <section id="process" className="py-24 bg-primary-dark text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-serif text-2xl mb-6">Execution</h2>
            <h3 className="text-4xl md:text-6xl text-white font-bold leading-tight tracking-tighter">
              투명하고 체계적인 <br />
              <span className="text-white/40 font-normal">하나만의 관리 프로세스</span>
            </h3>
          </div>
          <p className="text-slate-300 text-xl max-w-sm font-light leading-relaxed break-keep">
            상담부터 실제 관리까지, <br />
            체계적이고 투명한 4단계 로드맵을 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pt-16 border-t border-white/10 group hover:border-white/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 -translate-y-1/2 flex items-center">
                <span className="text-4xl font-serif italic text-secondary-light/30 mr-4 font-light">0{idx + 1}</span>
                <span className="text-xs font-bold tracking-[0.3em] text-secondary-light bg-primary-dark pr-4 uppercase">Phase</span>
              </div>
              
              <h4 className="text-3xl font-bold mb-8 text-white leading-tight tracking-tight group-hover:text-secondary-light transition-colors">
                {step.title}
              </h4>
              
              <p className="text-white/60 text-lg leading-relaxed mb-12 font-light break-keep group-hover:text-white/90 transition-colors">
                {step.desc}
              </p>
              
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                <div className="w-2 h-2 rounded-full bg-secondary-light group-hover:bg-primary-dark"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
