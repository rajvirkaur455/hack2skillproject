import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../Dashboards.css';

const complaintData = [
  { name: 'Open', value: 145 },
  { name: 'In Progress', value: 89 },
  { name: 'Resolved', value: 432 },
];

const hospitalData = [
  { name: 'Hospital A', beds: 100, occupied: 85 },
  { name: 'Hospital B', beds: 150, occupied: 120 },
  { name: 'Hospital C', beds: 80, occupied: 60 },
];

const colors = ['#F59E0B', '#38BDF8', '#10B981'];

export default function AuthorityDashboard() {
  return (
    <div className="dashboard-container">
      <motion.aside
        className="sidebar"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ul className="sidebar-menu">
          <li><a href="#overview" className="active">📊 Overview</a></li>
          <li><a href="#complaints">📋 Complaints</a></li>
          <li><a href="#hospitals">🏥 Hospitals</a></li>
          <li><a href="#analytics">📈 Analytics</a></li>
          <li><a href="#reports">📄 Reports</a></li>
        </ul>
      </motion.aside>

      <motion.main
        className="dashboard-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="dashboard-title">
          <span>👨‍💼</span>
          <span>Authority Dashboard</span>
        </div>

        {/* Key Metrics */}
        <div className="cards-grid">
          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div style={{ fontSize: '2rem' }}>🏥</div>
            <div className="card-value">24</div>
            <div className="card-label">Hospitals</div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ fontSize: '2rem' }}>💊</div>
            <div className="card-value">45K</div>
            <div className="card-label">Total Medicines</div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div style={{ fontSize: '2rem' }}>📋</div>
            <div className="card-value">666</div>
            <div className="card-label">Total Complaints</div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div style={{ fontSize: '2rem' }}>✅</div>
            <div className="card-value">95%</div>
            <div className="card-label">Resolution Rate</div>
          </motion.div>
        </div>

        {/* Charts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <motion.div
            className="table-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
              <h3>Complaint Status</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={complaintData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {complaintData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            className="table-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
              <h3>Hospital Bed Status</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={hospitalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="beds" fill="#0B5ED7" />
                <Bar dataKey="occupied" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
