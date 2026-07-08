import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Government Hospital Director',
    quote: 'This platform has transformed how we manage hospital operations. The AI forecasting has reduced medicine wastage by 40%.',
    avatar: '👨‍⚕️',
  },
  {
    name: 'Priya Sharma',
    role: 'District Health Officer',
    quote: 'The multilingual complaint portal has increased citizen satisfaction significantly. Response times have improved dramatically.',
    avatar: '👩‍💼',
  },
  {
    name: 'Arjun Singh',
    role: 'Pharmacy Manager',
    quote: 'Stock management is now seamless. Real-time alerts prevent shortages and the AI recommendations are incredibly accurate.',
    avatar: '🧑‍💼',
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="testimonials">
      <div className="section-header">
        <h2>{t.testimonials.heading}</h2>
        <p>{t.testimonials.subheading}</p>
      </div>

      <motion.div
        className="testimonials-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.testimonials.items.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
          >
            <div className="testimonial-quote">"{testimonial.quote}"</div>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.avatar}</div>
              <div className="author-info">
                <div className="author-name">{testimonial.name}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
