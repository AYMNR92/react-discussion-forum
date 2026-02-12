import React, { useState, useEffect } from 'react';

function Forum({ user }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Simulation du chargement des messages depuis une API
  useEffect(() => {
    setMessages([
      { id: 1, author: 'Alice', content: 'Bonjour tout le monde !' },
      { id: 2, author: 'Bob', content: 'Salut, comment ça va ?' },
    ]);
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    const message = {
      id: messages.length + 1,
      author: user ? user.username : 'Anonyme',
      content: newMessage,
    };
    setMessages([message, ...messages]);
    setNewMessage('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Forum Ouvert</h2>
      {user ? (
        <form onSubmit={handlePost} style={{ marginBottom: '20px' }}>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Écrire un message..."
            required
            style={{ width: '100%', height: '80px' }}
          />
          <br />
          <button type="submit">Poster</button>
        </form>
      ) : (
        <p>Vous devez être connecté pour poster un message.</p>
      )}
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

export default Forum;
