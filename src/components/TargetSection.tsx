import { CheckCircle2 } from 'lucide-react';

const TargetSection = () => {
  const targets = [
    { title: '빌라', desc: '공용 계단, 현관, 복도, 분리수거 공간 등 주거 공용부 관리가 필요한 건물' },
    { title: '다세대·다가구', desc: '다양한 세대가 거주하여 정기적인 위생 및 시설 관리가 필수적인 공동주택' },
    { title: '상가건물', desc: '내방객이 많아 청결도와 공용 설비의 원활한 작동이 중요한 근린생활시설' },
    { title: '오피스텔', desc: '주거와 업무가 병행되어 철저한 환경 관리가 요구되는 소형 오피스텔' },
    { title: '소형 빌딩', desc: '전문적인 관리 인력 배치 대신 효율적인 위탁 관리를 원하는 건물주' },
    { title: '근린생활시설', desc: '다양한 업종이 입점해 있어 맞춤형 관리가 필요한 생활 밀착형 상가' },
  ];

  return (
    <section id="target" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold mb-4">관리 대상</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">다양한 건물의 맞춤형 관리</h3>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">하나주택종합관리는 용산구 일대의 다양한 주택과 건물의 특성에 맞춘 관리 서비스를 지원합니다.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {targets.map((target, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{target.title}</h3>
              </div>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm">{target.desc}</p>
            </div>
          ))}
          
          <div className="bg-slate-100 p-8 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col justify-center items-center text-center">
            <p className="font-bold text-slate-700 mb-2">기타 건물 상담 가능</p>
            <p className="text-slate-500 text-xs">주거/상업용 건물이라면 언제든 문의해 주십시오.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
