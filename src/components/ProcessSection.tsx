import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    { title: '상담 및 진단', desc: '귀하의 건물에 대한 기초 데이터를 수집하고 현황 상담을 진행합니다.' },
    { title: '현장 방문 분석', desc: '전문 팀이 직접 현장을 방문하여 정밀한 상태 진단을 실시합니다.' },
    { title: '맞춤형 플랜 설계', desc: '분석된 데이터를 바탕으로 건물 특성에 맞는 관리 플랜을 제안합니다.' },
    { title: '관리 개시', desc: '확정된 플랜에 따라 체계적인 관리 서비스를 즉각 시작합니다.' }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="text-blue-400 font-bold mb-4 flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-blue-400"></span>
              <span>진행 절차</span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              투명하고 체계적인 <br />하나만의 관리 프로세스
            </h3>
          </div>
          <p className="text-slate-400 text-lg max-w-sm">
            상담부터 실제 관리까지, <br />
            체계적이고 투명한 4단계 로드맵을 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pt-10 border-t border-white/10 group"
            >
              <span className="absolute top-0 left-0 -translate-y-1/2 text-xs font-bold text-blue-400 bg-slate-900 pr-4">STEP 0{idx + 1}</span>
              <h4 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{step.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">{step.desc}</p>
              
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-primary"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
