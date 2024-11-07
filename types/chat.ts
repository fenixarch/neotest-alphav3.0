export interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
  attachments?: string[];
}

export interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  members: User[];
  messages: Message[];
}

export interface User {
  id: number;
  name: string;
  avatar?: string;
  status: 'online' | 'offline';
} 