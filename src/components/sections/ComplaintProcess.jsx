import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './ComplaintProcess.css';

const steps = [
  { title: 'Voice Complaint', icon: '🗣️' },
  { title: 'Speech to Text', icon: '📝' },
  { title: 'Upload photo', icon: '📸' },
  { title: 'Notifications', icon: '🔔' },
  { title: 'Authority Action', icon: '👨‍💼' },
  { title: 'Complaint Resolved', icon: '✅' },
];

export default function ComplaintProcess() {
  const { t } = useLanguage();

  return (
    <section className="complaint-process">
      <div className="section-header">
        <h2>{t.complaintProcess.heading}</h2>
        <p>{t.complaintProcess.subheading}</p>
      </div>

      <div className="process-container">
        <div className="steps-wrapper">
          {t.complaintProcess.steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="step-circle"
                whileHover={{ scale: 1.1 }}
              >
                {step.icon}
              </motion.div>
              <h3>{step.title}</h3>

              {index < steps.length - 1 && (
                <motion.div
                  className="step-arrow"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
