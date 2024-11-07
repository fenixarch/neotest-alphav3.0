'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { MessageSquare, Users, Settings } from 'lucide-react';
import ChatList from '@/components/chat/ChatList';
import ChatView from '@/components/chat/ChatView';
import UserList from '@/components/chat/UserList';

export default function ChatPage() {
  const { data: session } = useSession();
  const [activeView, setActiveView] = useState<'chats' | 'users'>('chats');
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-800">
        <span className="text-xl font-bold">Neo</span>
        <img
          src={session?.user?.image || '/avatar-placeholder.png'}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation - Desktop */}
        <div className="hidden lg:flex flex-col w-20 bg-gray-800 p-4 items-center space-y-8">
          <span className="text-xl font-bold">Neo</span>
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => {
                setActiveView('chats');
                setSelectedChat(null);
              }}
              className={`p-3 rounded-xl ${activeView === 'chats' ? 'bg-green-500' : 'hover:bg-gray-700'}`}
            >
              <MessageSquare size={24} />
            </button>
            <button
              onClick={() => {
                setActiveView('users');
                setSelectedChat(null);
              }}
              className={`p-3 rounded-xl ${activeView === 'users' ? 'bg-green-500' : 'hover:bg-gray-700'}`}
            >
              <Users size={24} />
            </button>
            <button className="p-3 rounded-xl hover:bg-gray-700">
              <Settings size={24} />
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex flex-1">
          {/* List View (Chats/Users) */}
          <div className={`${selectedChat ? 'hidden lg:block' : ''} w-full lg:w-80 border-r border-gray-800`}>
            {activeView === 'chats' ? (
              <ChatList onSelectChat={setSelectedChat} />
            ) : (
              <UserList onSelectUser={setSelectedChat} />
            )}
          </div>

          {/* Chat View */}
          <ChatView
            chat={selectedChat}
            onBack={() => setSelectedChat(null)}
          />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-around bg-gray-800 p-4 border-t border-gray-700">
          <button onClick={() => setActiveView('chats')}>
            <MessageSquare size={24} />
          </button>
          <button onClick={() => setActiveView('users')}>
            <Users size={24} />
          </button>
          <button>
            <Settings size={24} />
          </button>
        </div>
      </div>
    </div>
  );
} 