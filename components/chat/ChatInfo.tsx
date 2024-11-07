'use client';

export default function ChatInfo() {
  return (
    <div className="w-72 border-l border-gray-800 p-4">
      <div className="text-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gray-700 mx-auto mb-3" />
        <h3 className="font-medium">Design Team</h3>
        <p className="text-sm text-gray-400">We're passionate about creating digital product design.</p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Members</h4>
          <div className="space-y-2">
            {/* Список участников */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-700 mr-2" />
                <span>Petri Turyak</span>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
            {/* Добавьте других участников */}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Shared Files</h4>
          <div className="grid grid-cols-3 gap-2">
            {/* Сетка с изображениями */}
            <div className="aspect-square bg-gray-800 rounded-lg" />
            {/* Добавьте другие файлы */}
          </div>
        </div>
      </div>
    </div>
  );
} 