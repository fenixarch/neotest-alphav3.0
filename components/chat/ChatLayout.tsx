import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { 
  MessageSquare, 
  Users, 
  Settings, 
  User 
} from 'lucide-react';

interface ChatLayoutProps {
  children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('chats');

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Vertical Navigation Bar */}
      <div className="w-20 bg-gray-800 flex flex-col items-center py-6 space-y-8">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img 
            src={session?.user?.image || '/avatar-placeholder.png'} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <nav className="flex flex-col space-y-4">
          <button
            onClick={() => setActiveTab('chats')}
            className={`p-3 rounded-xl ${activeTab === 'chats' ? 'bg-green-500' : 'hover:bg-gray-700'}`}
          >
            <MessageSquare size={24} />
          </button>
          
          <button
            onClick={() => setActiveTab('users')}
            className={`p-3 rounded-xl ${activeTab === 'users' ? 'bg-green-500' : 'hover:bg-gray-700'}`}
          >
            <Users size={24} />
          </button>
          
          <button
            onClick={() => setActiveTab('settings')}
            className={`p-3 rounded-xl ${activeTab === 'settings' ? 'bg-green-500' : 'hover:bg-gray-700'}`}
          >
            <Settings size={24} />
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex">
        {activeTab === 'chats' && <ChatList />}
        {activeTab === 'users' && <UserList />}
        {activeTab === 'settings' && <SettingsPanel />}
        {children}
      </div>
    </div>
  );
} 