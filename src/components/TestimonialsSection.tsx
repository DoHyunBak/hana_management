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
    <section className="py-32 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h2 className="text-secondary font-serif text-2xl mb-6">Client Success</h2>
        <h3 className="text-4xl md:text-6xl text-slate-950 font-serif leading-tight tracking-tight">
          건물주가 증명하는 <br />
          <span className="text-slate-500 font-normal">하나주택의 정직한 관리</span>
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
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {scrollingTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[350px] md:w-[450px] shrink-0 bg-slate-50 p-10 md:p-12 rounded-2xl border border-slate-100 flex flex-col justify-between relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <Quote className="text-primary/5 absolute top-8 right-8 group-hover:text-secondary/10 transition-colors" size={60} />
              
              <div className="relative z-10">
                <div className="flex space-x-1 mb-8 text-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                
                <span className="inline-block px-4 py-1 bg-white text-secondary text-[10px] font-bold tracking-widest rounded-full mb-8 shadow-sm border border-slate-100">
                  {item.tag}
                </span>
                
                <p className="text-slate-800 leading-relaxed mb-10 text-xl font-medium break-keep">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-8 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <p className="text-slate-950 font-bold text-lg">{item.name}</p>
                  <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">{item.location}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-primary font-serif font-black shadow-sm">
                  H
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* 그라데이션 오버레이 (좌우 끝) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-slate-300 text-xs tracking-widest uppercase">
          Real property owner reviews. verified management success.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
