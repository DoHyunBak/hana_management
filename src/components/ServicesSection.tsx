import { motion } from 'framer-motion';
import { Home, Sparkles, Wrench, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: '주택 관리',
      desc: '빌라, 다세대주택의 공용공간과 주요 시설물을 전문가의 기준으로 철저히 관리합니다.',
      span: 'md:col-span-2'
    },
    {
      icon: <Sparkles size={28} />,
      title: '정기 청소',
      desc: '보이지 않는 곳까지 세심하게 관리하는 고품격 청소 서비스를 제공합니다.',
      span: 'md:col-span-1'
    },
    {
      icon: <Wrench size={28} />,
      title: '시설 점검',
      desc: '전기, 소방 등 안전과 직결된 시설물을 정기적으로 점검하여 사고를 예방합니다.',
      span: 'md:col-span-1'
    },
    {
      icon: <MessageSquare size={28} />,
      title: '민원 대응',
      desc: '임차인의 불편사항을 신속하게 접수하고 해결하여 원활한 거주 환경을 조성합니다.',
      span: 'md:col-span-1'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: '종합 위생',
      desc: '방역 및 해충 관리 등 건물의 위생 상태를 최상으로 유지하는 통합 솔루션을 제공합니다.',
      span: 'md:col-span-1'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-primary font-bold mb-4">전문 서비스</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">체계적인 건물 관리 솔루션</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`${service.span} bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group transition-all`}
            >
              <div>
                <div className="text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Action Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-1 bg-primary p-10 rounded-2xl text-white flex flex-col justify-center items-center text-center cursor-pointer shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">맞춤형 견적 상담</h3>
            <p className="text-blue-100/70 mb-8 text-sm leading-relaxed">귀하의 건물에 최적화된 <br />관리 플랜을 제안해 드립니다.</p>
            <div className="bg-white text-primary px-6 py-2 rounded-lg font-bold flex items-center space-x-2">
              <span>문의하기</span>
              <ArrowRight size={18} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
