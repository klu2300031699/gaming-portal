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

  // Demo credentials
  const DEMO_USER = 'Gnanesh'
  const DEMO_PASS = 'Gnanesh@1561'

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    if (
      loginData.username === DEMO_USER &&
      loginData.password === DEMO_PASS
    ) {
      setIsLoggedIn(true)
      setLoginName(loginData.username)
      setView('dashboard')
      setLoginData({ username: '', password: '' })
    } else {
      alert('Invalid username or password!')
    }
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    // Registration logic (demo only)
    alert('Registration submitted!')
    setView('login')
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
          <Tournaments />
        )}
        {dashboardView === 'schedules' && (
          <h2 style={{ color: '#fff', textAlign: 'center', width: '100%' }}>Schedules section coming soon!</h2>
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
