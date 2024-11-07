'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ChatSidebar() {
  const [chats] = useState([
    { id: 1, name: 'Design Team', lastMessage: 'Latest updates...', time: '9:45 AM' },
    { id: 2, name: 'Petri Turyak', lastMessage: 'Have a great working week!', time: '9:41 AM' },
    // Добавьте другие чаты
  ]);

  return (
    <div className="w-72 border-r border-gray-800">
      <div className="p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-800 rounded-lg px-4 py-2"
          />
        </div>
        <div className="space-y-2">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-gray-700 mr-3" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium">{chat.name}</span>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 