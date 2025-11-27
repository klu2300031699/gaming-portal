import { useState } from 'react'
import './App.css'

import Login from './components/Login'
import Register from './components/Register'


import Navbar from './components/Navbar'
import Tournaments from './components/Tournaments'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'



function App() {
  const [view, setView] = useState('home')
  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: ''
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginName, setLoginName] = useState('')
  const [dashboardView, setDashboardView] = useState('dashboard')
  // Registered tournaments state
  const [registered, setRegistered] = useState([]);

  // Register handler
  const handleQuickRegister = (tournament, details) => {
    setRegistered(prev => [...prev, { ...tournament, ...details, registeredAt: new Date().toISOString() }]);
  };

  // Demo credentials
  const DEMO_USER = 'Gnanesh'
  const DEMO_PASS = 'Gnanesh@1561'

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3380/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      const text = await response.text();
      if (text === 'Login Successful') {
        setIsLoggedIn(true);
        setLoginName(loginData.username);
        setView('dashboard');
        setLoginData({ username: '', password: '' });
      } else {
        alert(text);
      }
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Map mobile to mobileNumber for backend
    const payload = {
      username: registerData.username,
      email: registerData.email,
      password: registerData.password,
      confirmPassword: registerData.confirmPassword,
      mobileNumber: registerData.mobile
    };
    try {
      const response = await fetch('http://localhost:3380/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const text = await response.text();
      alert(text);
      if (text === 'Account Created Successfully!') {
        setView('login');
      }
    } catch (err) {
      alert('Registration failed: ' + err.message);
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoginName('')
    setView('home')
  }

  const handleNav = (nav) => {
    setDashboardView(nav)
  }

  if (!isLoggedIn) {
    if (view === 'login') {
      return <>
        <Login
          loginData={loginData}
          setLoginData={setLoginData}
          handleLoginSubmit={handleLoginSubmit}
          setView={setView}
        />
        <Footer />
      </>;
    }
    if (view === 'register') {
      return <>
        <Register
          registerData={registerData}
          setRegisterData={setRegisterData}
          handleRegisterSubmit={handleRegisterSubmit}
          setView={setView}
        />
        <Footer />
      </>;
    }
    // Home page
    return <>
      <div className="home-page">
        <div className="hero-section">
          <div className="overlay">
            <h1>Welcome to Gaming Tournament Portal</h1>
            <p>Join the ultimate gaming competitions. Register for tournaments, track your progress, and compete with players worldwide.</p>
            <div className="buttons">
              <button className="btn login-btn" onClick={() => setView('login')}>Login</button>
              <button className="btn register-btn" onClick={() => setView('register')}>Register</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>;
  }

  // Dashboard view after login
  return <>
    <div>
      <Navbar username={loginName} onLogout={handleLogout} onNavigate={setDashboardView} />
      <div style={{ minHeight: '80vh', background: 'radial-gradient(ellipse at left, #0ff1b3 0%, #23243a 60%, #1a1a2e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
        {dashboardView === 'dashboard' && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 1200 }}>
            <div style={{ flex: 1, paddingLeft: '4vw', color: '#fff' }}>
              <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: 0, lineHeight: 1.1 }}>
                Find Your Game <br />
                <span style={{ color: '#0ff1b3', fontWeight: 900 }}>Tournament</span>
              </h1>
              <p style={{ margin: '2rem 0 2.5rem 0', fontSize: '1.15rem', color: '#e0e0e0', maxWidth: 500 }}>
                Welcome, {loginName}! Join, create, and track gaming tournaments. Compete, view schedules, and connect with the gaming community.
              </p>
              <button style={{
                padding: '0.8rem 2.2rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                border: '2px solid #0ff1b3',
                background: 'transparent',
                color: '#0ff1b3',
                borderRadius: '8px',
                cursor: 'pointer',
                letterSpacing: '1px',
                transition: 'background 0.2s, color 0.2s',
                marginTop: '0.5rem'
              }}
                onClick={() => setDashboardView('tournaments')}
              >
                Explore Tournaments
              </button>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
              <img src="/home.jpg" alt="Gaming Hero" style={{ maxWidth: '90%', maxHeight: 420, borderRadius: 24, boxShadow: '0 8px 32px #0008' }} />
            </div>
          </div>
        )}
        {dashboardView === 'tournaments' && (
          <Tournaments onQuickRegister={handleQuickRegister} onNavigateToSchedules={() => setDashboardView('schedules')} />
        )}
        {dashboardView === 'schedules' && (
          <div style={{ color: '#fff', width: '100%', maxWidth: 900, margin: '0 auto', padding: 32 }}>
            <h2 style={{ color: '#0ff1b3', textAlign: 'center', marginBottom: 32, fontSize: 32, fontWeight: 900 }}>Your Registered Tournaments</h2>
            {registered.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '64px 16px', background: 'rgba(30,34,50,0.7)', borderRadius: 24, border: '2px dashed #0ff1b344', minHeight: 320 }}>
                <div style={{ fontSize: 72 }}>🎮</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: '#0ff1b3', textAlign: 'center' }}>No Tournaments Registered Yet</div>
                <div style={{ fontSize: 16, color: '#b2bfff', textAlign: 'center', maxWidth: 480 }}>Ready to join the action? Browse tournaments and use Quick Register to secure your spot in upcoming events!</div>
                <button onClick={() => setDashboardView('tournaments')} style={{ padding: '12px 32px', fontSize: 16, fontWeight: 700, border: '2px solid #0ff1b3', background: 'linear-gradient(90deg, #0ff1b3 0%, #646cff 100%)', color: '#fff', borderRadius: 10, cursor: 'pointer', marginTop: 16, boxShadow: '0 4px 16px #0ff1b344' }}>Browse Tournaments</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {registered.map((reg, i) => (
                  <div key={i} style={{ background: 'rgba(30,34,50,0.92)', borderRadius: 18, boxShadow: '0 4px 16px #0ff1b344', padding: 28, display: 'flex', alignItems: 'center', gap: 28, border: '1.5px solid #0ff1b333', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px #0ff1b366'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px #0ff1b344'; }}>
                    <img src={reg.image || '/home.jpg'} alt={reg.title} style={{ width: 96, height: 96, borderRadius: 14, objectFit: 'cover', boxShadow: '0 4px 12px #0ff1b366', border: '2px solid #0ff1b3' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                        <div style={{ fontSize: 24, fontWeight: 900, color: '#0ff1b3' }}>{reg.title}</div>
                        <div style={{ padding: '4px 12px', background: 'linear-gradient(90deg, #646cff 0%, #ee0979 100%)', borderRadius: 8, fontSize: 12, fontWeight: 700 }}>REGISTERED</div>
                      </div>
                      <div style={{ color: '#b2bfff', fontSize: 16, marginBottom: 12 }}>{reg.subtitle}</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}>
                        <div style={{ color: '#e0e0e0', fontSize: 14 }}>👤 <b style={{ color: '#fff' }}>{reg.gamerName}</b></div>
                        <div style={{ color: '#e0e0e0', fontSize: 14 }}>📧 {reg.email}</div>
                        <div style={{ color: '#e0e0e0', fontSize: 14 }}>📱 {reg.contact}</div>
                        <div style={{ color: '#e0e0e0', fontSize: 14 }}>🎮 IGN: <b style={{ color: '#fff' }}>{reg.ign}</b></div>
                        <div style={{ color: '#e0e0e0', fontSize: 14 }}>💻 {reg.platform}</div>
                        <div style={{ color: '#e0e0e0', fontSize: 14 }}>🕒 {reg.schedule}</div>
                        {reg.teamName && <div style={{ color: '#e0e0e0', fontSize: 14, gridColumn: 'span 2' }}>👥 Team: <b style={{ color: '#fff' }}>{reg.teamName}</b></div>}
                      </div>
                      <div style={{ color: '#646cff', fontSize: 13, marginTop: 12, fontWeight: 600 }}>✅ Registered on: {new Date(reg.registeredAt).toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {dashboardView === 'aboutus' && (
          <div style={{ width: '100%' }}>
            <AboutUs />
          </div>
        )}
      </div>
    </div>
    <Footer />
  </>;
}

export default App
