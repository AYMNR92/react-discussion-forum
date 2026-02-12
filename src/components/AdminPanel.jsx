import React, { useState, useEffect } from 'react';

function AdminPanel() {
  const [pendingUsers, setPendingUsers] = useState([]);

  // Simulation du chargement des inscriptions en attente
  useEffect(() => {
    setPendingUsers([
      { id: 1, username: 'User1' },
      { id: 2, username: 'User2' },
    ]);
  }, []);

  const handleValidate = (id) => {
    setPendingUsers(pendingUsers.filter((u) => u.id !== id));
    alert('Utilisateur validé');
  };

  const handleReject = (id) => {
    setPendingUsers(pendingUsers.filter((u) => u.id !== id));
    alert("Inscription rejetée");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Panel Administrateur</h2>
      <h3>Inscriptions en attente</h3>
      {pendingUsers.length === 0 ? (
        <p>Aucune inscription en attente.</p>
      ) : (
        pendingUsers.map((u) => (
          <div
            key={u.id}
            style={{
              border: '1px solid #ccc',
              margin: '10px 0',
              padding: '10px',
            }}
          >
            <p>{u.username}</p>
            <button onClick={() => handleValidate(u.id)}>Valider</button>
            <button onClick={() => handleReject(u.id)}>Rejeter</button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminPanel;
