import { create } from 'zustand';

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage?: string;
  time: string;
  unread?: number;
  draft?: string;
}

interface ChatStore {
  activeChat: Chat | null;
  drafts: Record<number, string>;
  setActiveChat: (chat: Chat | null) => void;
  setDraft: (chatId: number, message: string) => void;
  chats: Chat[];
}

export const useChatStore = create<ChatStore>((set) => ({
  activeChat: null,
  drafts: {},
  chats: [
    { id: 1, name: 'Design Team', avatar: 'https://i.pravatar.cc/100?img=1', lastMessage: 'New landing page design', time: '9:45 AM', unread: 2 },
    { id: 2, name: 'Puth Tayak', avatar: 'https://i.pravatar.cc/100?img=2', lastMessage: 'Have a great working week!', time: '9:41 AM' },
    { id: 3, name: 'Ahmed Mali', avatar: 'https://i.pravatar.cc/100?img=3', lastMessage: 'This new landing page...', time: '9:15 AM' },
  ],
  setActiveChat: (chat) => set({ activeChat: chat }),
  setDraft: (chatId, message) => 
    set((state) => ({
      drafts: {
        ...state.drafts,
        [chatId]: message
      }
    })),
}));