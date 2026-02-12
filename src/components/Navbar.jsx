import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
        <li><Link to="/">Forum</Link></li>
        {user ? (
          <>
            <li><Link to="/profile">Mon Profil</Link></li>
            {user.isAdmin && <li><Link to="/closed-forum">Forum Fermé</Link></li>}
            {user.isAdmin && <li><Link to="/admin">Panel Admin</Link></li>}
            <li>
              <button onClick={handleLogout}>Déconnexion</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Connexion</Link></li>
            <li><Link to="/signup">Inscription</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
