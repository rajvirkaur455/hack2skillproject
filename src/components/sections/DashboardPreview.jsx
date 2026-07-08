import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../../context/LanguageContext';
import './DashboardPreview.css';

const medicineData = [
  { name: 'Paracetamol', value: 800 },
  { name: 'Antibiotic', value: 1200 },
  { name: 'Insulin', value: 600 },
  { name: 'Vitamin D', value: 900 },
];

const bedData = [
  { name: 'ICU', beds: 30, occupied: 28 },
  { name: 'General', beds: 100, occupied: 85 },
  { name: 'Pediatric', beds: 40, occupied: 32 },
  { name: 'Maternity', beds: 20, occupied: 18 },
];

const chartColors = ['#0B5ED7', '#0A9396', '#10B981', '#F59E0B'];

export default function DashboardPreview() {
  const { t } = useLanguage();

  return (
    <section className="dashboard-preview">
      <div className="section-header">
        <h2>{t.dashboardPreview.heading}</h2>
        <p>{t.dashboardPreview.subheading}</p>
      </div>

      <motion.div
        className="dashboard-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Medicine Stock Chart */}
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>{t.dashboardPreview.medicineTitle}</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={medicineData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {medicineData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bed Availability Chart */}
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>{t.dashboardPreview.bedTitle}</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={bedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="beds" fill="#0B5ED7" />
              <Bar dataKey="occupied" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Doctor Attendance */}
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>{t.dashboardPreview.attendanceTitle}</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={bedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="occupied" stroke="#0A9396" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Complaint Status */}
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>{t.dashboardPreview.complaintTitle}</h3>
          <div className="status-list">
            <div className="status-item">
              <span className="status-label">{t.dashboardPreview.open}</span>
              <span className="status-value" style={{ color: '#F59E0B' }}>145</span>
            </div>
            <div className="status-item">
              <span className="status-label">{t.dashboardPreview.inProgress}</span>
              <span className="status-value" style={{ color: '#38BDF8' }}>89</span>
            </div>
            <div className="status-item">
              <span className="status-label">{t.dashboardPreview.resolved}</span>
              <span className="status-value" style={{ color: '#10B981' }}>432</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
