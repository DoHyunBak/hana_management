import { motion } from 'framer-motion';
import { Home, Sparkles, Wrench, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Home size={32} className="text-secondary" />,
      title: '주택 및 공용공간 관리',
      desc: '빌라, 다세대주택의 공용공간과 주요 시설물을 전문가의 기준으로 철저히 관리합니다. 15년 노하우로 건물의 노후화를 막고 가치를 유지합니다.'
    },
    {
      icon: <Sparkles size={32} className="text-secondary" />,
      title: '고품격 정기 청소',
      desc: '단순한 쓸고 닦기를 넘어 보이지 않는 곳까지 세심하게 관리합니다. 거주자와 방문객 모두가 쾌적함을 느낄 수 있는 환경을 조성합니다.'
    },
    {
      icon: <Wrench size={32} className="text-secondary" />,
      title: '시설물 정기 점검',
      desc: '전기, 소방, 배수 등 안전과 직결된 시설물을 정기적으로 점검합니다. 예방적 관리를 통해 갑작스러운 수리 비용 지출을 최소화합니다.'
    },
    {
      icon: <MessageSquare size={32} className="text-secondary" />,
      title: '민원 및 분쟁 중재',
      desc: '임차인의 불편사항을 신속하게 접수하고 원만하게 해결합니다. 건물주와 입주민 사이의 소통 창구 역할을 수행하여 갈등을 미연에 방지합니다.'
    },
    {
      icon: <ShieldCheck size={32} className="text-secondary" />,
      title: '통합 방역 및 위생',
      desc: '법정 방역 준수 및 해충 관리 등 건물의 위생 상태를 최상으로 유지합니다. 전문 장비와 약제를 사용하여 안전하고 청결한 공간을 보장합니다.'
    }
  ];

  return (
    <section id="services" className="py-32 bg-bg-warm border-b border-border-warm">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="text-secondary font-serif text-2xl mb-6">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl text-primary-dark font-bold leading-tight mb-8">
            자산의 품격을 높이는 <br />
            <span className="text-text-sub font-light">전문 관리 솔루션</span>
          </h3>
          <div className="h-[2px] w-16 bg-accent mb-8"></div>
          <p className="text-text-main max-w-2xl text-xl leading-relaxed font-medium break-keep">
            하나주택종합관리는 단순한 용역이 아닌, 당신의 소중한 자산을 지키는 <br />
            신뢰할 수 있는 파트너로서 최상의 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group"
            >
              <div className="mb-8 relative">
                <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary/5 rounded-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
              </div>
              <h4 className="text-2xl font-bold text-primary-dark mb-6 group-hover:text-accent transition-colors">
                {service.title}
              </h4>
              <p className="text-text-sub leading-relaxed text-[17px] font-medium flex-grow break-keep">
                {service.desc}
              </p>
              </motion.div>          ))}
          
          {/* Action Card - Reimagined as a formal CTA card */}
          <div className="lg:col-span-1 bg-primary-dark p-12 flex flex-col justify-between border-t-4 border-accent shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-3xl font-bold text-white mb-6 leading-tight">건물별 맞춤형 <br />관리 제안서 요청</h4>
              <p className="text-white/60 mb-10 text-[15px] leading-relaxed font-light">
                모든 건물은 다릅니다. 귀하의 건물에 가장 최적화된 맞춤형 관리 플랜을 무료로 진단해 드립니다.
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative z-10 bg-accent text-white px-8 py-4 font-bold hover:bg-accent-dark transition-all flex items-center justify-between group/btn shadow-xl border border-accent/50"
            >
              <span>무료 상담 시작하기</span>
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
            
            {/* Background texture for the action card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
