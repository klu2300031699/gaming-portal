
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

function Tournaments() {
  const [selected, setSelected] = useState(null);
  if (selected) {
    return <TournamentDetails tournament={selected} onClose={() => setSelected(null)} />;
  }
  return (
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
            <button className="tournament-btn secondary">Quick Register</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tournaments;
