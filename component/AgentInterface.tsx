import React, { useState } from 'react';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const AgentInterface = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState<ChatMessage[]>([]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: userInput,
    };

    setConversation([...conversation, userMessage]);
    setUserInput('');

    try {
      const response = await fetch('/api/agent/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [userMessage] }),
      });

      const data = await response.json();
      if (data.response) {
        setConversation(conversation => [...conversation, { role: 'assistant', content: data.response }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      console.log('Response from API:', Response);

      // Add this line to log the detailed error message
    
      // Set a more informative error message
      setConversation(conversation => [...conversation, { role: 'assistant', content: "Sorry, there was an issue connecting to the server." }]);
    }
    
  };

  return (
    <div className="chat-container" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div className="chat-box" style={{ height: '400px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        {conversation.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.role === 'user' ? 'right' : 'left' }}>
            <p style={{ background: msg.role === 'user' ? '#D1E8E2' : '#F3F3F3', display: 'inline-block', padding: '5px 10px', borderRadius: '10px' }}>
              {msg.content}
            </p>
          </div>
        ))}
      </div>
      <div>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}
        ></textarea>
        <button onClick={sendMessage} style={{ width: '100%', padding: '10px 20px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default AgentInterface;
