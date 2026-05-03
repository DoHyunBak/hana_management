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
    <section className="py-32 bg-primary-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-serif text-2xl mb-6">Expert Checklist</h2>
            <h3 className="text-4xl md:text-6xl text-white font-serif leading-tight tracking-tight">
              관리 업체 선정 전, <br />
              <span className="text-slate-400 font-light">꼭 확인해야 할 4가지</span>
            </h3>
          </div>
          <p className="text-slate-300 text-xl max-w-sm font-light leading-relaxed break-keep">
            건물 관리는 단순한 비용의 문제가 아닙니다. <br />
            당신의 소중한 자산을 지킬 수 있는 <br />
            검증된 파트너인지 확인하십시오.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {checklists.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between group hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-default"
            >
              <div>
                 <div className="text-secondary group-hover:text-primary transition-colors mb-8 bg-white/5 p-4 rounded-xl inline-block group-hover:bg-primary/5">
                   {item.icon}
                 </div>
                 <h4 className="text-sm font-bold text-secondary tracking-[0.2em] uppercase mb-3 opacity-60 group-hover:opacity-100 transition-opacity">{item.title}</h4>
                 <h5 className="text-2xl font-bold text-white group-hover:text-slate-900 transition-colors mb-6 break-keep">{item.subtitle}</h5>
                 <p className="text-slate-400 group-hover:text-slate-600 text-lg leading-relaxed font-light break-keep transition-colors">
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
