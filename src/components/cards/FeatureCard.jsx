import { motion } from 'framer-motion';
import './FeatureCard.css';

export default function FeatureCard({ title, icon, index }) {
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(11, 94, 215, 0.2)' }}
      viewport={{ once: true }}
    >
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>Advanced {title.toLowerCase()} capabilities powered by AI</p>
    </motion.div>
  );
}
