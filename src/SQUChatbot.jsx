import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import logo from './logo.png';  

const SQUChatbot = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Welcome! I'm the SQU virtual assistant. How can I help you today?", 
      isBot: true,
      timestamp: new Date()
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = async (userInput) => {
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput })
      });
      
      const data = await response.json();
      
      if (data.success) {
        return data.message;
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Error getting bot response:', error);
      return "Sorry, I'm having trouble connecting to the server. Please try again later.";
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    if (!inputText.trim()) {
      return;
    }

    const newUserMessage = {
      id: Date.now(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    const userInput = inputText;
    setInputText('');
    setIsTyping(true);

    try {
      const botResponse = await getBotResponse(userInput);
      
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble responding right now. Please try again later.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendClick = () => {
    if (inputText.trim()) {
      handleSubmit(null);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto h-[600px] flex flex-col bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img 
            src={logo}
            alt="SQU Logo"
            className="w-16 h-16 object-contain"
          />
          <h1 className="font-semibold text-lg text-yellow-500">SQU Assistant</h1>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${message.isBot ? 'items-start' : 'items-end'} space-y-1`}
          >
            <div className="flex gap-2 items-end max-w-[80%] w-auto">
              {message.isBot && (
                <div className="w-9 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs">
                  SQU
                </div>
              )}
              <div
                className={`p-4 rounded-2xl shadow-sm
                  ${message.isBot 
                    ? 'bg-white text-gray-800 rounded-tl-none border border-yellow-200' 
                    : 'bg-yellow-500 text-white rounded-tr-none'
                  }`}
              >
                {message.text}
              </div>
              {!message.isBot && (
                <div className="w-10 h-6 rounded-full bg-yellow-600 text-white flex items-center justify-center text-xs">
                  Ayah
                </div>
              )}
            </div>
            <span className={`text-xs text-gray-400 px-2 ${message.isBot ? 'pl-8' : 'pr-8'}`}>
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-end gap-2">
            <div className="w-9 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs">
              SQU
            </div>
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-yellow-200">
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce opacity-60"></span>
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce [animation-delay:0.2s] opacity-60"></span>
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce [animation-delay:0.4s] opacity-60"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
            placeholder="Type your message..."
            className="flex-1 p-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white transition-all"
          />
          <button
            onClick={handleSendClick}
            disabled={!inputText.trim()}
            className="p-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:hover:bg-yellow-500"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SQUChatbot;