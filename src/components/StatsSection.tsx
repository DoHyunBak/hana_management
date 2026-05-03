import { motion } from 'framer-motion';
import { Award, Building2, Users2, HeartHandshake } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Award className="text-blue-500" size={32} />,
      number: '15+',
      label: '관리 숙련도',
      suffix: '년의 시간',
      desc: '2010년부터 한결같이 용산을 지켜온 현장 관리 노하우'
    },
    {
      icon: <Building2 className="text-blue-500" size={32} />,
      number: '500+',
      label: '누적 관리',
      suffix: '개소 돌파',
      desc: '빌라, 상가, 오피스텔 등 다양한 건물 관리 실적'
    },
    {
      icon: <Users2 className="text-blue-500" size={32} />,
      number: '1,200+',
      label: '입주민 소통',
      suffix: '세대 관리',
      desc: '실시간 민원 대응 시스템으로 입주민 만족도 극대화'
    },
    {
      icon: <HeartHandshake className="text-blue-500" size={32} />,
      number: '98%',
      label: '재계약률',
      suffix: '압도적 신뢰',
      desc: '정직한 관리로 증명하는 건물주분들의 높은 신뢰도'
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center md:text-left space-y-4 group"
            >
              <div className="flex justify-center md:justify-start">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-primary/5 transition-colors">
                  {stat.icon}
                </div>
              </div>
              <div>
                <div className="flex items-baseline justify-center md:justify-start space-x-2">
                  <span className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
                    {stat.number}
                  </span>
                  <span className="text-lg font-bold text-slate-400">
                    {stat.suffix}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mt-2 mb-3">{stat.label}</h4>
                <p className="text-slate-500 text-base leading-relaxed break-keep">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
