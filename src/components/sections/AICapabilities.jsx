import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './AICapabilities.css';

const capabilities = [
  { title: 'AI Forecasting', icon: '📊' },
  { title: 'Whisper Speech Recognition', icon: '🎤' },
  { title: 'OCR Image Processing', icon: '📸' },
  { title: 'Regional Language NLP', icon: '🗣️' },
  { title: 'Smart Alerts', icon: '🔔' },
  { title: 'Predictive Analytics', icon: '🤖' },
];

export default function AICapabilities() {
  const { t } = useLanguage();

  return (
    <section className="ai-capabilities">
      <div className="section-header">
        <h2>{t.aiCapabilities.heading}</h2>
        <p>{t.aiCapabilities.subheading}</p>
      </div>

      <div className="capabilities-timeline">
        {t.aiCapabilities.items.map((cap, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot">
              <motion.div
                className="dot-pulse"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="timeline-content">
              <div className="capability-icon">{cap.icon}</div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="ai-illustration"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        🧠
      </motion.div>
    </section>
  );
}
