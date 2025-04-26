import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './components.css';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password
      });
      const {message,accessToken,refreshToken } = response.data;
      localStorage.setItem('accessToken',accessToken);
      localStorage.setItem('refreshToken',refreshToken);

      setMessage(message); 
      navigate('/tasklist'); 
    } catch (err) {
      if (err.response && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage('Server error. Please try again later.');
      }
    }
  };

  return (
    <div className="Login-cont">
      <h1>Login</h1>
      <form method="POST" onSubmit={handleLogin}>
        <input
          aria-label="Username"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          value={username}
          required
        />
        <input
          aria-label="Password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          required
        />
        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}

      <p>Don't have an account? <Link to="/register">Click here</Link></p>
    </div>
  );
}

export default Login;