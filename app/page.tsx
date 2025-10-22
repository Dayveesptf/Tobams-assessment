'use client';

import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LinksBar from './components/LinksBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <div className="flex">
        <LinksBar />
        <Sidebar />
        <div className="flex-1 flex">
          <div className="flex-1 p-6">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}