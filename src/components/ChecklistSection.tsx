import { ClipboardCheck, CheckCircle } from 'lucide-react';

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
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-secondary mb-4">
              <ClipboardCheck size={24} />
              <span className="font-bold tracking-widest uppercase text-sm">Our Checklist</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">정기 관리 체크 항목</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              매 방문 시마다 꼼꼼하게 확인하고 보고하는 하나주택종합관리만의 전문 체크리스트입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {checklistGroups.map((group, idx) => (
              <div key={idx} className="bg-gray-50 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-transparent hover:border-gray-100 group">
                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
                  <span className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </span>
                  {group.category}
                </h3>
                <ul className="space-y-6">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-4">
                      <CheckCircle className="text-secondary mt-1 shrink-0" size={18} />
                      <span className="text-gray-600 font-medium leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-primary rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
                <p className="text-xl font-medium opacity-80 mb-2 italic">"현장 사진과 함께하는 투명한 리포트"</p>
                <p className="text-sm opacity-60">
                  ※ 현장 상황 및 계약 조건에 따라 세부 항목은 유연하게 조정됩니다.
                </p>
             </div>
             <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                <ClipboardCheck size={120} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;
