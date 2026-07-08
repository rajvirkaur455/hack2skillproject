import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './ModuleCard.css';

export default function ModuleCard({ title, description, icon, color, index }) {
  return (
    <motion.div
      className="module-card"
      style={{ borderTop: `4px solid ${color}` }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
      viewport={{ once: true }}
    >
      <div className="module-icon" style={{ color }}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <motion.button
        className="module-link"
        whileHover={{ x: 5 }}
        style={{ color }}
      >
        Learn More <FiArrowRight />
      </motion.button>
    </motion.div>
  );
}
