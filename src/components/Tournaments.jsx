
import './tournaments.css';
import { useState } from 'react';
import TournamentDetails from './TournamentDetails';

const tournaments = [
  {
    id: 1,
    title: 'Valorant Showdown',
    subtitle: '5v5 FPS Tournament',
    description: 'Compete in a high-stakes Valorant tournament. Show your skills, win prizes, and climb the leaderboard!',
    image: '/home.jpg',
    featured: true,
    entry: 'Free',
    details: [
      'Team size: 5',
      'Knockout rounds',
      'Live streaming',
      '+3 more features'
    ],
    color: '#00bcd4',
    btnColor: '#00bcd4',
  },
  {
    id: 2,
    title: 'FIFA Ultimate Cup',
    subtitle: 'Football Esports',
    description: 'Join the best FIFA players for a weekend of football action. Play, win, and become the champion!',
    image: '/home.jpg',
    featured: false,
    entry: '₹299',
    details: [
      'Solo entry',
      'Group stages',
      'Live commentary',
      '+2 more features'
    ],
    color: '#e91e63',
    btnColor: '#e91e63',
  },
  {
    id: 3,
    title: 'Chess Masters',
    subtitle: 'Online Chess Tournament',
    description: 'Battle top chess minds in a rapid-fire online tournament. Open to all skill levels. Prizes for top 3!',
    image: '/home.jpg',
    featured: true,
    entry: '₹99',
    details: [
      'Swiss format',
      'Rapid time control',
      'Live analysis',
      '+1 more feature'
    ],
    color: '#ff9800',
    btnColor: '#ff9800',
  },
  {
    id: 4,
    title: 'PUBG Mobile Mania',
    subtitle: 'Battle Royale',
    description: 'Drop in, gear up, and survive! Join squads in a classic PUBG Mobile tournament for cash prizes and glory.',
    image: '/home.jpg',
    featured: true,
    entry: '₹199',
    details: [
      'Squad mode',
      'Classic maps',
      'Live casting',
      '+2 more features'
    ],
    color: '#ff5722',
    btnColor: '#ff5722',
  },
  {
    id: 5,
    title: 'Free Fire Frenzy',
    subtitle: 'Mobile Shooter',
    description: 'Fast-paced Free Fire tournament. Compete solo or with friends and win exclusive in-game rewards!',
    image: '/home.jpg',
    featured: false,
    entry: '₹149',
    details: [
      'Solo & squad',
      'Knockout rounds',
      'Special rewards',
      '+1 more feature'
    ],
    color: '#8bc34a',
    btnColor: '#8bc34a',
  },
  {
    id: 6,
    title: 'Alpine Ski Challenge',
    subtitle: 'Winter Sports',
    description: 'Race down the slopes in this Alpine Ski eSports event. Fastest time wins! Open to all ages.',
    image: '/home.jpg',
    featured: false,
    entry: '₹99',
    details: [
      'Time trials',
      'Multiple tracks',
      'Open leaderboard',
      '+1 more feature'
    ],
    color: '#00bfae',
    btnColor: '#00bfae',
  },
  {
    id: 7,
    title: 'Bike Racing League',
    subtitle: 'Arcade Racing',
    description: 'Burn rubber in the ultimate bike racing tournament. Compete for the fastest lap and top prizes!',
    image: '/home.jpg',
    featured: true,
    entry: '₹129',
    details: [
      'Arcade mode',
      'Time attack',
      'Leaderboard prizes',
      '+2 more features'
    ],
    color: '#ff4081',
    btnColor: '#ff4081',
  },
  {
    id: 8,
    title: 'Rocket League Cup',
    subtitle: 'Car Soccer',
    description: 'Score goals with rocket-powered cars! Join the Rocket League Cup for a fun and competitive experience.',
    image: '/home.jpg',
    featured: false,
    entry: '₹199',
    details: [
      '3v3 teams',
      'Knockout & finals',
      'Live stream',
      '+1 more feature'
    ],
    color: '#2979ff',
    btnColor: '#2979ff',
  },
  {
    id: 9,
    title: 'Tekken Showdown',
    subtitle: 'Fighting Game',
    description: 'Face off in Tekken! Compete in a classic fighting game tournament for cash and bragging rights.',
    image: '/home.jpg',
    featured: true,
    entry: '₹249',
    details: [
      '1v1 battles',
      'Double elimination',
      'Live bracket',
      '+2 more features'
    ],
    color: '#d500f9',
    btnColor: '#d500f9',
  },
];



