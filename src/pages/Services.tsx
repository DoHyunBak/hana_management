import ServicesSection from '../components/ServicesSection';
import ManagementScopeSection from '../components/ManagementScopeSection';
import ProcessSection from '../components/ProcessSection';
import CheckBeforeChoosingSection from '../components/CheckBeforeChoosingSection';

const Services = () => {
  return (
    <div className="pt-20">
      <ServicesSection />
      <ProcessSection />
      <ManagementScopeSection />
      <CheckBeforeChoosingSection />
    </div>
  );
};

export default Services;
