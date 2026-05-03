import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin, ClipboardList } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-5/12">
            <h2 className="text-secondary font-serif italic text-2xl mb-8">Consultation</h2>
            <h3 className="text-4xl md:text-6xl text-slate-950 font-serif leading-tight mb-10">
              귀하의 자산을 위한 <br />
              <span className="text-slate-500 font-light italic">가장 정직한 대화</span>
            </h3>
            
            <p className="text-xl text-slate-500 leading-relaxed mb-16 font-light break-keep">
              건물 관리는 단순한 유지보수를 넘어선 신뢰의 계약입니다. <br />
              15년 용산 현장의 경험을 바탕으로, 귀하의 자산에 가장 <br />
              최적화된 관리 솔루션을 직접 제안해 드립니다.
            </p>
            
            <div className="space-y-12">
               <div className="flex items-start space-x-6">
                  <div className="p-4 bg-primary text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Direct Inquiry</p>
                    <p className="text-3xl font-serif text-primary">070-4227-5394</p>
                  </div>
               </div>
               
               <div className="flex items-start space-x-6">
                  <div className="p-4 bg-white border border-slate-200">
                    <MapPin size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Head Office</p>
                    <p className="text-sm font-semibold text-slate-700 leading-relaxed max-w-[200px]">
                      서울특별시 용산구 한강대로38가길 17 (한강로2가)
                    </p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-16 border-t-8 border-primary shadow-2xl relative"
            >
              <div className="flex items-center space-x-3 mb-12">
                <ClipboardList size={20} className="text-secondary" />
                <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-primary">Asset Consultation Request</h4>
              </div>
              
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block group-focus-within:text-primary transition-colors">성함 또는 기관명</label>
                    <input type="text" className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 outline-none focus:border-primary transition-colors" placeholder="Name / Company" />
                  </div>
                  <div className="relative group">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block group-focus-within:text-primary transition-colors">연락처</label>
                    <input type="tel" className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 outline-none focus:border-primary transition-colors" placeholder="Phone Number" />
                  </div>
                </div>
                
                <div className="relative group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block group-focus-within:text-primary transition-colors">건물 주소</label>
                  <input type="text" className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 outline-none focus:border-primary transition-colors" placeholder="Building Address" />
                </div>
                
                <div className="relative group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block group-focus-within:text-primary transition-colors">문의 내용</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 outline-none focus:border-primary transition-colors resize-none" placeholder="Message"></textarea>
                </div>
                
                <button className="w-full bg-primary text-white py-6 font-bold text-lg flex items-center justify-center space-x-4 hover:bg-primary-light transition-all shadow-xl group/btn">
                  <span>현장 진단 및 상담 신청</span>
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </form>
              
              <p className="mt-8 text-[11px] text-slate-400 text-center font-light">
                * 전송된 정보는 상담 목적으로만 사용되며, 관련 법령에 따라 엄격히 보호됩니다.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
