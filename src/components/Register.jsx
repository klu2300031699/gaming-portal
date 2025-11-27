
import './register.css'

function Register({ registerData, setRegisterData, handleRegisterSubmit, setView }) {
  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  return (
    <div className="form-container" style={{ backgroundImage: "url('/home.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="glass">
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <label htmlFor="register-username" style={{textAlign: 'left', color: '#fff', fontWeight: 500, marginBottom: 4}}>Username</label>
          <input
            id="register-username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={registerData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="register-email" style={{textAlign: 'left', color: '#fff', fontWeight: 500, marginBottom: 4, marginTop: 10}}>Email</label>
          <input
            id="register-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={registerData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="register-password" style={{textAlign: 'left', color: '#fff', fontWeight: 500, marginBottom: 4, marginTop: 10}}>Password</label>
          <input
            id="register-password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={registerData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="register-confirm-password" style={{textAlign: 'left', color: '#fff', fontWeight: 500, marginBottom: 4, marginTop: 10}}>Confirm Password</label>
          <input
            id="register-confirm-password"
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your password"
            value={registerData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label htmlFor="register-mobile" style={{textAlign: 'left', color: '#fff', fontWeight: 500, marginBottom: 4, marginTop: 10}}>Mobile Number</label>
          <input
            id="register-mobile"
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            value={registerData.mobile}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">Register</button>
        </form>
        <button onClick={() => setView('home')} className="back-btn">Back to Home</button>
      </div>
    </div>
  )
}

export default Register