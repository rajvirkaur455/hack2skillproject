"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "../Auth.css";

export default function AdminLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    secretKey: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userRole", "admin");
    router.push("/analytics");
  };

  return (
    <div className="auth-container">
      <motion.div
        className="auth-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="admin"
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

          <div className="form-group">
            <label>Secret Key</label>
            <input
              type="password"
              name="secretKey"
              value={formData.secretKey}
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
