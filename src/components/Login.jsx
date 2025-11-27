
import './login.css'

function Login({ loginData, setLoginData, handleLoginSubmit, setView }) {
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  return (
    <div className="form-container" style={{ backgroundImage: "url('/home.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="glass">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="login-username" style={{textAlign: 'left', color: '#fff', fontWeight: 500, marginBottom: 4}}>Username</label>
          <input
            id="login-username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={loginData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="login-password" style={{textAlign: 'left', color: '#fff', fontWeight: 500, marginBottom: 4, marginTop: 10}}>Password</label>
          <input
            id="login-password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">Login</button>
        </form>
        <button onClick={() => setView('home')} className="back-btn">Back to Home</button>
      </div>
    </div>
  )
}

export default Login