function Tournaments({ onQuickRegister, onNavigateToSchedules }) {
  const [selected, setSelected] = useState(null);
  const [registering, setRegistering] = useState(null); // tournament object
  const [form, setForm] = useState({ gamerName: '', email: '', teamName: '', contact: '', ign: '', platform: '', schedule: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handler to open registration modal from details modal
  const handleRegisterNow = (tournament) => {
    setSelected(null);
    setTimeout(() => setRegistering(tournament), 0); // ensure modal transition
  };

  // Modal for tournament details
  if (selected) {
    return <TournamentDetails tournament={selected} onClose={() => setSelected(null)} onRegisterNow={handleRegisterNow} />;
  }

  // Modal for quick register
  const closeRegister = () => {
    setRegistering(null);
    setForm({ gamerName: '', email: '', teamName: '', contact: '', ign: '', platform: '', schedule: '' });
    setError('');
    setSuccess(false);
  };

  const handleFormChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleRegister = e => {
    e.preventDefault();
    if (!form.gamerName || !form.email || !form.contact || !form.ign || !form.platform || !form.schedule) {
      setError('Please fill all required fields.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Enter a valid email.');
      return;
    }
    if (!/^\d{10}$/.test(form.contact)) {
      setError('Enter a valid 10-digit contact number.');
      return;
    }
    onQuickRegister(registering, form);
    setSuccess(true);
    setTimeout(() => {
      closeRegister();
      if (onNavigateToSchedules) {
        onNavigateToSchedules();
      }
    }, 1500);
  };

  return (
    <>
      <div className="tournament-list">
        {tournaments.map(t => (
          <div className="tournament-card" key={t.id}>
            <div className="tournament-image" style={{backgroundImage: `url(${t.image})`}}>
              {t.featured && <span className="tournament-featured">Featured</span>}
              <span className="tournament-entry" style={{background: t.color}}>{t.entry}</span>
            </div>
            <div className="tournament-content">
              <h3>{t.title}</h3>
              <div className="tournament-subtitle">{t.subtitle}</div>
              <p className="tournament-desc">{t.description}</p>
              <div className="tournament-includes">
                <b>What's Included</b>
                <ul>
                  {t.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
              <button className="tournament-btn" style={{background: t.btnColor}} onClick={() => setSelected(t)}>View Full Details</button>
              <button className="tournament-btn secondary" onClick={() => setRegistering(t)}>Quick Register</button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Register Modal */}
      {registering && (
        <div className="tournament-details-modal">
          <div className="tournament-details-card modern-card" style={{ maxWidth: 440, minWidth: 320, padding: 0 }}>
            <button className="tournament-details-close modern-close" onClick={closeRegister}>×</button>
            <div style={{ padding: '2rem 2rem 1.5rem 2rem', borderRadius: '22px 22px 0 0', background: `linear-gradient(90deg, ${registering.color} 0%, #0ff1b3 100%)`, color: '#fff', textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 900 }}>{registering.title}</div>
              <div style={{ fontSize: 16, opacity: 0.9 }}>{registering.subtitle}</div>
            </div>
            <form style={{ padding: '1.5rem 2rem 2rem 2rem', display: 'flex', flexDirection: 'column', gap: 14 }} onSubmit={handleRegister}>
              <label style={{ color: '#0ff1b3', fontWeight: 700 }}>Gamer Name *</label>
              <input name="gamerName" value={form.gamerName} onChange={handleFormChange} className="tournament-input" required />
              <label style={{ color: '#0ff1b3', fontWeight: 700 }}>Email *</label>
              <input name="email" value={form.email} onChange={handleFormChange} className="tournament-input" required type="email" />
              {registering.details.some(d => d.toLowerCase().includes('team')) && (
                <>
                  <label style={{ color: '#0ff1b3', fontWeight: 700 }}>Team Name</label>
                  <input name="teamName" value={form.teamName} onChange={handleFormChange} className="tournament-input" />
                </>
              )}
              <label style={{ color: '#0ff1b3', fontWeight: 700 }}>Contact Number *</label>
              <input name="contact" value={form.contact} onChange={handleFormChange} className="tournament-input" required type="tel" maxLength={10} minLength={10} pattern="\d{10}" />
              <label style={{ color: '#0ff1b3', fontWeight: 700 }}>In-Game Name (IGN) *</label>
              <input name="ign" value={form.ign} onChange={handleFormChange} className="tournament-input" required />
              <label style={{ color: '#0ff1b3', fontWeight: 700 }}>Platform *</label>
              <select name="platform" value={form.platform} onChange={handleFormChange} className="tournament-input" required>
                <option value="">Select Platform</option>
                <option value="PC">PC</option>
                <option value="Mobile">Mobile</option>
                <option value="Console">Console</option>
              </select>
              <label style={{ color: '#0ff1b3', fontWeight: 700 }}>Preferred Schedule *</label>
              <select name="schedule" value={form.schedule} onChange={handleFormChange} className="tournament-input" required>
                <option value="">Select Time</option>
                <option value="Morning (9AM-12PM)">Morning (9AM-12PM)</option>
                <option value="Afternoon (1PM-4PM)">Afternoon (1PM-4PM)</option>
                <option value="Evening (5PM-8PM)">Evening (5PM-8PM)</option>
                <option value="Night (9PM-12AM)">Night (9PM-12AM)</option>
              </select>
              {error && <div style={{ color: '#ee0979', fontWeight: 700 }}>{error}</div>}
              {success ? (
                <div style={{ color: '#0ff1b3', fontWeight: 700, textAlign: 'center', marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontSize: 18 }}>✅ Registration Successful!</div>
                  <div style={{ fontSize: 14, opacity: 0.9 }}>Redirecting to Schedules...</div>
                </div>
              ) : (
                <button type="submit" className="tournament-btn" style={{ background: registering.btnColor, marginTop: 8 }}>Submit Registration</button>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Tournaments;
