import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-32 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary font-black tracking-[0.4em] uppercase text-xs mb-8 block"
            >
              Location & Presence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9] mb-12"
            >
              YONGSAN <br />
              <span className="text-primary/10 italic">CENTER</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-10 mb-16"
            >
              <p className="text-2xl text-primary/70 font-light leading-relaxed">
                하나주택종합관리는 용산의 중심에서 <br />
                가장 신속하고 정확하게 당신의 자산을 관리합니다.
              </p>
              <div className="flex items-start space-x-6 bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-gray-100">
                <div className="p-4 bg-primary text-white rounded-2xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black text-primary text-xl mb-2 tracking-tight">본사 주소</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    서울특별시 용산구 한강대로38가길 17 <br />
                    (한강로2가 151)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://map.naver.com"
              target="_blank"
              className="inline-flex items-center space-x-4 bg-gray-900 text-white px-10 py-5 rounded-full font-black text-sm tracking-widest shadow-2xl"
            >
              <Navigation size={20} className="text-secondary" />
              <span>NAVER MAP DIRECTION</span>
              <ExternalLink size={16} className="opacity-30" />
            </motion.a>
          </div>

          <div className="lg:w-1/2 w-full h-[600px] relative rounded-[4rem] overflow-hidden shadow-2xl group">
             {/* Luxury Map Overlay / Background */}
             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="relative text-center">
                   <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ repeat: Infinity, duration: 3 }}
                     className="relative z-10 mb-6"
                   >
                     <MapPin size={80} className="text-secondary mx-auto" />
                   </motion.div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                   <h5 className="text-2xl font-black text-primary tracking-tighter">HANA HEADQUARTERS</h5>
                </div>
             </div>
             
             {/* Map Grid Pattern */}
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#002B5B_1px,transparent_1px)] [background-size:20px_20px]"></div>
             
             {/* Interaction Overlay */}
             <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[2px] flex items-center justify-center">
                <p className="text-white font-black tracking-widest text-xs border border-white/20 px-8 py-4 rounded-full">INTERACTIVE MAP COMING SOON</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
