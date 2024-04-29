import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(username, password)
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
        });
        
    const data = await response.json();
    console.log(data);
    if(response.ok) {
      console.log(data.token);
      localStorage.setItem('token', data.token);
      window.location.href = '/admin/dashboard';
    }
    else {
        console.error(data.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;