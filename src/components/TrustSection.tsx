import { motion } from 'framer-motion';
import { ShieldCheck, History, Award, CheckCircle2 } from 'lucide-react';

const TrustSection = () => {
  const values = [
    {
      icon: <History size={28} className="text-secondary" />,
      title: '15년의 축적된 데이터',
      description: '2010년부터 용산구 일대의 수많은 주택과 건물을 관리하며 쌓아온 실전 노하우는 그 누구도 흉내 낼 수 없는 우리의 자산입니다.'
    },
    {
      icon: <Award size={28} className="text-secondary" />,
      title: '검증된 관리 전문성',
      description: '단순한 청소를 넘어 시설 유지보수, 법무/세무 지원까지 건물주의 입장에서 가장 필요한 핵심 서비스를 체계적으로 제공합니다.'
    },
    {
      icon: <ShieldCheck size={28} className="text-secondary" />,
      title: '책임 있는 자산 관리',
      description: '내 집을 관리하는 마음으로 사소한 결함도 놓치지 않습니다. 투명한 리포트와 정직한 정산으로 무너질 수 없는 신뢰를 쌓습니다.'
    }
  ];

  return (
    <section className="py-32 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-secondary font-serif text-2xl mb-6">Pillars of Trust</h2>
            <h3 className="text-4xl md:text-6xl text-slate-950 font-serif leading-tight tracking-tight mb-8">
              시간이 증명하고 <br />
              <span className="text-slate-500 font-light">결과가 말하는 신뢰</span>
            </h3>
            <p className="text-slate-500 text-xl leading-relaxed font-light max-w-xl">
              트렌드는 변하지만 본질은 변하지 않습니다. 하나주택종합관리는 겉모습보다 내실을 다지며 묵묵히 자산의 가치를 지켜왔습니다.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/6ab07a3d-e3e6-4f9c-b824-23d4795438bc.png" 
                alt="전문적인 관리 현장" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-slate-50 rounded-full -z-0"></div>
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-secondary/10 rounded-full -z-0"></div>
            
            <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md p-6 border border-slate-100 shadow-xl max-w-xs">
              <p className="text-primary font-serif text-lg mb-1">Since 2010</p>
              <p className="text-slate-600 text-xs tracking-widest uppercase font-bold">Yongsan Property Management</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-sm group-hover:bg-primary transition-colors duration-500 group-hover:border-primary">
                  <div className="group-hover:text-white transition-colors duration-500">
                    {value.icon}
                  </div>
                </div>
                <span className="text-slate-200 font-serif text-5xl">0{idx + 1}</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors tracking-tight">
                {value.title}
              </h4>
              <p className="text-slate-500 leading-relaxed text-[16px] font-light break-keep">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Established Badge / Seal */}
        <div className="mt-24 pt-16 border-t border-slate-100 flex flex-col items-center">
          <div className="flex items-center space-x-3 text-primary mb-6">
            <CheckCircle2 size={20} className="text-secondary" />
            <span className="font-bold tracking-[0.2em] text-sm uppercase">Yongsan's Standard Since 2010</span>
          </div>
          <p className="text-slate-400 text-sm text-center max-w-xl">
            "우리는 건물의 현재뿐만 아니라 미래까지 생각합니다. 15년 전 처음 가졌던 그 휘지 않는 정직함 그대로, 당신의 곁을 지키겠습니다."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
