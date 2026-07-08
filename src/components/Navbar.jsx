import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY > 50);
  });

  const languageOptions = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हिं' },
   
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🏥</span>
          <span>SEHAT AI</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            {t.nav.home}
          </Link>
          <Link to="/#features" className="nav-link" onClick={() => setIsOpen(false)}>
            {t.nav.features}
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            {t.nav.about}
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
            {t.nav.contact}
          </Link>
        </div>

        <div className="navbar-controls">
          <div className="language-switcher" aria-label={t.nav.language}>
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                className={`lang-btn ${language === option.code ? 'active' : ''}`}
                onClick={() => setLanguage(option.code)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="theme-toggle"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          <Link to="/login" className="btn-login">
            {t.nav.login}
          </Link>

          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
