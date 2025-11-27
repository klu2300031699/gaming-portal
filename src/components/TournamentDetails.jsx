
import './tournamentdetails.css';


function TournamentDetails({ tournament, onClose, onRegisterNow }) {
  if (!tournament) return null;
  return (
    <div className="tournament-details-modal">
      <div className="tournament-details-card modern-card">
        <div
          className="tournament-details-header modern-header"
          style={{
            background: `linear-gradient(90deg, ${tournament.color} 0%, #b0f566 100%)`,
          }}
        >
          <div className="tournament-details-icon modern-icon">🎮</div>
          <div className="modern-header-info">
            <h2>{tournament.title}</h2>
            <div className="tournament-details-sub">{tournament.subtitle}</div>
          </div>
          <div className="tournament-details-price modern-price">{tournament.entry}</div>
        </div>
        <div className="tournament-details-body modern-body">
          <div className="tournament-details-about modern-about">
            <h3>About this tournament</h3>
            <p>{tournament.description}</p>
            <h4>What's included</h4>
            <ul>
              {tournament.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="tournament-details-side modern-side">
            <div className="tournament-details-box modern-register-box">
              <h4>Register for this tournament</h4>
              <p>Click below to register. Our team will confirm your slot and send you all details.</p>
              <button className="tournament-details-book modern-book" onClick={() => onRegisterNow && onRegisterNow(tournament)}>Register Now</button>
              <div className="tournament-details-badges modern-badges">
                <span>🎮 Quick registration</span>
                <span>🛡️ Verified event</span>
                <span>🏆 Prizes</span>
              </div>
            </div>
            <div className="tournament-details-box modern-questions-box">
              <h4>Questions?</h4>
              <p>Not sure if this tournament is right for you? We can help clarify details and recommendations.</p>
              <a href="#" className="tournament-details-contact modern-contact">Contact us →</a>
            </div>
          </div>
        </div>
        <button className="tournament-details-close modern-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

export default TournamentDetails;
