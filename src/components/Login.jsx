import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation de connexion : si l'utilisateur s'appelle "admin", on le connecte en administrateur
    if (username === 'admin' && password === 'admin') {
      setUser({ username, isAdmin: true, isMember: true });
      navigate('/');
    } else if (username && password) {
      setUser({ username, isAdmin: false, isMember: true });
      navigate('/');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur : </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe : </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
