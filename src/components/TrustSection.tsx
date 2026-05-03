import { motion } from 'framer-motion';
import { ShieldCheck, Activity, TrendingUp, Users } from 'lucide-react';

const BentoTrustSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-primary font-bold mb-4 flex items-center space-x-2">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span>핵심 가치</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">우리가 신뢰를 증명하는 방식</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[500px]">
          {/* Big Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl p-10 flex flex-col justify-between bg-primary text-white shadow-xl"
          >
            <ShieldCheck size={48} className="text-blue-300 mb-8" />
            <div>
              <h4 className="text-3xl font-bold mb-4 leading-tight">2010년부터 시작된 <br />용산 관리의 역사</h4>
              <p className="text-blue-100/80 text-lg leading-relaxed">
                단순히 오래된 것이 아니라, 수만 건의 현장 데이터를 통해 <br />
                어떤 문제도 즉각 해결하는 시스템을 갖췄습니다.
              </p>
            </div>
          </motion.div>

          {/* Medium Cards */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 rounded-2xl p-8 bg-slate-50 border border-slate-100 flex items-center space-x-6"
          >
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
               <Users size={32} className="text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">전문 베테랑 팀</h4>
              <p className="text-slate-500">현장을 직접 발로 뛰는 숙련된 인력</p>
            </div>
          </motion.div>

          {/* Small Cards */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-2xl p-8 bg-blue-50 border border-blue-100 text-primary flex flex-col justify-between"
          >
            <TrendingUp size={32} />
            <h4 className="text-xl font-bold">자산 가치 상승</h4>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="rounded-2xl p-8 bg-slate-900 text-white flex flex-col justify-between shadow-lg"
          >
            <Activity size={32} className="text-blue-400" />
            <h4 className="text-xl font-bold">24시간 상시 관리</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoTrustSection;
