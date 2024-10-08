// File: src/components/LiveChat.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
`;

const ChatWindow = styled(motion.div)`
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const ChatHeader = styled.div`
  background-color: #007bff;
  color: white;
  padding: 1rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ChatMessages = styled.div`
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
`;

const ChatInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-top: 1px solid #ccc;
`;

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      // Simulate a response (you'd replace this with actual backend logic)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for your message! We'll get back to you soon.", sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <>
      <ChatButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '×' : '💬'}
      </ChatButton>
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <ChatHeader>Live Chat</ChatHeader>
            <ChatMessages>
              {messages.map((message, index) => (
                <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                  {message.text}
                </div>
              ))}
            </ChatMessages>
            <form onSubmit={handleSend}>
              <ChatInput
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
              />
            </form>
          </ChatWindow>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;