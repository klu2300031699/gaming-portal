import './navbar.css';

function Navbar({ username, onLogout, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">Gaming Portal</span>
        <button className="nav-link" onClick={() => onNavigate('dashboard')}>Home</button>
        <button className="nav-link" onClick={() => onNavigate('tournaments')}>Tournaments</button>
        <button className="nav-link" onClick={() => onNavigate('schedules')}>Schedules</button>
        <button className="nav-link" onClick={() => onNavigate('aboutus')}>About Us</button>
      </div>
      <div className="navbar-right">
        <div className="dropdown">
          <button className="dropbtn">{username} &#x25BC;</button>
          <div className="dropdown-content">
            <button onClick={onLogout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
