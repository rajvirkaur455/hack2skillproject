import { motion } from 'framer-motion';
import { FiBarChart2, FiUsers, FiActivity, FiAlertCircle } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../Dashboards.css';

const medicineData = [
  { time: '12 AM', stock: 800 },
  { time: '4 AM', stock: 850 },
  { time: '8 AM', stock: 900 },
  { time: '12 PM', stock: 1100 },
  { time: '4 PM', stock: 950 },
];

export default function HospitalDashboard() {
  return (
    <div className="dashboard-container">
      <motion.aside
        className="sidebar"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ul className="sidebar-menu">
          <li><a href="#overview" className="active">📊 Overview</a></li>
          <li><a href="#medicine">💊 Medicine Stock</a></li>
          <li><a href="#beds">🛏️ Beds</a></li>
          <li><a href="#doctors">👨‍⚕️ Doctors</a></li>
          <li><a href="#patients">🤕 Patients</a></li>
          <li><a href="#alerts">⚠️ Alerts</a></li>
        </ul>
      </motion.aside>

      <motion.main
        className="dashboard-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="dashboard-title">
          <span>🏥</span>
          <span>Hospital Dashboard</span>
        </div>

        {/* Key Metrics */}
        <div className="cards-grid">
          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div style={{ fontSize: '2rem' }}>💊</div>
            <div className="card-value">2,450</div>
            <div className="card-label">Medicines in Stock</div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ fontSize: '2rem' }}>🛏️</div>
            <div className="card-value">87</div>
            <div className="card-label">Beds Occupied</div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div style={{ fontSize: '2rem' }}>👨‍⚕️</div>
            <div className="card-value">125</div>
            <div className="card-label">Doctors Present</div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div style={{ fontSize: '2rem' }}>📊</div>
            <div className="card-value">341</div>
            <div className="card-label">Patients Today</div>
          </motion.div>
        </div>

        {/* Chart */}
        <motion.div
          className="table-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
            <h3>Medicine Stock Trend</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={medicineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="stock" stroke="#0B5ED7" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Alerts */}
        <motion.div
          className="table-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <table>
            <thead>
              <tr>
                <th>Alert</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Low Medicine Stock - Paracetamol</td>
                <td><span style={{ color: '#F59E0B' }}>High</span></td>
                <td>Active</td>
                <td>2 hours ago</td>
              </tr>
              <tr>
                <td>Bed Shortage in ICU</td>
                <td><span style={{ color: '#EF4444' }}>Critical</span></td>
                <td>Active</td>
                <td>1 hour ago</td>
              </tr>
              <tr>
                <td>Doctor Attendance Below 80%</td>
                <td><span style={{ color: '#F59E0B' }}>High</span></td>
                <td>Resolved</td>
                <td>30 minutes ago</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </motion.main>
    </div>
  );
}
