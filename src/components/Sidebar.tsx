import React from 'react';
import { Search, Settings, MessageSquare, Users, Phone, Folder } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

const Sidebar = () => {
  const { chats, drafts, setActiveChat, activeChat } = useChatStore();

  return (
    <div className="w-80 border-r border-gray-800">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-6 h-6" />
            <span className="font-semibold">Messages</span>
          </div>
          <Settings className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="relative mb-6">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700"
          />
        </div>

        <nav className="space-y-1 mb-6">
          <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full p-2 rounded-lg hover:bg-gray-800">
            <MessageSquare className="w-5 h-5" />
            <span>All Messages</span>
          </button>
          <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full p-2 rounded-lg hover:bg-gray-800">
            <Users className="w-5 h-5" />
            <span>Groups</span>
          </button>
          <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full p-2 rounded-lg hover:bg-gray-800">
            <Phone className="w-5 h-5" />
            <span>Calls</span>
          </button>
          <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full p-2 rounded-lg hover:bg-gray-800">
            <Folder className="w-5 h-5" />
            <span>Files</span>
          </button>
        </nav>

        <div className="space-y-2">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer ${
                activeChat?.id === chat.id ? 'bg-gray-800' : ''
              }`}
              onClick={() => setActiveChat(chat)}
            >
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-medium truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                {drafts[chat.id] ? (
                  <p className="text-sm text-rose-400 truncate">
                    Черновик: {drafts[chat.id]}
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                )}
              </div>
              {chat.unread && (
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">
                  {chat.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;