import GreetingsSection from '../components/GreetingsSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import TrustSection from '../components/TrustSection';
import HistorySection from '../components/HistorySection';
import LocalTrustSection from '../components/LocalTrustSection';

const Company = () => {
  return (
    <div className="pt-20">
      <GreetingsSection />
      <AboutSection />
      <StatsSection />
      <TrustSection />
      <HistorySection />
      <LocalTrustSection />
    </div>
  );
};

export default Company;
