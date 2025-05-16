import { useState } from 'react';
import '/src/assets/css/Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
};
const handlelogin=()=>{
    navigate('/home');
}

  return (
    <div className='bg'>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className='log-use'>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='log-use'>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="submit-button" onClick={handlelogin}>Login</button>
        <br></br><br></br>
       <div className="log-forgot-password">
          <a href="/Signup">Forgot Password?</a>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
