'use client';

import React from 'react';
import Image from 'next/image';

const LinksBar: React.FC = () => {
  return (
    <div className="w-16 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen py-6 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4">
        <button className="p-2 rounded-lg hover:bg-gray-800 w-10 h-10">
          <Image 
            src="./Ovals.svg" 
            alt="Link 1" 
            width={40} 
            height={40}
            className="w-full h-full"
          />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 w-10 h-10">
          <Image 
            src="./Logo (2).svg" 
            alt="Link 2" 
            width={40} 
            height={40}
            className="w-full h-full"
          />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 w-10 h-10">
          <Image 
            src="/boxes.svg" 
            alt="Link 3" 
            width={40} 
            height={40}
            className="w-full h-full"
          />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 w-10 h-10">
          <Image 
            src="/person.svg" 
            alt="Link 4" 
            width={40} 
            height={40}
            className="w-full h-full"
          />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 w-10 h-10">
          <Image 
            src="Icon-4.svg" 
            alt="Link 5" 
            width={40} 
            height={40}
            className="w-full h-full"
          />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 w-10 h-10">
          <Image 
            src="Icon-3.svg" 
            alt="Link 6" 
            width={40} 
            height={40}
            className="w-full h-full"
          />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 w-10 h-10">
          <Image 
            src="Icon-2.svg" 
            alt="Link 7" 
            width={40} 
            height={40}
            className="w-full h-full"
          />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 w-10 h-10">
          <Image 
            src="Icon-1.svg" 
            alt="Link 8" 
            width={40} 
            height={40}
            className="w-full h-full"
          />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-800 w-10 h-10">
          <Image 
            src="Icon.svg" 
            alt="Link 9" 
            width={40} 
            height={40}
            className="w-full h-full"
          />
        </button>
      </div>
    </div>
  );
};

export default LinksBar;