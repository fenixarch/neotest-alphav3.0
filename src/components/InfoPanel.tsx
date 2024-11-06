import React from 'react';
import { X, Link2, Image } from 'lucide-react';

const members = [
  { id: 1, name: 'Puth Tayak', avatar: 'https://i.pravatar.cc/100?img=2', status: 'online' },
  { id: 2, name: 'Ahmed Mali', avatar: 'https://i.pravatar.cc/100?img=3', status: 'online' },
  { id: 3, name: 'Milla Nose', avatar: 'https://i.pravatar.cc/100?img=4', status: 'offline' },
];

const sharedFiles = [
  { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=200&auto=format&fit=crop&q=60' },
  { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=60' },
  { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&auto=format&fit=crop&q=60' },
];

const InfoPanel = () => {
  return (
    <div className="w-80 border-l border-gray-800 p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold">Design Team</h2>
        <button className="p-2 hover:bg-gray-800 rounded-lg">
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-400 mb-4">
          We're passionate about creating digital product design.
        </p>
        <div className="flex items-center text-sm text-gray-400">
          <Link2 className="w-4 h-4 mr-2" />
          <span>designteam.com</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-semibold mb-4">Members</h3>
        <div className="space-y-3">
          {members.map((member) => (
            <div key={member.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span
                    className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${
                      member.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                    } border-2 border-[#1A1C1E]`}
                  />
                </div>
                <span className="text-sm">{member.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Shared Files</h3>
        <div className="grid grid-cols-3 gap-2">
          {sharedFiles.map((file) => (
            <div
              key={file.id}
              className="aspect-square rounded-lg overflow-hidden bg-gray-800"
            >
              <img
                src={file.url}
                alt="Shared file"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;