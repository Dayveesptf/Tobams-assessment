'use client';

import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const newDarkMode = !html.classList.contains('dark');
    
    if (newDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
    
    setIsDark(newDarkMode);
  };

  return (
    <div className="w-full">
      <div className="p-3 rounded-lg">
        <button 
          onClick={toggleDarkMode}
          className="relative w-full h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center transition-colors"
        >
          {/* Sliding ball*/}
          <div 
            className={`absolute top-1 bottom-1 rounded-full shadow-sm transition-transform duration-300 ease-in-out ${
              isDark ? 'translate-x-[calc(100%-4px)] bg-gray-400' : 'translate-x-1 bg-white'
            }`}
            style={{ width: 'calc(50%)' }}
          />
          
          {/* Light side */}
          <div className={`relative z-10 flex-1 flex items-center justify-center space-x-2 py-1 transition-colors duration-300 ${
            !isDark ? 'text-gray-900' : 'text-gray-400'
          }`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-sm">Light</span>
          </div>
          
          {/* Dark side */}
          <div className={`relative z-10 flex-1 flex items-center justify-center space-x-2 py-1 transition-colors duration-300 ${
            isDark ? 'text-gray-900' : 'text-gray-400'
          }`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <span className="font-semibold text-sm">Dark</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DarkModeToggle;