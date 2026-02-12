import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Forum from './components/Forum';
import Profile from './components/Profile';
import ClosedForum from './components/ClosedForum';
import AdminPanel from './components/AdminPanel';

function App() {
  // L'objet user contiendra par exemple : { username, isAdmin, isMember }
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Forum user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/closed-forum"
          element={user && user.isAdmin ? <ClosedForum user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin"
          element={user && user.isAdmin ? <AdminPanel /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
