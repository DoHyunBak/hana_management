import { motion } from 'framer-motion';
import { Sparkles, Wrench, MapPin, CheckCircle2, ClipboardCheck } from 'lucide-react';

const ManagementScopeSection = () => {
  const managementItems = [
    {
      id: '01',
      category: '청결 관리',
      icon: <Sparkles size={28} />,
      items: [
        '계단·복도 물청소 및 먼지 제거',
        '건물 현관 유리창 세정',
        '분리수거장 주변 정리 및 물청소',
        '음식물 쓰레기통 세척 및 살균'
      ],
      color: 'bg-[#F9F6F2]'
    },
    {
      id: '02',
      category: '시설 유지',
      icon: <Wrench size={28} />,
      items: [
        '각 층 전등 및 비상등 작동 확인',
        '공동 현관 도어락 작동 체크',
        '옥상 출입문 및 배수구 확인',
        '우편함 홍보 전단지 수거'
      ],
      color: 'bg-white'
    },
    {
      id: '03',
      category: '주변 환경',
      icon: <MapPin size={28} />,
      items: [
        '건물 외곽 담배꽁초 수거',
        '주차장 바닥 오염 제거',
        '담벼락 및 주변 청결 유지',
        '현장 특이사항 실시간 보고'
      ],
      color: 'bg-[#F9F6F2]'
    }
  ];

  return (
    <section id="management-scope" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-serif text-2xl mb-6 tracking-widest uppercase">Management Scope</h2>
            <h3 className="text-4xl md:text-6xl text-primary-dark font-bold leading-tight tracking-tight mb-8">
              정기 관리 <br />
              <span className="text-text-sub font-light">체크리스트</span>
            </h3>
            <p className="text-text-sub text-xl font-light leading-relaxed break-keep max-w-xl">
              매 방문 시마다 꼼꼼하게 확인하고 보고하는 <br />
              하나주택종합관리만의 전문 관리 항목입니다.
            </p>
          </div>
          <div className="hidden lg:block pt-12">
            <div className="p-8 border border-border-warm rounded-sm flex items-center space-x-6 bg-bg-warm/30">
               <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center text-white">
                 <ClipboardCheck size={32} />
               </div>
               <div>
                 <p className="text-primary-dark font-bold text-lg">현장 사진과 함께하는</p>
                 <p className="text-secondary font-serif italic font-bold text-xl uppercase tracking-tighter">Transparent Report</p>
               </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-border-warm overflow-hidden rounded-sm">
          {managementItems.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className={`p-12 md:p-16 border-b md:border-b-0 md:border-r last:border-r-0 border-border-warm ${group.color} group hover:bg-primary-dark transition-colors duration-700`}
            >
              <div className="mb-12 flex justify-between items-start">
                <div className="p-4 bg-bg-warm border border-border-warm rounded-sm group-hover:bg-primary-dark transition-colors duration-500 group-hover:border-primary-dark">
                  <div className="text-secondary group-hover:text-white transition-colors duration-500">
                    {group.icon}
                  </div>
                </div>
                <span className="text-5xl font-serif italic text-bg-logo group-hover:text-white/10 transition-colors leading-none">
                  {group.id}
                </span>
              </div>

              <h4 className="text-2xl font-bold tracking-tight text-primary-dark mb-10 group-hover:text-white transition-colors">
                {group.category}
              </h4>
              
              <ul className="space-y-6">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 group/item">
                    <CheckCircle2 size={18} className="text-secondary-light mt-1 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="text-text-main text-[17px] font-medium leading-snug break-keep group-hover:text-white/80 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-border-warm/50">
          <div className="flex items-center space-x-3 text-secondary-light font-bold">
            <span className="w-12 h-[1px] bg-secondary-light/30"></span>
            <p className="text-sm tracking-widest uppercase italic font-serif">
              "현장 사진과 함께하는 투명한 리포트 제공"
            </p>
          </div>
          <p className="text-text-muted text-sm font-medium">
            ※ 현장 상황 및 계약 조건에 따라 세부 항목은 유연하게 조정됩니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManagementScopeSection;
