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
      a: '네, 가능합니다. 계단, 복도, 현관, 주차장, 분리수거 공간 등 필요한 범위를 협의하여 맞춤형 청소 관리 서비스를 제공합니다.',
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
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-primary tracking-tighter mb-8 uppercase"
          >
            Inquiry FAQ
          </motion.h2>
          <p className="text-gray-400 text-lg font-light">가장 많이 궁금해하시는 질문들을 정리했습니다.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5">
              <button
                className="w-full px-10 py-10 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-black text-primary text-xl md:text-2xl tracking-tight leading-snug">
                   <span className="text-secondary mr-4">Q.</span>{faq.q}
                </span>
                <div className={`p-4 rounded-full transition-colors ${openIndex === idx ? 'bg-primary text-white' : 'bg-gray-50 text-primary'}`}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
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
                    <div className="px-10 pb-10 pt-0 text-gray-500 text-lg font-medium leading-relaxed border-t border-gray-50/50 mt-4 py-8">
                       <span className="text-secondary font-black mr-4">A.</span>{faq.a}
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
