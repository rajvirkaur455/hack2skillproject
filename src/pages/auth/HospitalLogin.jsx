import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../Auth.css';

export default function HospitalLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospitalId: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userRole', 'hospital');
    navigate('/dashboard/hospital');
  };

  return (
    <div className="auth-container">
      <motion.div
        className="auth-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Hospital Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Hospital ID</label>
            <input
              type="text"
              name="hospitalId"
              value={formData.hospitalId}
              onChange={handleChange}
              placeholder="HOSP-001"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@hospital.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="form-submit-btn">
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}
