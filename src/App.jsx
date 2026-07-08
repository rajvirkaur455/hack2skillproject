import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { LanguageProvider } from './context/LanguageContext';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import CitizenLogin from './pages/auth/CitizenLogin';
import HospitalLogin from './pages/auth/HospitalLogin';
import PharmacyLogin from './pages/auth/PharmacyLogin';
import DistrictLogin from './pages/auth/DistrictLogin';
import StateLogin from './pages/auth/StateLogin';
import AdminLogin from './pages/auth/AdminLogin';
import HospitalDashboard from './pages/dashboards/HospitalDashboard';
import PharmacyDashboard from './pages/dashboards/PharmacyDashboard';
import AuthorityDashboard from './pages/dashboards/AuthorityDashboard';
import CitizenComplaint from './pages/CitizenComplaint';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  const showBackButton = location.pathname !== '/';

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="main-content">
        {showBackButton && (
          <button type="button" className="back-button" onClick={handleBack}>
            ← Back
          </button>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/citizen" element={<CitizenLogin />} />
          <Route path="/auth/hospital" element={<HospitalLogin />} />
          <Route path="/auth/pharmacy" element={<PharmacyLogin />} />
          <Route path="/auth/district" element={<DistrictLogin />} />
          <Route path="/auth/state" element={<StateLogin />} />
          <Route path="/auth/admin" element={<AdminLogin />} />
          <Route path="/dashboard/hospital" element={<HospitalDashboard />} />
          <Route path="/dashboard/pharmacy" element={<PharmacyDashboard />} />
          <Route path="/dashboard/authority" element={<AuthorityDashboard />} />
          <Route path="/complaint" element={<CitizenComplaint />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}

export default App;
