import { MapPin, Compass, Building } from 'lucide-react';

const LocalTrustSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-primary font-bold mb-4 flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span>지역 기반 신뢰</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
              용산구의 지역적 특성을 <br />가장 잘 아는 관리 전문가
            </h3>
            
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              하나주택종합관리는 2010년부터 용산구 한 자리를 지켜왔습니다. <br className="hidden md:block" />
              현장에 답이 있다는 믿음으로, 용산 건물주의 든든한 파트너가 되어 드립니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-6 bg-slate-50 p-8 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="p-4 bg-white rounded-xl text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-2">용산 전역 밀착 관리</h4>
                  <p className="text-slate-600 text-lg leading-relaxed font-light">원효로, 이촌동, 한강로, 이태원 등 용산구 전 지역 신속 출동</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 bg-slate-50 p-8 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="p-4 bg-white rounded-xl text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Compass size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-2">지역 특화 네트워크</h4>
                  <p className="text-slate-600 text-lg leading-relaxed font-light">지역 내 주요 설비업체와 긴밀한 협력으로 문제 즉각 대응</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-slate-50 p-8 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="p-4 bg-white rounded-xl text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Building size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-2">건물 맞춤형 관리</h4>
                  <p className="text-slate-600 text-lg leading-relaxed font-light">용산 지역 특유의 다양한 건물 형태에 최적화된 관리 역량</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl bg-slate-100 aspect-square">
              <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                   <div className="mb-6 inline-block">
                      <MapPin size={64} className="text-primary mx-auto" />
                   </div>
                   <h5 className="text-xl font-bold text-slate-900 mb-2">하나주택종합관리 본사</h5>
                   <p className="text-slate-500 mb-8 text-sm">서울특별시 용산구 한강대로38가길 17</p>
                   <a 
                    href="https://map.naver.com/p/entry/place/18735433" 
                    target="_blank" 
                    className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-light transition-all shadow-lg"
                   >
                     <span>네이버 지도 바로가기</span>
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalTrustSection;
