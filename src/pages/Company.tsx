import GreetingsSection from '../components/GreetingsSection';
import AboutSection from '../components/AboutSection';
import HistorySection from '../components/HistorySection';
import LocalTrustSection from '../components/LocalTrustSection';

const Company = () => {
  return (
    <div className="pt-20">
      <GreetingsSection />
      <AboutSection />
      <HistorySection />
      <LocalTrustSection />
    </div>
  );
};

export default Company;
