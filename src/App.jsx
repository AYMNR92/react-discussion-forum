import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Headbar from './components/Headbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import AdminPanel from './components/AdminPanel';
import Forum from './components/Forum';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

function App() {

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('forum_users');
    return savedUsers ? JSON.parse(savedUsers) : [
      { email: 'admin@admin.com', password: 'admin', username: 'Admin', isAdmin: true, isBanned: false }
    ];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('forum_currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [threads, setThreads] = useState(() => {
    const savedThreads = localStorage.getItem('forum_threads');
    return savedThreads ? JSON.parse(savedThreads) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('forum_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('forum_currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('forum_currentUser');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('forum_threads', JSON.stringify(threads));
  }, [threads]);


  const handleLogin = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      if (user.isBanned) {
        alert("Ce compte est banni.");
        return;
      }
      setCurrentUser(user);
      navigate('/forum');
    } else {
      alert("Identifiants incorrects");
    }
  };

  const handleSignup = (email, password, username) => {
    if (users.find(u => u.email === email)) {
      alert("Email déjà utilisé");
      return;
    }
    const newUser = { email, password, username, isAdmin: false, isBanned: false };
    setUsers([...users, newUser]);
    setCurrentUser(newUser); 
    navigate('/forum');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/');
  };

  const handleCreateThread = (title, content) => {
    const newThread = { 
      id: Date.now(), 
      title, 
      content, 
      author: currentUser.username, 
      date: new Date().toLocaleDateString(),
      messages: [] // Pour de futures réponses
    };
    setThreads([newThread, ...threads]);
  };
  
  const handleBanUser = (email) => {
    setUsers(users.map(u => u.email === email ? { ...u, isBanned: true } : u));
  };

  return (
    <div className="app-container">
      <Headbar />
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          
          {/* Route Protégée : Forum */}
          <Route 
            path="/forum" 
            element={currentUser ? <Forum threads={threads} onCreateThread={handleCreateThread} /> : <Navigate to="/" />} 
          />
          
          {/* Route Protégée : Admin */}
          <Route 
            path="/admin" 
            element={
              currentUser && currentUser.isAdmin 
              ? <AdminPanel users={users} onBan={handleBanUser} /> 
              : <Navigate to="/forum" />
            } 
          />
          
          <Route 
            path="/profile" 
            element={currentUser ? <Profile user={currentUser} /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;