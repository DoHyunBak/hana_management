import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    {
      number: '15',
      label: 'Years of Heritage',
      suffix: 'th',
      desc: '2010년부터 용산 한 자리를 지켜온 역사'
    },
    {
      number: '500',
      label: 'Managed Assets',
      suffix: '+',
      desc: '수많은 건물주가 선택한 검증된 관리력'
    },
    {
      number: '1,200',
      label: 'Resident Trust',
      suffix: '+',
      desc: '세대별 맞춤 대응으로 쌓아온 두터운 신뢰'
    },
    {
      number: '98',
      label: 'Retention Rate',
      suffix: '%',
      desc: '정직한 실력으로 증명하는 압도적 재계약률'
    }
  ];

  return (
    <section className="py-24 bg-primary-deep text-white overflow-hidden relative">
      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    {stat.number}
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-white/40 ml-1">
                    {stat.suffix}
                  </span>
                </div>
                <div className="h-[2px] w-12 bg-accent mb-6 hidden lg:block"></div>
                <h4 className="text-xs md:text-sm font-bold text-secondary-light uppercase tracking-[0.3em] mb-4 font-serif">
                  {stat.label}
                </h4>
                <p className="text-white/60 text-base leading-relaxed text-center lg:text-left break-keep font-light">
                  {stat.desc}
                </p>
              </div>
              
              {/* Vertical divider for desktop */}
              {idx < stats.length - 1 && (
                <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[1px] h-20 bg-white/10 hidden lg:block"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
