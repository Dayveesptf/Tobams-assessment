'use client';

import React, { useState } from 'react';
import { useTheme } from '../context';
import DarkModeToggle from './DarkModeToggle';

const Sidebar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const { darkMode, toggleDarkMode } = useTheme();

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(prev => prev === dropdown ? null : dropdown);
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen p-6 flex flex-col justify-between">
      <div>
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 transition-colors">
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        {/* Team Dropdown - Empty */}
        <div className="mb-6">
          <button 
            onClick={() => toggleDropdown('team')}
            className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
          >
            <span className="text-gray-400 dark:text-gray-500 font-semibold">Team</span>
            <svg 
              className={`w-4 h-4 transition-transform ${openDropdown === 'team' ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Projects Dropdown */}
        <div className="mb-6">
          <button 
            onClick={() => toggleDropdown('projects')}
            className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium mb-2"
          >
            <span className="text-black dark:text-white font-semibold">Projects</span>
            <svg 
              className={`w-4 h-4 transition-transform ${openDropdown === 'projects' ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {openDropdown === 'projects' && (
            <div className="ml-4 space-y-1.5 border-l-2 border-gray-200 dark:border-gray-600">
              <div className="relative pl-4 py-2">
                <div className="absolute left-0 top-1/2 w-2 h-[2px] bg-gray-200 dark:bg-gray-600 -translate-y-1/2"></div>
                <div className="flex font-bold items-center justify-between text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer text-sm">
                  <span>All projects (3)</span>
                </div>
              </div>
              
              <div className="relative pl-4 py-2">
                <div className="absolute left-0 top-1/2 w-2 h-[2px] bg-gray-200 dark:bg-gray-600 -translate-y-1/2"></div>
                <div className="flex font-bold rounded-xl items-center justify-between text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 p-2 hover:text-gray-900 dark:hover:text-white cursor-pointer text-sm">
                  <span>Design system</span>
                </div>
              </div>
              
              <div className="relative pl-4 py-2">
                <div className="absolute left-0 top-1/2 w-2 h-[2px] bg-gray-200 dark:bg-gray-600 -translate-y-1/2"></div>
                <div className="flex font-bold items-center justify-between text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer text-sm">
                  <span>User flow</span>
                </div>
              </div>
              
              <div className="relative pl-4 py-2">
                <div className="absolute left-0 top-1/2 w-2 h-[2px] bg-gray-200 dark:bg-gray-600 -translate-y-1/2"></div>
                <div className="flex font-bold items-center justify-between text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer text-sm">
                  <span>Ux research</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tasks Dropdown */}
        <div className="mb-6">
          <button 
            onClick={() => toggleDropdown('tasks')}
            className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium mb-2"
          >
            <span className='text-black dark:text-white font-semibold'>Tasks</span>
            <svg 
              className={`w-4 h-4 transition-transform ${openDropdown === 'tasks' ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {openDropdown === 'tasks' && (
            <div className="ml-4 space-y-1 border-l-2 border-gray-200 dark:border-gray-600">
              <div className="relative pl-4 py-2">
                <div className="absolute left-0 top-1/2 w-2 h-[2px] bg-gray-200 dark:bg-gray-600 -translate-y-1/2"></div>
                <div className="flex font-bold items-center justify-between text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer text-sm">
                  <span>All tasks (11)</span>
                </div>
              </div>
              
              <div className="relative pl-4 py-2">
                <div className="absolute left-0 top-1/2 w-2 h-[2px] bg-gray-200 dark:bg-gray-600 -translate-y-1/2"></div>
                <div className="flex font-bold items-center justify-between text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer text-sm">
                  <span>To do (4)</span>
                </div>
              </div>
              
              <div className="relative pl-4 py-2">
                <div className="absolute left-0 top-1/2 w-2 h-[2px] bg-gray-200 dark:bg-gray-600 -translate-y-1/2"></div>
                <div className="flex font-bold items-center justify-between text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-xl p-2 hover:text-gray-900 dark:hover:text-white cursor-pointer text-sm">
                  <span>In progress (4)</span>
                </div>
              </div>
              
              <div className="relative pl-4 py-2">
                <div className="absolute left-0 top-1/2 w-2 h-[2px] bg-gray-200 dark:bg-gray-600 -translate-y-1/2"></div>
                <div className="flex font-bold items-center justify-between text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer text-sm">
                  <span>Done (3)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Reminders Dropdown - Empty */}
        <div className="mb-6">
          <button 
            onClick={() => toggleDropdown('reminders')}
            className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
          >
            <span className='text-gray-400 dark:text-gray-500 font-semibold'>Reminders</span>
            <svg 
              className={`w-4 h-4 transition-transform ${openDropdown === 'reminders' ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Messengers Dropdown - Empty */}
        <div className="mb-6">
          <button 
            onClick={() => toggleDropdown('messengers')}
            className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
          >
            <span className='text-gray-400 dark:text-gray-500 font-semibold'>Messengers</span>
            <svg 
              className={`w-4 h-4 transition-transform ${openDropdown === 'messengers' ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <DarkModeToggle />
    </div>
  );
};

export default Sidebar;