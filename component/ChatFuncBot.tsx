"Use Client"

import React, { useState } from 'react';

// Define the structure of each message
interface Message {
  user: string;
  bot: string;
}

export default function ChatFunctionTool() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async () => {
    // Prevent sending empty messages
    if (!input.trim()) return;

    try {
      const response = await fetch('/api/assistantApi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Update the messages state with the new message
      setMessages([...messages, { user: input, bot: data.response }]);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setInput(''); // Clear input field after sending the message
    }
  };

  return (
    <div>
      <h1>Chat with Our Movie Expert</h1>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>User:</strong> {msg.user} <br />
            <strong>Bot:</strong> {msg.bot}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me about movies..."
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
