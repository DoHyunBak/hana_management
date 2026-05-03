import ServicesSection from '../components/ServicesSection';
import ManagementScopeSection from '../components/ManagementScopeSection';
import ProcessSection from '../components/ProcessSection';
import ChecklistSection from '../components/ChecklistSection';
import CheckBeforeChoosingSection from '../components/CheckBeforeChoosingSection';

const Services = () => {
  return (
    <div className="pt-20">
      <ServicesSection />
      <ManagementScopeSection />
      <ProcessSection />
      <ChecklistSection />
      <CheckBeforeChoosingSection />
    </div>
  );
};

export default Services;
