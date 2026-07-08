'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Pages.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-dark)' }}>{t.about.title}</h1>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{t.about.missionTitle}</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
            {t.about.missionText}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{t.about.visionTitle}</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
            {t.about.visionText}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{t.about.problemTitle}</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
            {t.about.problemText}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{t.about.solutionTitle}</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
            {t.about.solutionText}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{t.about.stackTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
            {t.about.stackItems.map((tech, idx) => (
              <motion.div
                key={idx}
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  color: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: '600'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + idx * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
