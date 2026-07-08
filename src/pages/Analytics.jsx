import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Pages.css';

const data = [
  { month: 'Jan', complaints: 120, resolved: 110, pending: 10 },
  { month: 'Feb', complaints: 150, resolved: 145, pending: 5 },
  { month: 'Mar', complaints: 180, resolved: 170, pending: 10 },
  { month: 'Apr', complaints: 160, resolved: 155, pending: 5 },
];

const typeData = [
  { name: 'Medicine', value: 400 },
  { name: 'Bed', value: 300 },
  { name: 'Staff', value: 200 },
  { name: 'Service', value: 100 },
];

const colors = ['#0B5ED7', '#0A9396', '#10B981', '#F59E0B'];

export default function Analytics() {
  return (
    <div className="page-container" style={{ padding: '2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 style={{ marginBottom: '2rem', color: 'var(--text-dark)' }}>Analytics Dashboard</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <motion.div
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h3>Total Complaints</h3>
            <p style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: '800', marginTop: '0.5rem' }}>666</p>
          </motion.div>

          <motion.div
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3>Resolved</h3>
            <p style={{ fontSize: '2.5rem', color: '#10B981', fontWeight: '800', marginTop: '0.5rem' }}>632</p>
          </motion.div>

          <motion.div
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3>Pending</h3>
            <p style={{ fontSize: '2.5rem', color: '#F59E0B', fontWeight: '800', marginTop: '0.5rem' }}>34</p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <motion.div
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 style={{ marginBottom: '1rem' }}>Complaints Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="complaints" fill="#0B5ED7" stroke="#0B5ED7" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 style={{ marginBottom: '1rem' }}>Complaint Types</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={typeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {typeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
