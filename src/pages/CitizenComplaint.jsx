import { useState } from 'react';
import { motion } from 'framer-motion';
import './Pages.css';

export default function CitizenComplaint() {
  const [formData, setFormData] = useState({
    complaintType: 'medicine',
    language: 'english',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Complaint submitted successfully!');
    setFormData({ complaintType: 'medicine', language: 'english', description: '', image: null });
  };

  return (
    <div className="page-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-dark)' }}>
          Submit Your Complaint
        </h1>

        <motion.form
          onSubmit={handleSubmit}
          className="auth-form"
          style={{ maxWidth: '100%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="form-group">
            <label>Complaint Type</label>
            <select
              name="complaintType"
              value={formData.complaintType}
              onChange={handleChange}
              required
            >
              <option value="medicine">Medicine Shortage</option>
              <option value="bed">Bed Unavailability</option>
              <option value="staff">Staff Issues</option>
              <option value="service">Service Quality</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Language</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="tamil">Tamil</option>
              <option value="telugu">Telugu</option>
              <option value="bengali">Bengali</option>
            </select>
          </div>

          <div className="form-group">
            <label>Complaint Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your complaint in detail..."
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

          <div className="form-group">
            <label>Upload Image (Optional)</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
              }}
            />
          </div>

          <button type="submit" className="form-submit-btn">
            Submit Complaint
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
}
