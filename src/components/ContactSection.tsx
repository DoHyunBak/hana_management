import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Editorial Content Column */}
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary font-black tracking-[0.4em] uppercase text-xs mb-8 block"
            >
              Inquiry Center
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-black text-primary tracking-tighter leading-[0.85] mb-12"
            >
              START <br />
              <span className="text-gray-100">DIALOGUE</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl text-primary/60 font-light leading-relaxed mb-20 max-w-lg"
            >
              관리 비용이 궁금하신가요? <br />
              귀하의 소중한 자산을 위한 최적의 파트너십을 지금 제안해 드립니다.
            </motion.p>
            
            <div className="space-y-12">
               <div className="group cursor-pointer">
                  <p className="text-[10px] font-black text-primary/20 tracking-widest uppercase mb-4 group-hover:text-secondary transition-colors">Emergency Call</p>
                  <p className="text-4xl font-black text-primary">070-4227-5394</p>
               </div>
               
               <div className="flex flex-col md:flex-row gap-10">
                  <div>
                    <p className="text-[10px] font-black text-primary/20 tracking-widest uppercase mb-4">Headquarters</p>
                    <p className="text-sm font-bold text-primary/70 max-w-[200px] leading-relaxed">
                      서울특별시 용산구 한강대로38가길 17
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-primary/20 tracking-widest uppercase mb-4">Registration</p>
                    <p className="text-sm font-bold text-primary/70">106-11-16539</p>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Modern Form Column */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-50 p-10 md:p-16 rounded-[4rem] border border-gray-100 shadow-2xl shadow-primary/5"
            >
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative border-b-2 border-primary/5 focus-within:border-secondary transition-colors">
                    <label className="text-[10px] font-black text-primary/30 tracking-widest uppercase mb-2 block">Name</label>
                    <input type="text" className="w-full bg-transparent py-4 text-primary font-bold outline-none" placeholder="성함 또는 기관명" />
                  </div>
                  <div className="relative border-b-2 border-primary/5 focus-within:border-secondary transition-colors">
                    <label className="text-[10px] font-black text-primary/30 tracking-widest uppercase mb-2 block">Phone</label>
                    <input type="tel" className="w-full bg-transparent py-4 text-primary font-bold outline-none" placeholder="010-0000-0000" />
                  </div>
                </div>
                
                <div className="relative border-b-2 border-primary/5 focus-within:border-secondary transition-colors">
                  <label className="text-[10px] font-black text-primary/30 tracking-widest uppercase mb-2 block">Property Address</label>
                  <input type="text" className="w-full bg-transparent py-4 text-primary font-bold outline-none" placeholder="건물 위치 (예: 용산구 한강로)" />
                </div>
                
                <div className="relative border-b-2 border-primary/5 focus-within:border-secondary transition-colors">
                  <label className="text-[10px] font-black text-primary/30 tracking-widest uppercase mb-2 block">Message</label>
                  <textarea rows={4} className="w-full bg-transparent py-4 text-primary font-bold outline-none resize-none" placeholder="문의하실 내용을 입력해 주세요."></textarea>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-8 rounded-[2rem] font-black text-lg tracking-widest flex items-center justify-center space-x-4 shadow-2xl shadow-primary/30"
                >
                  <span>SEND INQUIRY</span>
                  <ArrowRight size={24} className="text-secondary" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
