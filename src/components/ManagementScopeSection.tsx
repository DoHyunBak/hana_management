import { motion } from 'framer-motion';
import { Shield, Sparkles, Wrench, MessageSquare, CheckCircle2 } from 'lucide-react';

const ManagementScopeSection = () => {
  const scopes = [
    {
      category: 'COMMON AREAS',
      icon: <Shield size={24} />,
      items: ['계단 및 복도', '메인 현관 로비', '주차장 전 구역', '분리수거 거점'],
      desc: '입주민의 첫인상이 결정되는 모든 공용 공간을 완벽하게 보호합니다.'
    },
    {
      category: 'HYGIENE & CLEAN',
      icon: <Sparkles size={24} />,
      items: ['정기 물청소', '유리창 세정', '악취 및 방역', '폐기물 관리'],
      desc: '보이지 않는 곳의 청결이 건물의 품격을 결정합니다.'
    },
    {
      category: 'FACILITY STATUS',
      icon: <Wrench size={24} />,
      items: ['공용 조명 점검', '출입문 제어', '배관 및 설비', '노후 시설 보고'],
      desc: '사전 예방 점검을 통해 대규모 수선 비용 발생을 방지합니다.'
    },
    {
      category: 'COMMUNICATION',
      icon: <MessageSquare size={24} />,
      items: ['민원 접수 및 조율', '관리비 안내 지원', '긴급 상황 전파', '건물주 정기 보고'],
      desc: '건물주와 입주민 사이의 원활한 소통의 가교 역할을 수행합니다.'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary font-black tracking-[0.4em] uppercase text-xs mb-6 block"
            >
              Operational Depth
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-none"
            >
              MANAGEMENT <br />SCOPE
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pt-10 border-t-2 border-primary/5"
          >
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              하나주택종합관리의 관리 범위는 단순한 청소를 넘어 <br />
              건물 전체의 생애 주기를 관리하는 포괄적인 솔루션을 지향합니다.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scopes.map((scope, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 0.98 }}
              className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 flex flex-col justify-between h-full group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                   <div className="text-primary group-hover:text-secondary transition-colors">
                     {scope.icon}
                   </div>
                   <span className="text-[10px] font-black text-primary/20 tracking-widest uppercase">0{idx + 1}</span>
                </div>
                <h4 className="text-xs font-black text-secondary tracking-widest uppercase mb-4">{scope.category}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-10">{scope.desc}</p>
              </div>
              
              <ul className="space-y-4 pt-10 border-t border-gray-200/50">
                {scope.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-bold text-primary/80">
                    <CheckCircle2 size={14} className="text-secondary opacity-40" />
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
