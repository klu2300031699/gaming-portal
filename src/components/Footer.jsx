import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">🎮 <span style={{color:'#0ff1b3'}}>Gaming</span><span style={{color:'#ee0979'}}>Portal</span></span>
          <p>Connecting gamers with the best tournaments, schedules, and esports action. Join, compete, and be part of the gaming community!</p>
          <div className="footer-socials">
            <a href="#" aria-label="Discord"><i className="fa-brands fa-discord"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="Twitch"><i className="fa-brands fa-twitch"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#">Home</a>
            <a href="#">Tournaments</a>
            <a href="#">Schedules</a>
            <a href="#">About Us</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="#">Discord</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Twitch</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get the latest tournaments, news, and exclusive offers.</p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-stats">
          <div><b>100K+</b><span>Players</span></div>
          <div><b>500+</b><span>Tournaments</span></div>
          <div><b>99%</b><span>Satisfaction</span></div>
        </div>
        <div className="footer-copyright">
          © 2025 Gaming Portal. All rights reserved. | Built with <span style={{color:'#ee0979'}}>♥</span> using React
        </div>
      </div>
    </footer>
  );
}

export default Footer;
