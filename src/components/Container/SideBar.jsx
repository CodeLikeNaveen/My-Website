import { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {!isCollapsed && (
            <h2 className="text-xl font-semibold">Sidebar</h2>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>

        {/* Sidebar Content */}
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <span>🏠</span>
                {!isCollapsed && <span className="ml-3">Dashboard</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <span>📊</span>
                {!isCollapsed && <span className="ml-3">Analytics</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <span>⚙️</span>
                {!isCollapsed && <span className="ml-3">Settings</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>This is your main content area.</p>
      </div>
    </div>
  );
};

export default Sidebar;