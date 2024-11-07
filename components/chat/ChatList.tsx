'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function ChatList({ onSelectChat }) {
  const [search, setSearch] = useState('');

  return (
    <div className="h-full flex flex-col">
      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-800 rounded-full pl-10 pr-4 py-2 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 space-y-2">
          {/* Chat Items */}
          {[1, 2, 3].map((chat) => (
            <div
              key={chat}
              onClick={() => onSelectChat(chat)}
              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800 cursor-pointer"
            >
              <div className="relative">
                <img
                  src="/avatar-placeholder.png"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <span className="font-medium truncate">User Name</span>
                  <span className="text-xs text-gray-400">12:34</span>
                </div>
                <p className="text-sm text-gray-400 truncate">
                  Last message preview...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 