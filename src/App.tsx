import React from 'react';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import InfoPanel from './components/InfoPanel';

function App() {
  return (
    <div className="flex h-screen bg-[#1A1C1E] text-gray-100">
      <Sidebar />
      <ChatArea />
      <InfoPanel />
    </div>
  );
}

export default App;