'use client';

import React from 'react';
import TaskCard from './TaskCard';
import { Todo } from '../context';

interface TaskColumnProps {
  title: string;
  count: number;
  tasks: Todo[];
  status: 'todo' | 'progress' | 'done';
  onDrop: (taskId: string) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, count, tasks, status, onDrop }) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    onDrop(taskId);
  };

  const handleDropboxDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    onDrop(taskId);
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col h-[570px]"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="p-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">{title}</h3>
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              {count}
            </span>
          </div>
          <span className="flex gap-2 justify-between font-bold items-center text-sm font-medium text-black dark:text-white cursor-pointer">
            <img src="/add.svg" alt="Add task" className="w-5 h-5 dark:invert" />
            <h1 className='font-bold'>Add new task</h1>
          </span>
        </div>
      </div>

      <div className="p-4 space-y-4 flex-1 mt-[-10px] overflow-y-auto scrollbar-dark">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} status={status} />
        ))}
        
        {tasks.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            Drop tasks here
          </div>
        )}
      </div>

      {/* Special Dropbox for Done column */}
      {status === 'done' && (
        <div 
          className="p-4 flex-shrink-0"
          onDragOver={handleDragOver}
          onDrop={handleDropboxDrop}
        >
          <div className="h-35 flex items-center text-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6  transition-colors cursor-pointer">
            <div className="flex mx-auto items-center justify-center text-center space-y-2">
              <p className="text-gray-500 text-center dark:text-gray-400 font-semibold text-sm">
                Drag your task here
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskColumn;