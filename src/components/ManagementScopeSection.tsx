import { motion } from 'framer-motion';
import { Shield, Sparkles, Wrench, MessageSquare, CheckCircle2 } from 'lucide-react';

const ManagementScopeSection = () => {
  const scopes = [
    {
      category: '공용 공간 관리',
      icon: <Shield size={24} />,
      items: ['계단 및 복도 청소', '메인 현관 로비 관리', '주차장 전 구역 정리', '분리수거 거점 관리'],
      desc: '입주민의 첫인상이 결정되는 모든 공용 공간을 쾌적하게 유지합니다.'
    },
    {
      category: '위생 및 청결',
      icon: <Sparkles size={24} />,
      items: ['정기 바닥 물청소', '유리창 및 창틀 세정', '악취 제거 및 방역', '폐기물 적치 관리'],
      desc: '보이지 않는 곳의 청결이 건물의 가치를 결정합니다.'
    },
    {
      category: '시설물 점검',
      icon: <Wrench size={24} />,
      items: ['공용 조명 상시 점검', '공동 현관 출입문 제어', '배관 및 주요 설비 확인', '노후 시설 보수 보고'],
      desc: '사전 예방 점검을 통해 대규모 수선 비용 발생을 방지합니다.'
    },
    {
      category: '행정 및 소통',
      icon: <MessageSquare size={24} />,
      items: ['입주민 민원 조율', '관리비 고지 지원', '긴급 상황 비상 연락', '건물주 정기 업무 보고'],
      desc: '건물주와 입주민 사이의 원활한 소통을 지원합니다.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="text-primary font-bold mb-4 flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>관리 범위</span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              전문가에게 맡기면 <br />관리가 쉬워집니다
            </h3>
          </div>
          <div className="pt-8 md:pt-12 border-t border-slate-100">
            <p className="text-lg text-slate-500 leading-relaxed">
              하나주택종합관리의 관리 범위는 단순한 청소를 넘어 <br />
              건물 전체의 효율적 운영을 위한 포괄적인 솔루션을 제공합니다.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scopes.map((scope, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between h-full group hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                   <div className="text-primary">
                     {scope.icon}
                   </div>
                   <span className="text-xs font-bold text-slate-300">0{idx + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{scope.category}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{scope.desc}</p>
              </div>
              
              <ul className="space-y-3 pt-6 border-t border-slate-200">
                {scope.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={14} className="text-primary opacity-60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementScopeSection;
