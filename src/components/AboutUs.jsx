import React from 'react';
import './aboutus.css';


const homeImg = '/home.jpg'; // Use public/home.jpg for avatars and hero image

const journey = [
  {
    icon: '🌟',
    title: 'The Dream',
    desc: 'Built to unite gamers, inspiring all to find their squad, compete, and celebrate victories together. Our journey began with a passion for gaming and community.'
  },
  {
    icon: '🕹️',
    title: 'The Solution',
    desc: 'A portal for tournaments, schedules, and news. We connect players, organizers, and fans with seamless experiences and fair play.'
  },
  {
    icon: '🏆',
    title: 'The Impact',
    desc: 'Thousands of gamers, hundreds of tournaments, and a growing legacy of champions. We foster talent, teamwork, and unforgettable moments.'
  }
];

const values = [
  {
    icon: '🤝',
    title: 'Team First',
    desc: 'We believe in the power of teams—collaboration, support, and shared victories.'
  },
  {
    icon: '🔍',
    title: 'Transparency Always',
    desc: 'Clear rules, open communication, and fair competition for all.'
  },
  {
    icon: '✅',
    title: 'Quality Guaranteed',
    desc: 'Top-tier tournaments, secure platform, and a commitment to excellence.'
  },
  {
    icon: '🚀',
    title: 'Innovation Driven',
    desc: 'We embrace new tech, creative formats, and fresh ways to play and connect.'
  }
];

const team = [
  {
    img: homeImg,
    name: 'Lasya L',
    id: '2300030380',
    role: 'Fullstack Architect'
  },
  {
    img: homeImg,
    name: 'Sai Sanjana',
    id: '2300031997',
    role: 'Frontend/UI Designer'
  },
  {
    img: homeImg,
    name: 'Beulah',
    id: '2300032246',
    role: 'Technology Lead'
  }
];

export default function AboutUs() {
  return (
    <div className="aboutus-bg gaming-theme-bg">
      <section className="aboutus-hero-centered gaming-theme-section">
        <h1 className="gaming-theme-heading">Our Story</h1>
        <p className="gaming-theme-text" style={{ maxWidth: 700, margin: '0 auto 32px auto' }}>
          Born from a simple idea, every gamer deserves a place to connect and compete. We revolutionized how gamers join tournaments, track progress, and build community—creating a platform built on trust, transparency, and a love for gaming.
        </p>
        <div className="aboutus-stats aboutus-stats-centered">
          <div className="aboutus-stat-card gaming-theme-card"><span>50K+</span><div>Players</div></div>
          <div className="aboutus-stat-card gaming-theme-card"><span>1,200+</span><div>Tournaments</div></div>
          <div className="aboutus-stat-card gaming-theme-card"><span>200+</span><div>Organizers</div></div>
          <div className="aboutus-stat-card gaming-theme-card"><span>98%</span><div>Positive Feedback</div></div>
        </div>
      </section>
      <section className="aboutus-journey gaming-theme-section">
        <h2 className="gaming-theme-heading">Our Journey</h2>
        <div className="aboutus-journey-cards">
          {journey.map((j, i) => (
            <div className="aboutus-journey-card gaming-theme-card" key={i}>
              <div className="aboutus-journey-icon gaming-theme-icon">{j.icon}</div>
              <div className="aboutus-journey-title gaming-theme-title">{j.title}</div>
              <div className="aboutus-journey-desc gaming-theme-text">{j.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="aboutus-values gaming-theme-section">
        <h2 className="gaming-theme-heading">Our Core Values</h2>
        <p className="gaming-theme-text">These principles guide everything we do, from how we select and produce tournaments to how we serve our players.</p>
        <div className="aboutus-values-cards">
          {values.map((v, i) => (
            <div className="aboutus-value-card gaming-theme-card" key={i}>
              <div className="aboutus-value-icon gaming-theme-icon">{v.icon}</div>
              <div className="aboutus-value-title gaming-theme-title">{v.title}</div>
              <div className="aboutus-value-desc gaming-theme-text">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="aboutus-team gaming-theme-section">
        <h2 className="gaming-theme-heading">Meet Our Team</h2>
        <div className="aboutus-team-cards">
          {team.map((t, i) => (
            <div className="aboutus-team-card gaming-theme-card" key={i}>
              <img src={t.img} alt={t.name} className="aboutus-team-img" />
              <div className="aboutus-team-name gaming-theme-title">{t.name}</div>
              <div className="aboutus-team-id gaming-theme-text">{t.id}</div>
              <div className="aboutus-team-role gaming-theme-text">{t.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
