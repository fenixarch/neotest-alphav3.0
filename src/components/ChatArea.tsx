import React, { useEffect, useState } from 'react';
import { Phone, Video, Search, Paperclip, Smile, Send, Image as ImageIcon } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

const messages = [
  { id: 1, sender: 'Puth Tayak', content: 'Have a great working week!', time: '9:41 AM', avatar: 'https://i.pravatar.cc/100?img=2' },
  { id: 2, sender: 'Ahmed Mali', content: 'This new landing page, What do you think?', time: '9:43 AM', avatar: 'https://i.pravatar.cc/100?img=3', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60' },
];

const ChatArea = () => {
  const { activeChat, drafts, setActiveChat, setDraft } = useChatStore();
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load draft message when chat is opened
    if (activeChat) {
      setMessage(drafts[activeChat.id] || '');
    }
  }, [activeChat, drafts]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeChat) {
        // Save draft if message exists
        if (message.trim()) {
          setDraft(activeChat.id, message);
        }
        setActiveChat(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [activeChat, message, setActiveChat, setDraft]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    if (activeChat) {
      // Update draft in real-time as user types
      setDraft(activeChat.id, e.target.value);
    }
  };

  if (!activeChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#1A1C1E]">
        <p className="text-gray-400">Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={activeChat.avatar}
              alt={activeChat.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-semibold">{activeChat.name}</h2>
              <p className="text-sm text-gray-400">Active now</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg">
              <Phone className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg">
              <Video className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            <img
              src={message.avatar}
              alt={message.sender}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-baseline space-x-2">
                <span className="font-medium">{message.sender}</span>
                <span className="text-xs text-gray-400">{message.time}</span>
              </div>
              <p className="text-gray-300 mt-1">{message.content}</p>
              {message.image && (
                <img
                  src={message.image}
                  alt="Shared content"
                  className="mt-2 rounded-lg max-w-sm"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 p-4">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Paperclip className="w-5 h-5 text-gray-400" />
          </button>
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-700"
          />
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <ImageIcon className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Smile className="w-5 h-5 text-gray-400" />
          </button>
          <button 
            className="bg-green-500 p-2 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!message.trim()}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;