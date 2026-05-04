import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: '원효로 다세대 빌라 건물주',
      content: '기존 업체는 청소만 대충 하고 가버려서 민원이 많았는데, 하나주택으로 바꾸고 나서 복도 향기부터 달라졌어요. 배관 문제 해결 속도에 감동했습니다.',
      tag: '5년째 파트너',
      location: 'Yongsan, Seoul'
    },
    {
      name: '한강로 상가건물 소유주',
      content: '상가 특성상 야간 민원이 많은데, 24시간 대응 시스템 덕분에 밤에 잠을 편히 잘 수 있게 되었습니다. 월간 보고서의 퀄리티가 정말 높습니다.',
      tag: '수익성 개선',
      location: 'Yongsan, Seoul'
    },
    {
      name: '이촌동 소형 빌딩 관리인',
      content: '용산 지역 사정을 워낙 잘 아시니까 동네 업체들과의 협조도 빠르고, 무엇보다 정직합니다. 과잉 수선 권유가 없어서 비용이 절감됐어요.',
      tag: '지인 추천 1위',
      location: 'Ichon, Seoul'
    },
    {
      name: '한남동 단독주택 소유주',
      content: '프리미엄 관리가 무엇인지 보여주는 업체입니다. 보안부터 정원 관리까지 아주 세밀하게 챙겨주셔서 제 자산 가치가 높아지는 기분입니다.',
      tag: '프리미엄 관리',
      location: 'Hannam, Seoul'
    },
    {
      name: '후암동 다세대 주택주',
      content: '건물 관리가 이렇게 체계적일 수 있다는 걸 처음 알았습니다. 임차인들의 만족도가 높아져서 공실 걱정이 사라진 게 가장 큰 수확입니다.',
      tag: '공실률 제로',
      location: 'Huam, Seoul'
    },
    {
      name: '원효로3가 근생건물주',
      content: '오래된 건물이라 손볼 곳이 많았는데, 하나주택의 정기 점검 덕분에 큰 사고를 여러 번 막았습니다. 정직한 관리가 자산을 지키는 지름길이네요.',
      tag: '자산 보존',
      location: 'Yongsan, Seoul'
    }
  ];

  // 더 풍성한 스크롤을 위해 배열을 두 번 반복
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-32 bg-white overflow-hidden border-t border-border-warm">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h2 className="text-secondary font-serif text-2xl mb-6 uppercase tracking-widest">Client Success</h2>
        <h3 className="text-4xl md:text-6xl text-primary-dark font-extrabold leading-tight tracking-[-0.03em]">
          건물주가 증명하는 <br />
          <span className="text-text-sub font-normal">하나주택의 정직한 관리</span>
        </h3>
      </div>

      <div className="relative flex">
        {/* 무한 스크롤 애니메이션 컨테이너 */}
        <motion.div 
          className="flex space-x-8"
          animate={{
            x: [0, -1920], // 카드의 너비에 따라 조정 필요
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {scrollingTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[350px] md:w-[420px] shrink-0 bg-bg-warm p-8 md:p-12 rounded-sm border border-border-warm flex flex-col justify-between relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <Quote className="text-primary-dark/5 absolute top-8 right-8 group-hover:text-accent/10 transition-colors" size={60} />
              
              <div className="relative z-10">
                <div className="flex space-x-1 mb-8 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                
                <span className="inline-block px-4 py-1 bg-white text-secondary text-[10px] font-bold tracking-[0.15em] rounded-sm mb-8 shadow-sm border border-border-warm uppercase font-serif">
                  {item.tag}
                </span>
                
                <p className="text-primary-dark leading-relaxed mb-10 text-xl font-bold tracking-tight break-keep">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-8 border-t border-border-warm flex items-center justify-between">
                <div>
                  <p className="text-primary-dark font-bold text-lg">{item.name}</p>
                  <p className="text-text-muted text-xs mt-1 uppercase tracking-widest font-serif">{item.location}</p>
                </div>
                <div className="w-16 h-16 bg-white border border-border-warm flex items-center justify-center p-2 shadow-sm rounded-sm overflow-hidden">
                  <img src="/logo.png" alt="HM" className="w-full h-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* 그라데이션 오버레이 (좌우 끝) */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-text-muted text-[10px] font-bold tracking-[0.4em] uppercase font-serif">
          Real property owner reviews. verified management success.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
