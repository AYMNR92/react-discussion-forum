import React, { useState, useEffect } from 'react';

function ClosedForum({ user }) {
  const [messages, setMessages] = useState([]);

  // Simulation du chargement des messages du forum fermé réservé aux administrateurs
  useEffect(() => {
    setMessages([
      { id: 10, author: 'Admin', content: 'Message réservé aux administrateurs.' },
    ]);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Forum Fermé</h2>
      <div>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              border: '1px solid #ccc',
              margin: '10px 0',
              padding: '10px',
            }}
          >
            <strong>{msg.author}</strong>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClosedForum;
