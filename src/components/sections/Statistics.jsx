import { motion } from 'framer-motion';
import Counter from '../Counter';
import { useLanguage } from '../../context/LanguageContext';
import './Statistics.css';

const stats = [
  { number: 500, suffix: '+', label: 'Hospitals' },
  { number: 10000, suffix: '+', label: 'Medicines' },
  { number: 250000, suffix: '+', label: 'Citizens' },
  { number: 95, suffix: '%', label: 'Prediction Accuracy' },
];

export default function Statistics() {
  const { t } = useLanguage();

  return (
    <section className="statistics">
      <div className="section-header">
        <h2>{t.statistics.heading}</h2>
        <p>{t.statistics.subheading}</p>
      </div>

      <motion.div
        className="stats-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.statistics.stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
          >
            <div className="stat-number">
              <Counter
                end={stat.number}
                suffix={stat.suffix}
              />
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
