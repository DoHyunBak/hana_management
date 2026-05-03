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
            <h3 className="text-4xl md:text-6xl text-white font-serif leading-tight tracking-tight">
              투명하고 체계적인 <br />
              <span className="text-slate-400 font-normal">하나만의 관리 프로세스</span>
            </h3>
          </div>
          <p className="text-slate-300 text-xl max-w-sm font-light leading-relaxed break-keep">
            상담부터 실제 관리까지, <br />
            체계적이고 투명한 4단계 로드맵을 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pt-12 border-t border-white/20 group"
            >
              <span className="absolute top-0 left-0 -translate-y-1/2 text-sm font-bold tracking-[0.2em] text-secondary bg-primary-dark pr-6 uppercase">Step 0{idx + 1}</span>
              <h4 className="text-2xl font-bold mb-6 group-hover:text-secondary transition-colors">{step.title}</h4>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 font-light break-keep">{step.desc}</p>
              
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all">
                <div className="w-2 h-2 rounded-full bg-secondary group-hover:bg-white"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
