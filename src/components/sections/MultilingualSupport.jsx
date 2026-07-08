import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './MultilingualSupport.css';

const languages = [
  { name: 'English', flag: '🇬🇧', code: 'EN' },
  { name: 'Hindi', flag: '🇮🇳', code: 'HI' },
  { name: 'Punjabi', flag: '🇮🇳', code: 'PA' },
  { name: 'Tamil', flag: '🇮🇳', code: 'TA' },
  { name: 'Telugu', flag: '🇮🇳', code: 'TE' },
  { name: 'Bengali', flag: '🇮🇳', code: 'BN' },
  { name: 'Gujarati', flag: '🇮🇳', code: 'GU' },
  { name: 'Marathi', flag: '🇮🇳', code: 'MR' },
  { name: 'Kannada', flag: '🇮🇳', code: 'KN' },
  { name: 'Malayalam', flag: '🇮🇳', code: 'ML' },
];

export default function MultilingualSupport() {
  const { t } = useLanguage();

  return (
    <section className="multilingual">
      <div className="section-header">
        <h2>{t.multilingualSupport.heading}</h2>
        <p>{t.multilingualSupport.subheading}</p>
      </div>

      <motion.div
        className="microphone-animation"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🎤
      </motion.div>

      <motion.div
        className="languages-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.multilingualSupport.languages.map((lang, index) => (
          <motion.div
            key={index}
            className="language-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
          >
            <div className="language-flag">{lang.flag}</div>
            <div className="language-name">{lang.name}</div>
            <div className="language-code">{lang.code}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
