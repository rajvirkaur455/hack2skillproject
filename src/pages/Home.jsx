'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Modules from '../components/sections/Modules';
import AICapabilities from '../components/sections/AICapabilities';
import ComplaintProcess from '../components/sections/ComplaintProcess';
import MultilingualSupport from '../components/sections/MultilingualSupport';
import DashboardPreview from '../components/sections/DashboardPreview';
import './Pages.css';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="home">
      <Hero />
      <Features />
      <Modules />
      <AICapabilities />
      <ComplaintProcess />
      <MultilingualSupport />
      <DashboardPreview />
   

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cta-content"
        >
          <h2>{t.home.ctaTitle}</h2>
          <p>{t.home.ctaText}</p>
          <div className="cta-buttons">
            <Link to="/login" className="btn btn-primary">
              {t.home.primary}
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              {t.home.secondary}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
