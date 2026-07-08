import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t.footer.brand}</h3>
          <p>{t.footer.subtitle}</p>
        </div>

        <div className="footer-section">
          <h4>{t.footer.quickLinks}</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t.footer.contact}</h4>
          <p><FiMail /> contact@healthgovai.com</p>
          <p><FiPhone /> +91 (0) 1234-567890</p>
        </div>

        <div className="footer-section">
          <h4>{t.footer.followUs}</h4>
          <div className="social-links">
            <a href="#github" title="GitHub"><FiGithub /></a>
            <a href="#linkedin" title="LinkedIn"><FiLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 {t.footer.brand}. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
