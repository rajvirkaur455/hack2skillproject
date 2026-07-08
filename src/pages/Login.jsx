import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Auth.css';

const loginOptions = [
  {
    title: 'Citizen',
    icon: '👤',
    description: 'Submit and track complaints',
    link: '/auth/citizen',
    color: '#0B5ED7',
  },
  {
    title: 'Hospital',
    icon: '🏥',
    description: 'Manage hospital operations',
    link: '/auth/hospital',
    color: '#0A9396',
  },
  {
    title: 'Pharmacy',
    icon: '💊',
    description: 'Manage medicine inventory',
    link: '/auth/pharmacy',
    color: '#10B981',
  },
  {
    title: 'District Authority',
    icon: '📍',
    description: 'District-level oversight',
    link: '/auth/district',
    color: '#F59E0B',
  },
  {
    title: 'State Authority',
    icon: '🏛️',
    description: 'State-level analytics',
    link: '/auth/state',
    color: '#EF4444',
  },
  {
    title: 'Admin',
    icon: '⚙️',
    description: 'Platform administration',
    link: '/auth/admin',
    color: '#38BDF8',
  },
];

export default function Login() {
  const { t } = useLanguage();
  const options = t.login.options;

  return (
    <div className="auth-container">
      <motion.div
        className="auth-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>{t.login.heading}</h1>
        <p>{t.login.subheading}</p>
      </motion.div>

      <motion.div
        className="login-options-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        {options.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              to={option.link}
              className="login-option-card"
              style={{ borderColor: option.color }}
            >
              <div className="option-icon" style={{ color: option.color }}>
                {option.icon}
              </div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <div className="option-arrow" style={{ color: option.color }}>→</div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="auth-footer-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p><Link to="#signup">{t.login.footerText}</Link></p>
      </motion.div>
    </div>
  );
}
