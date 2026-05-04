import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-24 bg-bg-warm overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-secondary font-serif font-bold mb-4 flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-accent"></span>
              <span className="uppercase tracking-widest">Location</span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-8">
              용산구의 중심에서 <br />현장을 발로 뜁니다
            </h3>
            
            <div className="space-y-8 mb-12">
              <p className="text-lg text-text-sub leading-relaxed break-keep">
                하나주택종합관리는 용산의 중심에서 <br />
                가장 신속하고 정확하게 당신의 자산을 관리합니다.
              </p>
              <div className="flex items-start space-x-4 bg-white p-8 rounded-sm shadow-sm border border-border-warm">
                <div className="p-3 bg-primary-dark text-white rounded-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark text-lg mb-1">본사 주소</h4>
                  <p className="text-text-sub text-sm leading-relaxed">
                    서울특별시 용산구 한강대로38가길 17 <br />
                    (한강로2가 151)
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://map.naver.com/p/entry/place/18735433"
              target="_blank"
              className="inline-flex items-center space-x-2 bg-primary-dark text-white px-8 py-3.5 rounded-sm font-bold shadow-lg hover:bg-primary-deep transition-all uppercase tracking-widest text-sm font-serif"
            >
              <Navigation size={18} className="text-accent" />
              <span>Map Navigation</span>
              <ExternalLink size={14} className="opacity-40" />
            </a>
          </div>

          <div className="lg:w-1/2 w-full h-[450px] relative rounded-sm overflow-hidden shadow-xl group border border-border-warm">
             <div className="absolute inset-0 bg-white flex items-center justify-center">
                <div className="relative text-center">
                   <div className="mb-4">
                     <MapPin size={64} className="text-accent mx-auto" />
                   </div>
                   <h5 className="text-xl font-bold text-primary-dark">하나주택종합관리</h5>
                   <p className="text-text-muted text-sm mt-2">정확한 현장 상담을 약속드립니다</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
