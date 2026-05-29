import { useEffect, useMemo, useState } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CaregiversPage from './pages/CaregiversPage';
import BookingPage from './pages/BookingPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

const styles = {
  page: { minHeight: '100vh', color: '#0f172a' },
  container: { maxWidth: 1200, margin: '0 auto', padding: '24px 18px 60px' },
  nav: { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, alignItems: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #0f766e 100%)', color: '#fff', borderRadius: 22, padding: '14px 16px', boxShadow: '0 18px 40px rgba(15,23,42,0.18)' },
  brand: { fontSize: 24, fontWeight: 800, letterSpacing: 0.5 },
  badge: { display: 'inline-block', background: '#bbf7d0', color: '#14532d', padding: '6px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 },
  navLinks: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  navLink: { textDecoration: 'none', color: '#e2e8f0', padding: '8px 10px', borderRadius: 999, fontWeight: 700, background: 'rgba(255,255,255,0.06)' },
  activeNavLink: { background: 'linear-gradient(135deg, #2563eb, #0ea5a4)', color: '#fff' },
  loginButton: { textDecoration: 'none', color: '#052e16', padding: '8px 12px', borderRadius: 999, fontWeight: 800, background: '#bbf7d0', boxShadow: '0 8px 18px rgba(187,247,208,0.25)' },
  small: { color: '#475569', fontSize: 12 },
  footer: { textAlign: 'center', color: '#475569', marginTop: 24, fontSize: 13 }
};

export default function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const [users, setUsers] = useState([]);
  const [patients, setPatients] = useState([]);
  const [services, setServices] = useState([]);
  const [caregivers, setCaregivers] = useState([]);
  const [analytics, setAnalytics] = useState({});
  const [bookings, setBookings] = useState([]);
  const [careNotes, setCareNotes] = useState([]);
  const [form, setForm] = useState({ patientName: '', service: 'Nursing Care', caregiver: 'Anita Sharma', city: 'Bangalore', date: '' });
  const [submitted, setSubmitted] = useState('');

  useEffect(() => {
    fetch('/api/users').then(r => r.json()).then(setUsers);
    fetch('/api/patients').then(r => r.json()).then(setPatients);
    fetch('/api/services').then(r => r.json()).then(setServices);
    fetch('/api/caregivers').then(r => r.json()).then(setCaregivers);
    fetch('/api/analytics').then(r => r.json()).then(setAnalytics);
    fetch('/api/bookings').then(r => r.json()).then(setBookings);
    fetch('/api/care-notes').then(r => r.json()).then(setCareNotes);
  }, []);

  const bookingCount = useMemo(() => bookings.length, [bookings]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, status: 'Requested' })
    });
    const data = await res.json();
    setBookings(prev => [...prev, data.booking]);
    setSubmitted(`Booking request submitted for ${form.patientName || 'your family member'}.`);
  };

  const handleStatusChange = async (id, status) => {
    const res = await fetch(`/api/bookings/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    const data = await res.json();
    if (res.ok) setBookings(prev => prev.map(item => item.id === id ? { ...item, status: data.booking.status } : item));
  };

  return (
    <div style={styles.page}>
      <div style={{ ...styles.container, maxWidth: isLoginPage ? 'none' : 1200, padding: isLoginPage ? 0 : '24px 18px 60px' }}>
        {!isLoginPage && (
          <nav style={styles.nav}>
            <div>
              <div style={styles.brand}>ElderlyCare Portal</div>
              <div style={styles.small}>Verified home nursing, attendants, and physiotherapy support.</div>
            </div>
            <div style={styles.navLinks}>
              <NavLink to="/" end style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeNavLink : {}) })}>Home</NavLink>
              <NavLink to="/features" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeNavLink : {}) })}>Features</NavLink>
              <NavLink to="/about" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeNavLink : {}) })}>About</NavLink>
              <NavLink to="/services" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeNavLink : {}) })}>Services</NavLink>
              <NavLink to="/caregivers" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeNavLink : {}) })}>Caregivers</NavLink>
              <NavLink to="/booking" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeNavLink : {}) })}>Book</NavLink>
              <NavLink to="/dashboard" style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeNavLink : {}) })}>Dashboard</NavLink>
              <NavLink to="/login" style={({ isActive }) => ({ ...styles.loginButton, ...(isActive ? { background: '#86efac' } : {}) })}>Login</NavLink>
            </div>
            <span style={styles.badge}>{bookingCount} requests</span>
          </nav>
        )}

        <Routes>
          <Route path="/" element={<HomePage analytics={analytics} bookings={bookings} users={users} patients={patients} careNotes={careNotes} />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage services={services} />} />
          <Route path="/caregivers" element={<CaregiversPage caregivers={caregivers} />} />
          <Route path="/booking" element={<BookingPage services={services} caregivers={caregivers} form={form} setForm={setForm} handleSubmit={handleSubmit} submitted={submitted} />} />
          <Route path="/dashboard" element={<DashboardPage analytics={analytics} bookings={bookings} users={users} patients={patients} careNotes={careNotes} onStatusChange={handleStatusChange} />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {!isLoginPage && <p style={styles.footer}>Built as a deployment-ready starter for the Elderly Nursing & Healthcare Assistance Platform.</p>}
      </div>
    </div>
  );
}
