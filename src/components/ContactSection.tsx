import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12">
            <h2 className="text-primary font-bold mb-4 flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>상담 문의</span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
              건물 관리에 대한 <br />모든 궁금증을 해결해 드립니다
            </h3>
            
            <p className="text-lg text-slate-500 leading-relaxed mb-12">
              관리 비용이나 구체적인 관리 범위가 궁금하신가요? <br />
              귀하의 소중한 자산을 위한 최적의 파트너십을 제안해 드립니다.
            </p>
            
            <div className="space-y-8">
               <div className="group">
                  <p className="text-xs font-bold text-slate-400 mb-2">전화 문의</p>
                  <p className="text-3xl font-bold text-primary">070-4227-5394</p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs font-bold text-slate-400 mb-2">본사 위치</p>
                    <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                      서울특별시 용산구 한강대로38가길 17
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 mb-2">사업자 정보</p>
                    <p className="text-sm font-semibold text-slate-700">106-11-16539 (박창섭)</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">성함 또는 기관명</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-slate-900 outline-none focus:border-primary transition-colors" placeholder="홍길동" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">연락처</label>
                    <input type="tel" className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-slate-900 outline-none focus:border-primary transition-colors" placeholder="010-0000-0000" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">건물 주소</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-slate-900 outline-none focus:border-primary transition-colors" placeholder="용산구 한강로... (상세 주소 제외 가능)" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">문의 내용</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-slate-900 outline-none focus:border-primary transition-colors resize-none" placeholder="문의하실 내용을 입력해 주세요."></textarea>
                </div>
                
                <button className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 shadow-lg hover:bg-primary-light transition-all">
                  <span>상담 신청하기</span>
                  <ArrowRight size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
