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
              className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
            >
               <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                alt="Office Space" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl shadow-xl hidden md:block"
            >
              <p className="text-white font-bold text-4xl mb-1">15년</p>
              <p className="text-blue-200 font-medium text-sm">용산 한자리에서의 신뢰</p>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-primary font-bold mb-4 flex items-center space-x-2">
                <span className="w-8 h-[2px] bg-primary"></span>
                <span>회사 소개</span>
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                현장 중심의 정직한 관리, <br />
                건물의 내일을 생각합니다
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-6"
            >
              <p className="text-xl text-slate-700 font-medium leading-relaxed">
                하나주택종합관리는 단순한 용역 제공자가 아닙니다. <br />
                우리는 건물의 생애주기를 이해하고 가치를 보호하는 파트너입니다.
              </p>
              <p className="text-slate-500 leading-relaxed">
                2010년 용산구에서 시작된 우리의 여정은 오직 '정직' 하나로 이어져 왔습니다. 수만 건의 현장 경험과 체계적인 관리 시스템을 결합하여, 건물주에게는 평안함을, 임차인에게는 쾌적함을 제공합니다.
              </p>
            </motion.div>

            {/* Professional Info Table */}
            <div className="mt-12 border-t border-slate-100">
               {[
                 { label: '대표이사', value: '박창섭' },
                 { label: '사업장 위치', value: '서울특별시 용산구 한강대로38가길 17' },
                 { label: '사업자등록번호', value: '106-11-16539' }
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center py-4 border-b border-slate-100">
                    <span className="text-slate-400 font-bold text-sm">{item.label}</span>
                    <span className="text-slate-900 font-semibold text-sm">{item.value}</span>
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
