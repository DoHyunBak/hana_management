import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '어떤 건물을 관리할 수 있나요?',
      a: '빌라, 다세대주택, 다가구주택, 상가건물, 오피스텔, 소형 빌딩 등 공용공간 관리가 필요한 모든 유형의 주거 및 상업 건물을 대상으로 상담할 수 있습니다.',
    },
    {
      q: '청소만 의뢰할 수 있나요?',
      a: '네, 가능합나다. 계단, 복도, 현관, 주차장, 분리수거 공간 등 필요한 범위를 협의하여 맞춤형 청소 관리 서비스를 제공합니다.',
    },
    {
      q: '정기 관리도 가능한가요?',
      a: '네, 대다수의 고객사가 주 1회 또는 격주 방문 등 정기 관리 시스템을 이용 중이며, 현장 상황에 최적화된 주기를 제안해 드립니다.',
    },
    {
      q: '견적 산출 기준은 무엇인가요?',
      a: '건물의 위치, 규모(층수/세대수), 관리 범위, 방문 주기 등을 종합적으로 고려합니다. 정확한 견적을 위해 현장 방문을 원칙으로 합니다.',
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold mb-4">도움말</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">자주 묻는 질문</h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden transition-all">
              <button
                className="w-full px-8 py-6 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-slate-900 text-lg md:text-xl tracking-tight leading-snug flex items-start">
                   <span className="text-primary mr-3 shrink-0">Q.</span>
                   <span>{faq.q}</span>
                </span>
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <Plus size={20} className="text-slate-400" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 pt-0 text-slate-500 text-[15px] leading-relaxed flex items-start">
                       <span className="text-primary font-bold mr-3 shrink-0">A.</span>
                       <span>{faq.a}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
