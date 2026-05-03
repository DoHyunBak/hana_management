import { motion } from 'framer-motion';
import { Search, FileText, MessageSquare, CheckSquare } from 'lucide-react';

const CheckBeforeChoosingSection = () => {
  const checklists = [
    {
      icon: <FileText size={32} />,
      title: 'REAL ENTITY',
      subtitle: '실제 사업자 정보인가요?',
      desc: '대표자, 주소지, 사업자 번호 등 실제 운영 중인 정보인지 투명하게 공개하는지 확인하십시오.'
    },
    {
      icon: <Search size={32} />,
      title: 'CLEAR SCOPE',
      subtitle: '관리 범위가 명확한가요?',
      desc: '단순 청소를 넘어 어디서부터 어디까지 책임지는지 명확한 가이드라인을 제시해야 합니다.'
    },
    {
      icon: <CheckSquare size={32} />,
      title: 'ON-SITE QUOTE',
      subtitle: '현장 확인 후 견적을 내나요?',
      desc: '유선상의 가상 견적이 아닌, 실제 현장을 방문하여 건물의 노후도와 컨디션을 파악해야 합니다.'
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'COMMUNICATION',
      subtitle: '소통이 원활한가요?',
      desc: '민원 발생 시 즉각적인 대응 시스템과 건물주를 위한 정기 보고 체계가 갖춰져 있는지 확인하십시오.'
    }
  ];

  return (
    <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-6 block"
            >
              Essential Checklist
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]"
            >
              CHOOSE <br />
              <span className="text-secondary italic underline decoration-white/10 underline-offset-8">WISELY</span>
            </motion.h2>
          </div>
          <p className="text-white/40 text-lg font-light max-w-sm">
            건물 관리는 단순히 비용의 문제가 아닙니다. <br />
            당신의 소중한 자산을 지킬 수 있는 <br />
            검증된 파트너인지 먼저 확인하십시오.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {checklists.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col justify-between group hover:bg-white transition-all duration-500 cursor-default"
            >
              <div className="mb-12">
                 <div className="text-secondary group-hover:text-primary transition-colors mb-8">
                   {item.icon}
                 </div>
                 <h4 className="text-[10px] font-black text-white/30 group-hover:text-primary/30 tracking-widest uppercase mb-2">{item.title}</h4>
                 <h5 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-6">{item.subtitle}</h5>
                 <p className="text-white/40 group-hover:text-gray-500 text-sm leading-relaxed font-medium">
                   {item.desc}
                 </p>
              </div>
              <div className="w-8 h-[1px] bg-secondary group-hover:bg-primary transition-all group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Subtle Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[20rem] font-black leading-none -rotate-12">GUIDE</h2>
      </div>
    </section>
  );
};

export default CheckBeforeChoosingSection;
