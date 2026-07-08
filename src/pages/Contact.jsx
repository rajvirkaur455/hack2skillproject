import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Pages.css';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-dark)' }}>{t.contact.title}</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <motion.div
            style={{
              background: 'linear-gradient(135deg, rgba(11, 94, 215, 0.1) 0%, rgba(10, 147, 150, 0.1) 100%)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <FiMail size={32} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
            <h3>{t.contact.cards[0].title}</h3>
            <p style={{ color: 'var(--text-light)' }}>{t.contact.cards[0].value}</p>
          </motion.div>

          <motion.div
            style={{
              background: 'linear-gradient(135deg, rgba(11, 94, 215, 0.1) 0%, rgba(10, 147, 150, 0.1) 100%)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FiPhone size={32} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
            <h3>{t.contact.cards[1].title}</h3>
            <p style={{ color: 'var(--text-light)' }}>{t.contact.cards[1].value}</p>
          </motion.div>

          <motion.div
            style={{
              background: 'linear-gradient(135deg, rgba(11, 94, 215, 0.1) 0%, rgba(10, 147, 150, 0.1) 100%)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FiMapPin size={32} style={{ color: '#10B981', marginBottom: '1rem' }} />
            <h3>{t.contact.cards[2].title}</h3>
            <p style={{ color: 'var(--text-light)' }}>{t.contact.cards[2].value}</p>
          </motion.div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="auth-form"
          style={{ maxWidth: '600px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>{t.contact.formTitle}</h2>

          <div className="form-group">
            <label>{t.contact.nameLabel}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.namePlaceholder}
              required
            />
          </div>

          <div className="form-group">
            <label>{t.contact.emailLabel}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.emailPlaceholder}
              required
            />
          </div>

          <div className="form-group">
            <label>{t.contact.messageLabel}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.messagePlaceholder}
              rows={5}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                resize: 'vertical'
              }}
              required
            ></textarea>
          </div>

          <button type="submit" className="form-submit-btn">
            {t.contact.submit}
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
}
