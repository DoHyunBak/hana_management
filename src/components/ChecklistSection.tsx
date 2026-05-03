import { CheckCircle } from 'lucide-react';

const ChecklistSection = () => {
  const checklistGroups = [
    {
      category: '청결 관리',
      items: ['계단·복도 물청소 및 먼지 제거', '건물 현관 유리창 세정', '분리수거장 주변 정리 및 물청소', '음식물 쓰레기통 세척 및 살균']
    },
    {
      category: '시설 유지',
      items: ['각 층 전등 및 비상등 작동 확인', '공동 현관 도어락 작동 체크', '옥상 출입문 및 배수구 확인', '우편함 홍보 전단지 수거']
    },
    {
      category: '주변 환경',
      items: ['건물 외곽 담배꽁초 수거', '주차장 바닥 오염 제거', '담벼락 및 주변 청결 유지', '현장 특이사항 실시간 보고']
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold mb-4">관리 항목</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">정기 관리 체크리스트</h3>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4">
              매 방문 시마다 꼼꼼하게 확인하고 보고하는 하나주택종합관리만의 전문 관리 항목입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {checklistGroups.map((group, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center mr-3 text-sm">
                    0{idx + 1}
                  </span>
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-1 shrink-0 opacity-40" size={16} />
                      <span className="text-slate-600 text-sm leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-slate-900 rounded-2xl p-10 text-center text-white relative overflow-hidden shadow-xl">
             <div className="relative z-10">
                <p className="text-lg font-bold mb-2">"현장 사진과 함께하는 투명한 리포트 제공"</p>
                <p className="text-slate-400 text-xs">
                  ※ 현장 상황 및 계약 조건에 따라 세부 항목은 유연하게 조정됩니다.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;
