import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative aspect-square rounded-sm overflow-hidden shadow-xl"
            >
               <img 
                src="/903da88d-a96f-4bee-a238-1f5c62508c8d.png" 
                alt="하나주택종합관리 관리 현장" 
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </motion.div>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-6 -right-6 bg-primary-dark p-8 rounded-sm shadow-xl hidden md:block border-l-4 border-accent"
            >
              <p className="text-white font-bold text-4xl mb-1">15년</p>
              <p className="text-white/60 font-medium text-sm uppercase tracking-widest font-serif">Heritage in Yongsan</p>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <h2 className="text-secondary font-bold mb-6 flex items-center space-x-2">
                <span className="w-10 h-[2px] bg-accent"></span>
                <span className="text-lg uppercase tracking-[0.1em] font-serif">Corporate Overview</span>
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary-dark leading-[1.2] mb-10 tracking-[-0.04em] break-keep">
                용산의 변화와 함께해온 <br />
                15년의 현장 노하우
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-8"
            >
              <p className="text-2xl text-text-main font-bold leading-relaxed break-keep tracking-tight">
                하나주택종합관리는 단순한 용역 제공자가 아닙니다. <br />
                건물의 생애주기를 이해하고 자산 가치를 지켜내는 파트너입니다.
              </p>
              <p className="text-xl text-text-sub leading-[1.8] break-keep font-medium tracking-tight">
                2010년 용산구에서 시작된 우리의 여정은 오직 '정직' 하나로 이어져 왔습니다. 수만 건의 현장 경험과 체계적인 관리 시스템을 결합하여, 건물주에게는 평안함을, 임차인에게는 쾌적함을 제공합니다.
              </p>
            </motion.div>

            {/* Professional Info Table */}
            <div className="mt-14 border-t-2 border-primary-dark">
               {[
                 { label: '회사명', value: '하나주택종합관리' },
                 { label: '대표이사', value: '박창섭' },
                 { label: '설립일', value: '2010년 10월' },
                 { label: '본사 소재지', value: '서울특별시 용산구 한강대로38가길 17' },
                 { label: '사업자등록번호', value: '106-11-16539' }
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center py-5 border-b border-border-warm">
                    <span className="text-text-muted font-bold text-sm uppercase tracking-widest w-32 font-serif">{item.label}</span>
                    <span className="text-primary-dark font-bold text-lg text-right flex-1">{item.value}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
