import { motion } from 'framer-motion';

const GreetingsSection = () => {
  return (
    <section id="greetings" className="py-24 bg-bg-warm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative rounded-sm overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src="/ceo.png" 
                alt="Representative Park Chang-seop" 
                className="w-full h-full object-cover aspect-[4/5] transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-deep/90 to-transparent p-8">
                <p className="text-white font-bold text-2xl">박창섭</p>
                <p className="text-secondary-light text-sm uppercase tracking-widest font-serif">President & CEO</p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-secondary font-bold mb-6 flex items-center space-x-2">
                <span className="w-10 h-[2px] bg-accent"></span>
                <span className="text-lg uppercase tracking-widest font-serif">Message</span>
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary-dark leading-[1.25] mb-10 tracking-tight break-keep">
                "화려한 약속보다 <br />정직한 결과로 보답하겠습니다"
              </h3>
              
              <div className="space-y-8 text-text-sub leading-[1.8] text-xl font-medium">
                <p>
                  안녕하십니까. <span className="text-primary-dark font-bold">하나주택종합관리 대표 박창섭</span>입니다. 
                  우리가 2010년 용산에서 처음 관리를 시작했을 때 가졌던 마음가짐은 단 하나였습니다. 
                  '내 건물처럼 관리하자'는 정직함이었습니다.
                </p>
                <p>
                  건물 관리는 단순히 청소를 하고 고장 난 곳을 수리하는 일을 넘어, 
                  누군가에게는 소중한 자산이며 누군가에게는 따뜻한 삶의 터전을 지키는 일입니다. 
                  지난 15년 동안 우리는 수많은 건물을 거쳐오며, 
                  현장에서 직접 발로 뛰고 문제를 해결하며 그 가치를 증명해 왔습니다.
                </p>
                <p>
                  하나주택종합관리는 앞으로도 화려한 포장보다는 내실 있는 관리, 
                  말뿐인 약속보다는 결과로 보여드리는 정직한 파트너가 될 것을 약속드립니다.
                </p>
                <div className="pt-10 border-t border-border-warm flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 bg-white flex items-center justify-center p-2 shadow-sm border border-border-warm rounded-sm">
                      <img src="/logo.png" alt="HM" className="w-full h-auto object-contain" />
                    </div>
                    <div>
                       <p className="text-text-muted text-sm font-medium mb-1">하나주택종합관리 대표이사</p>
                       <p className="text-primary-dark font-bold text-2xl tracking-tighter">박 창 섭</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                     <p className="text-bg-logo font-serif text-3xl uppercase tracking-tighter opacity-50">Hana Housing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreetingsSection;
