import React, { useState, useEffect } from 'react';

function Profile({ user }) {
  const [messages, setMessages] = useState([]);

  // Simulation de chargement des messages de l'utilisateur
  useEffect(() => {
    setMessages([
      { id: 1, content: 'Ceci est mon premier message', author: user.username },
      { id: 3, content: 'Un autre message par moi', author: user.username },
    ]);
  }, [user]);

  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Profil de {user.username}</h2>
      <h3>Mes messages</h3>
      {messages.length === 0 ? (
        <p>Aucun message.</p>
      ) : (
        messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              border: '1px solid #ccc',
              margin: '10px 0',
              padding: '10px',
            }}
          >
            <p>{msg.content}</p>
            <button onClick={() => handleDelete(msg.id)}>Supprimer</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Profile;
