'use client';

import React, { useState, useEffect } from 'react';
import { Todo } from '../context';
import CubeWidget from './CubeWidget';
import Image from 'next/image';

interface TaskCardProps {
  task: Todo;
  status: 'todo' | 'progress' | 'done';
}

const TaskCard: React.FC<TaskCardProps> = ({ task, status }) => {
  const [progress, setProgress] = useState({ width: '0%', text: '0/10', color: 'bg-blue-500' });
  const [mounted, setMounted] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('taskId', task.id);
  };

  const getProgress = () => {
    const taskIdNum = parseInt(task.id) || 1;
    
    switch (status) {
      case 'todo': 
        const todoScore = (taskIdNum % 4); // 0-3 based on task ID
        return { 
          width: `${(todoScore / 10) * 100}%`, 
          text: `${todoScore}/10`, 
          color: 'bg-red-500' 
        };
      case 'progress': 
        const progressScore = (taskIdNum % 6) + 4; // 4-9 based on task ID
        return { 
          width: `${(progressScore / 10) * 100}%`, 
          text: `${progressScore}/10`, 
          color: 'bg-orange-500' 
        };
      case 'done': 
        return { 
          width: '100%', 
          text: '10/10', 
          color: 'bg-green-500' 
        };
      default: 
        return { width: '0%', text: '0/10', color: 'bg-blue-500' };
    }
  };

  const getDateStyle = () => {
    switch (status) {
      case 'todo': 
        return 'bg-red-50 text-red-600 border border-gray-600 dark:bg-gray-700 dark:text-gray-400';
      case 'progress': 
        return 'bg-orange-50 text-orange-600 border border-gray-600 dark:bg-gray-700 dark:text-gray-400';
      case 'done': 
        return 'bg-gray-200 text-gray-700 border border-gray-600 dark:bg-gray-700 dark:text-gray-400';
      default: 
        return 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-500';
    }
  };

  const isEvenId = parseInt(task.id) % 2 === 0;

  const dateStyle = getDateStyle();

  useEffect(() => {
    setMounted(true);
    setProgress(getProgress());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, task.id]);

  if (!mounted) {
    return (
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg p-4 border mt-[-10px] border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-move"
        draggable
        onDragStart={handleDragStart}
      >
        <div className="flex items-center justify-between mb-[-2%]">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {task.text}
          </h4>
          <div className="border-gray-200 dark:border-gray-700 px-3 py-4 border-2 rounded-full">
            <Image src="/dots.svg" alt="Options" width={20} height={20} className="dark:invert" />
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {task.purpose}
        </p>
        
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-500 dark:text-gray-500 flex justify-between items-center gap-2">
            <Image src="/bars.svg" alt="" width={16} height={16} className="dark:invert" />
            Progress
            <CubeWidget status={status} />
          </span>
          <span className="font-medium text-gray-700 dark:text-gray-300">Loading...</span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
          <div className="h-2 rounded-full bg-gray-300 transition-all duration-300" style={{ width: '0%' }}></div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className={`text-xs py-1 px-2 rounded-xl ${dateStyle}`}>
            {task.createdAt}
          </span>
          <div className="flex space-x-1 justify-end">
            {isEvenId ? (
              <Image src="/Items.svg" alt="Even ID" width={80} height={28} className="dark:invert" />
            ) : (
              <Image src="/Right.svg" alt="Odd ID" width={80} height={28} className="dark:invert" />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg p-4 border mt-[-10px] border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-move"
      draggable
      onDragStart={handleDragStart}
    >
      <div className="flex items-center justify-between mb-[-2%]">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          {task.text}
        </h4>
        <div className="border-gray-200 dark:border-gray-700 px-3 py-4 border-2 rounded-full">
          <Image src="/dots.svg" alt="Options" width={20} height={20} className="dark:invert" />
        </div>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {task.purpose}
      </p>
      
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-gray-500 dark:text-gray-500 flex justify-between items-center gap-2">
          <Image src="/bars.svg" alt="" width={16} height={16} className="dark:invert" />
          Progress
          <CubeWidget status={status} />
        </span>
        <span className="font-medium text-gray-700 dark:text-gray-300">{progress.text}</span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
        <div 
          className={`h-2 rounded-full ${progress.color} transition-all duration-300`}
          style={{ width: progress.width }}
        ></div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`text-xs py-1 px-2 rounded-xl ${dateStyle}`}>
          {task.createdAt}
        </span>
        <div className="flex space-x-1 justify-end">
          {isEvenId ? (
            <Image src="/Items.svg" alt="Even ID" width={80} height={28} className="dark:invert" />
          ) : (
            <Image src="/Right.svg" alt="Odd ID" width={80} height={28} className="dark:invert" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;