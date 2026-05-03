import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: '원효로 다세대 빌라 건물주',
      content: '기존 업체는 청소만 대충 하고 가버려서 민원이 많았는데, 하나주택종합관리로 바꾸고 나서 복도 향기부터 달라졌어요. 특히 배관 문제 생겼을 때 바로 오셔서 해결해 주시는 거 보고 정말 감동했습니다.',
      tag: '5년째 파트너'
    },
    {
      name: '한강로 상가건물 관리인',
      content: '상가 특성상 야간 민원이 많은데, 24시간 대응해 주시는 시스템 덕분에 밤에 잠을 편히 잘 수 있게 되었습니다. 꼼꼼한 월간 보고서 덕분에 건물의 노후 상태를 미리 파악하고 대비할 수 있어 매우 만족합니다.',
      tag: '수익성 개선'
    },
    {
      name: '이촌동 소형 빌딩 소유주',
      content: '용산 지역 사정을 워낙 잘 아시니까 동네 업체들과의 협조도 빠르고, 무엇보다 정직합니다. 과잉 수선 권유 없이 꼭 필요한 부분만 짚어주시니 비용 면에서도 훨씬 효율적입니다. 주변 지인들에게도 적극 추천하고 있어요.',
      tag: '지인 추천 1위'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-primary font-bold mb-4">고객 후기</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">건물주가 말하는 하나주택종합관리</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between relative"
            >
              <Quote className="text-primary/10 absolute top-8 right-8" size={48} />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full mb-6">
                  {item.tag}
                </span>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg font-medium">
                  "{item.content}"
                </p>
              </div>
              <div className="pt-6 border-t border-slate-50">
                <p className="text-slate-900 font-bold text-base">{item.name}</p>
                <p className="text-slate-400 text-xs mt-1">실제 관리 고객사</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm">
            ※ 위 후기는 실제 관리 중인 건물주분들의 동의를 얻어 작성된 소중한 의견입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
