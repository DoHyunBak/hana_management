import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin, ClipboardList, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      // 환경변수(.env)에 저장된 키를 사용하여 보안성을 높였습니다.
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        formRef.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setIsSuccess(true);
      formRef.current.reset();
      alert('상담 신청이 완료되었습니다. 곧 연락드리겠습니다.');
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('상담 신청 중 오류가 발생했습니다. 전화(070-4227-5394)로 문의주시면 감사하겠습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-primary-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-5/12">
            <h2 className="text-secondary font-serif text-2xl mb-8">Consultation</h2>
            <h3 className="text-4xl md:text-6xl text-white font-serif leading-tight tracking-tight mb-12">
              당신의 자산을 위한 <br />
              <span className="text-slate-400 font-normal">가장 정직한 대화</span>
            </h3>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-16 font-light break-keep">
              건물 관리는 단순한 유지보수를 넘어선 신뢰의 계약입니다. <br />
              15년 용산 현장의 경험을 바탕으로, 귀하의 자산에 가장 <br />
              최적화된 관리 솔루션을 직접 제안해 드립니다.
            </p>
            
            <div className="space-y-12">
               <div className="flex items-start space-x-6">
                  <div className="p-4 bg-secondary text-white rounded-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Direct Inquiry</p>
                    <p className="text-3xl font-bold text-white tracking-tight">070-4227-5394</p>
                  </div>
               </div>
               
               <div className="flex items-start space-x-6">
                  <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-sm">
                    <MapPin size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Head Office</p>
                    <p className="text-lg font-semibold text-white leading-relaxed max-w-[300px]">
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
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block group-focus-within:text-primary transition-colors">성함 또는 기관명</label>
                    <input 
                      name="user_name"
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 outline-none focus:border-primary transition-colors" 
                      placeholder="Name / Company" 
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block group-focus-within:text-primary transition-colors">연락처</label>
                    <input 
                      name="user_phone"
                      required
                      type="tel" 
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 outline-none focus:border-primary transition-colors" 
                      placeholder="Phone Number" 
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block group-focus-within:text-primary transition-colors">건물 주소</label>
                  <input 
                    name="building_address"
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 outline-none focus:border-primary transition-colors" 
                    placeholder="Building Address" 
                  />
                </div>
                
                <div className="relative group">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block group-focus-within:text-primary transition-colors">문의 내용</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 outline-none focus:border-primary transition-colors resize-none" 
                    placeholder="Message"
                  ></textarea>
                </div>
                
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-primary text-white py-6 font-bold text-lg flex items-center justify-center space-x-4 hover:bg-primary-light transition-all shadow-xl group/btn disabled:bg-slate-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>전송 중...</span>
                    </>
                  ) : (
                    <>
                      <span>현장 진단 및 상담 신청</span>
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
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
