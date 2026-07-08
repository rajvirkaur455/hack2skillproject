import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../Auth.css';

export default function StateLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ stateCode: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userRole', 'state');
    navigate('/dashboard/authority');
  };

  return (
    <div className="auth-container">
      <motion.div className="auth-form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2>State Authority Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>State Code</label>
            <input type="text" name="stateCode" value={formData.stateCode} onChange={handleChange} placeholder="STATE-01" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="official@state.gov" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required />
          </div>
          <button type="submit" className="form-submit-btn">Login</button>
        </form>
      </motion.div>
    </div>
  );
}
