import { motion } from 'framer-motion';
import { Search, FileText, MessageSquare, CheckSquare } from 'lucide-react';

const CheckBeforeChoosingSection = () => {
  const checklists = [
    {
      icon: <FileText size={32} />,
      title: '투명한 정보',
      subtitle: '실제 사업자 정보인가요?',
      desc: '대표자, 주소지, 사업자 번호 등 실제 운영 중인 정보인지 투명하게 공개하는지 확인하십시오.'
    },
    {
      icon: <Search size={32} />,
      title: '명확한 범위',
      subtitle: '관리 범위가 명확한가요?',
      desc: '단순 청소를 넘어 어디서부터 어디까지 책임지는지 명확한 가이드라인을 제시해야 합니다.'
    },
    {
      icon: <CheckSquare size={32} />,
      title: '현장 견적',
      subtitle: '현장 확인 후 견적을 내나요?',
      desc: '유선상의 가상 견적이 아닌, 실제 현장을 방문하여 건물의 노후도와 컨디션을 파악해야 합니다.'
    },
    {
      icon: <MessageSquare size={32} />,
      title: '원활한 소통',
      subtitle: '소통이 원활한가요?',
      desc: '민원 발생 시 즉각적인 대응 시스템과 건물주를 위한 정기 보고 체계가 갖춰져 있는지 확인하십시오.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-blue-400 font-bold mb-4 flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-blue-400"></span>
              <span>체크리스트</span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              관리 업체 선정 전, <br />
              꼭 확인해야 할 4가지
            </h3>
          </div>
          <p className="text-slate-400 text-lg max-w-sm">
            건물 관리는 단순히 비용의 문제가 아닙니다. <br />
            당신의 소중한 자산을 지킬 수 있는 <br />
            검증된 파트너인지 먼저 확인하십시오.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {checklists.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between group hover:bg-white transition-all duration-300 cursor-default"
            >
              <div>
                 <div className="text-blue-400 group-hover:text-primary transition-colors mb-6">
                   {item.icon}
                 </div>
                 <h4 className="text-xs font-bold text-blue-300/50 group-hover:text-primary/30 mb-2">{item.title}</h4>
                 <h5 className="text-xl font-bold text-white group-hover:text-slate-900 transition-colors mb-4">{item.subtitle}</h5>
                 <p className="text-slate-400 group-hover:text-slate-500 text-sm leading-relaxed">
                   {item.desc}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheckBeforeChoosingSection;
