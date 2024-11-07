'use client';

import { useState } from 'react';

export default function ChatMain() {
  const [messages] = useState([
    { id: 1, sender: 'Petri Turyak', content: 'Have a great working week!', time: '9:41 AM' },
    { id: 2, sender: 'Ahmed Medi', content: 'This new landing page, What do you think?', time: '9:45 AM' },
    // Добавьте другие сообщения
  ]);

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-700 mr-3" />
            <span className="font-medium">Design Team</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <SearchIcon />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <CallIcon />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-700" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{message.sender}</span>
                <span className="text-xs text-gray-400">{message.time}</span>
              </div>
              <p className="mt-1 text-gray-300">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center bg-gray-800 rounded-lg p-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none px-2"
          />
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <AttachmentIcon />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <EmojiIcon />
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 