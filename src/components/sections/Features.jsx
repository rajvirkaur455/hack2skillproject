import { motion } from 'framer-motion';
import FeatureCard from '../cards/FeatureCard';
import { useLanguage } from '../../context/LanguageContext';
import './Features.css';

const features = [
  { title: 'Real-Time Medicine Stock Monitoring', icon: '📦' },
  { title: 'Bed Availability Tracking', icon: '🛏️' },
  { title: 'Doctor Attendance', icon: '👨‍⚕️' },
  { title: 'Patient Footfall Analytics', icon: '📊' },
  { title: 'AI Demand Forecasting', icon: '🤖' },
  { title: 'Smart Stock Alerts', icon: '🔔' },
  { title: 'Resource Redistribution', icon: '🔄' },
  { title: 'Multilingual Complaint Portal', icon: '🗣️' },
  { title: 'Authority Dashboard', icon: '👨‍💼' },
  { title: 'Analytics & Reports', icon: '📈' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="features" id="features">
      <div className="section-header">
        <h2>{t.features.heading}</h2>
        <p>{t.features.subheading}</p>
      </div>

      <motion.div
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {t.features.items.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            icon={feature.icon}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
}
