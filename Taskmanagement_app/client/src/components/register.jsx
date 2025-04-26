import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [message, setMessage] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== repassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        email,
        username,
        password,
        repassword
      });

      setMessage(res.data.message);
      navigate('/login');
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Server error. Please try again.");
      }
    }
  };

  return (
    <div className='Login-cont'>
      <h1>Register</h1>
      <form method="POST" onSubmit={handleRegister}>
        <input
          name='email'
          aria-label='Email'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          name='username'
          aria-label='Username'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          name='password'
          aria-label='Password'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          name='repassword'
          aria-label='Retype Password'
          type="password"
          placeholder="Retype Password"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
      <p>Already have an account? <Link to="/login">Click me</Link></p>
    </div>
  );
}

export default Register;