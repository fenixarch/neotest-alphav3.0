'use client';

import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";

interface User {
  _id: string;
  username: string;
  avatar: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/users?search=${search}`);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const debounce = setTimeout(() => {
      fetchUsers();
    }, 300);

    return () => clearTimeout(debounce);
  }, [search]);

  return (
    <div className="w-72 border-r border-gray-800">
      <div className="p-4">
        <Input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-800 border-gray-700 mb-4"
        />

        <div className="space-y-2">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 cursor-pointer"
            >
              <img
                src={user.avatar}
                alt={user.username}
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="font-medium">{user.username}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 