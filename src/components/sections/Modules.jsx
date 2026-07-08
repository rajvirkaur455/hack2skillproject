import { motion } from 'framer-motion';
import ModuleCard from '../cards/ModuleCard';
import { useLanguage } from '../../context/LanguageContext';
import './Modules.css';

const modules = [
  {
    title: 'Hospital Dashboard',
    description: 'Real-time hospital operations and inventory management',
    icon: '🏥',
    color: '#0B5ED7',
  },
  {
    title: 'Medicine Inventory',
    description: 'Track and manage medicine stock across facilities',
    icon: '💊',
    color: '#0A9396',
  },
  {
    title: 'AI Forecasting Engine',
    description: 'Predictive analytics for demand planning',
    icon: '🤖',
    color: '#10B981',
  },
  {
    title: 'Complaint Management',
    description: 'Efficient multilingual complaint handling',
    icon: '📋',
    color: '#F59E0B',
  },
  {
    title: 'Authority Dashboard',
    description: 'District and state-level oversight and analytics',
    icon: '👨‍💼',
    color: '#EF4444',
  },
  {
    title: 'Analytics & Reports',
    description: 'Comprehensive insights and performance metrics',
    icon: '📈',
    color: '#38BDF8',
  },
];

export default function Modules() {
  const { t } = useLanguage();

  return (
    <section className="modules">
      <div className="section-header">
        <h2>{t.modules.heading}</h2>
        <p>{t.modules.subheading}</p>
      </div>

      <motion.div
        className="modules-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.modules.items.map((module, index) => (
          <ModuleCard
            key={index}
            title={module.title}
            description={module.description}
            icon={module.icon}
            color={module.color}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
}
