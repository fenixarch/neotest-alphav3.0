'use client';

import { ArrowLeft, Phone, Video, MoreVertical } from 'lucide-react';

interface ChatViewProps {
  chat: any | null;
  onBack: () => void;
}

export default function ChatView({ chat, onBack }: ChatViewProps) {
  if (!chat) {
    return (
      <div className="hidden lg:flex flex-1 items-center justify-center text-gray-500">
        Select chat or start a new chat
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b border-gray-800">
        <button onClick={onBack} className="lg:hidden mr-2">
          <ArrowLeft size={24} />
        </button>
        <img
          src={chat.avatar || "/avatar-placeholder.png"}
          alt={chat.username}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3 flex-1">
          <div className="font-medium">{chat.username}</div>
          <div className="text-sm text-gray-400">Online</div>
        </div>
        <div className="flex space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Phone size={20} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Video size={20} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Message items will go here */}
      </div>

      {/* Input Area - Only shown when chat is selected */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center bg-gray-800 rounded-full p-2">
          <input
            type="text"
            placeholder="Message"
            className="flex-1 bg-transparent px-3 focus:outline-none"
          />
          <button className="p-2 bg-green-500 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 