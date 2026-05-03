import { MapPin, Compass, Building } from 'lucide-react';

const LocalTrustSection = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative background landmarks (Stylized Text/Shapes) */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[20rem] font-black leading-none">YONGSAN</h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Local Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-black text-primary leading-tight mb-8">
              용산구 구석구석을 <br />가장 잘 아는 관리 파트너
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              하나주택종합관리는 2010년부터 서울 용산구 한 자리를 지켜왔습니다. <br className="hidden md:block" />
              지역 특성을 반영한 맞춤형 관리는 오직 지역 기반 업체만이 가능합니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">용산 전역 밀착 관리</h4>
                  <p className="text-gray-500 text-sm">원효로, 이촌동, 한강로, 이태원 등 용산구 전 지역 신속한 현장 출동</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Compass size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">지역 특화 네트워크</h4>
                  <p className="text-gray-500 text-sm">지역 내 설비, 보수 업체와의 긴밀한 협력으로 문제 발생 시 즉각 대응</p>
                </div>
              </div>

              <div className="flex items-start space-x-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">노후 건물 관리 노하우</h4>
                  <p className="text-gray-500 text-sm">용산 특유의 구옥 및 소형 건물이 많은 지역적 특성을 반영한 유지보수 역량</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-gray-200 aspect-square">
              {/* This represents a stylized map / landmark visual */}
              <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                <div className="text-center p-12">
                   <div className="relative mb-8 inline-block">
                      <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
                      <MapPin size={80} className="text-secondary relative z-10" />
                   </div>
                   <h5 className="text-2xl font-bold text-primary mb-4">하나주택종합관리 본사</h5>
                   <p className="text-gray-500 mb-8 font-medium italic">서울특별시 용산구 한강대로38가길 17</p>
                   <a 
                    href="https://map.naver.com" 
                    target="_blank" 
                    className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all"
                   >
                     <span>네이버 지도로 보기</span>
                   </a>
                </div>
              </div>
              {/* Stylized background lines mimicking a map */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-primary rotate-12"></div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary -rotate-6"></div>
                <div className="absolute top-0 left-1/3 w-[1px] h-full bg-primary rotate-3"></div>
                <div className="absolute top-0 left-2/3 w-[1px] h-full bg-primary -rotate-12"></div>
              </div>
            </div>
            
            {/* Floating Landmark badges */}
            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
               <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary font-bold">남산</div>
                 <div className="text-sm font-bold text-gray-400">Landmark</div>
               </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
               <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary font-bold">한강</div>
                 <div className="text-sm font-bold text-gray-400">Landmark</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalTrustSection;
