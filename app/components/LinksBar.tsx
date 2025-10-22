'use client';

import React from 'react';

const LinksBar: React.FC = () => {
  return (
    <div className="w-16 bg-black border-r min-h-screen p-4">
      <div className="flex flex-col items-center space-y-4">
        <button className="p-2 rounded-lg hover:bg-gray-800  w-10 h-10">
          <img src="/Ovals.svg" alt="Link 1" className="w-full h-full" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 w-10 h-10">
          <img src="/Logo (2).svg" alt="Link 2" className="w-full h-full" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800  w-10 h-10">
          <img src="/boxes.svg" alt="Link 3" className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 w-10 h-10">
          <img src="/person.svg" alt="Link 3" className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800  w-10 h-10">
          <img src="/Icon-4.svg" alt="Link 3" className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800  w-10 h-10">
          <img src="/Icon-3.svg" alt="Link 3" className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800  w-10 h-10">
          <img src="/Icon-2.svg" alt="Link 3" className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800  w-10 h-10">
          <img src="/Icon-1.svg" alt="Link 3" className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800  w-10 h-10">
          <img src="/Icon.svg" alt="Link 3" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default LinksBar;