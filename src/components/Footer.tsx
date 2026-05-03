import { motion } from 'framer-motion';
import { Mail, Globe, MessageSquare } from 'lucide-react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-6">하나주택종합관리</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-12">
              용산의 가치를 지키고 건물의 품격을 완성하는 <br />
              정직한 관리 파트너가 되겠습니다.
            </p>
            
            <div className="flex space-x-4">
               {[Globe, Mail, MessageSquare].map((Icon, i) => (
                 <a 
                   key={i}
                   href="#" 
                   className="w-10 h-10 rounded-lg border border-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                 >
                   <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-wider">메뉴</p>
              <ul className="space-y-4">
                {[
                  { label: '홈', href: '/' },
                  { label: '회사소개', href: '/company' },
                  { label: '서비스안내', href: '/services' },
                  { label: '관리실적', href: '/portfolio' },
                  { label: '상담문의', href: '/inquiry' }
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-2">
              <p className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-wider">기업 정보</p>
              <div className="space-y-6">
                 <div>
                    <p className="text-xs text-slate-500 mb-1">상호명 / 대표</p>
                    <p className="text-sm font-semibold">하나주택종합관리 | 박창섭</p>
                 </div>
                 <div>
                    <p className="text-xs text-slate-500 mb-1">사업자등록번호</p>
                    <p className="text-sm font-semibold">106-11-16539</p>
                 </div>
                 <div>
                    <p className="text-xs text-slate-500 mb-1">소재지</p>
                    <p className="text-sm font-semibold leading-relaxed">서울특별시 용산구 한강대로38가길 17</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} 하나주택종합관리. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">개인정보처리방침</a>
            <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
