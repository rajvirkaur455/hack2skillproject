import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const FloatingIcon = ({ icon, delay }) => (
  <motion.div
    className="floating-icon"
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity }}
  >
    {icon}
  </motion.div>
);

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>

      <div className="floating-icons-container">
        <FloatingIcon icon="💊" delay={0} />
        <FloatingIcon icon="🏥" delay={0.2} />
        <FloatingIcon icon="👨‍⚕️" delay={0.4} />
        <FloatingIcon icon="📊" delay={0.6} />
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">
          {t.hero.titleLine1}<br />
          <span className="highlight">{t.hero.titleLine2}</span>
        </h1>

        <p className="hero-subtitle">
          {t.hero.subtitle}
        </p>

        <div className="hero-buttons">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/login" className="btn-hero btn-primary">
              {t.hero.explore} <FiArrowRight />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="tel:18001234567" className="btn-hero btn-secondary">
              {t.hero.demo} <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="hero-illustration"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="ai-illustration">🤖</div>
      </motion.div>
    </section>
  );
}
