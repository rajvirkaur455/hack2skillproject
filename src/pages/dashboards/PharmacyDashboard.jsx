import { motion } from 'framer-motion';
import '../Dashboards.css';

export default function PharmacyDashboard() {
  const medicines = [
    { name: 'Paracetamol', stock: 850, minLevel: 500, expiry: '2025-06' },
    { name: 'Antibiotic', stock: 450, minLevel: 500, expiry: '2025-04' },
    { name: 'Insulin', stock: 200, minLevel: 300, expiry: '2024-12' },
    { name: 'Vitamin D', stock: 1200, minLevel: 800, expiry: '2026-01' },
  ];

  return (
    <div className="dashboard-container">
      <motion.aside
        className="sidebar"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ul className="sidebar-menu">
          <li><a href="#overview" className="active">📊 Overview</a></li>
          <li><a href="#inventory">📦 Inventory</a></li>
          <li><a href="#expiry">⚠️ Expiry</a></li>
          <li><a href="#alerts">🔔 Alerts</a></li>
          <li><a href="#requests">📝 Requests</a></li>
        </ul>
      </motion.aside>

      <motion.main
        className="dashboard-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="dashboard-title">
          <span>💊</span>
          <span>Pharmacy Dashboard</span>
        </div>

        {/* Key Metrics */}
        <div className="cards-grid">
          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div style={{ fontSize: '2rem' }}>📦</div>
            <div className="card-value">2,700</div>
            <div className="card-label">Total Items</div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ fontSize: '2rem' }}>⚠️</div>
            <div className="card-value">3</div>
            <div className="card-label">Low Stock Items</div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div style={{ fontSize: '2rem' }}>📅</div>
            <div className="card-value">1</div>
            <div className="card-label">Expiring Soon</div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div style={{ fontSize: '2rem' }}>📝</div>
            <div className="card-value">5</div>
            <div className="card-label">Pending Requests</div>
          </motion.div>
        </div>

        {/* Inventory Table */}
        <motion.div
          className="table-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <table>
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Current Stock</th>
                <th>Min Level</th>
                <th>Status</th>
                <th>Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((med, idx) => (
                <tr key={idx}>
                  <td>{med.name}</td>
                  <td>{med.stock}</td>
                  <td>{med.minLevel}</td>
                  <td>
                    <span style={{
                      color: med.stock < med.minLevel ? '#EF4444' : '#10B981'
                    }}>
                      {med.stock < med.minLevel ? '🔴 Low' : '🟢 OK'}
                    </span>
                  </td>
                  <td>{med.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.main>
    </div>
  );
}
