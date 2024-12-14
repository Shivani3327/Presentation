import React, { useState } from 'react';
import './ChatApp.css';
 

const users = ["Shivani", "Pavani", "Kartheevani", "Vaishnavi", "Rohith", "Jashwanth"];

const ChatApp = () => {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([
    { user: "admin", text: "Welcome to the chat room, Chatgram!" }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatLog([...chatLog, { user: currentUser, text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="chat-app">
      <div className="sidebar">
        <h3>Online Users</h3>
        <ul>
          {users.map((user) => (
            <li
              key={user}
              className={user === currentUser ? "active" : ""}
              onClick={() => setCurrentUser(user)}
            >
              {user}
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-room">
        <div className="chat-header">
          <h3>Chatgram</h3>
        </div>

        <div className="chat-messages">
          {chatLog.map((log, index) => (
            <div
              key={index}
              className={`chat-message ${
                log.user === currentUser ? "self" : ""
              }`}
            >
              <strong>{log.user}:</strong> {log.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;