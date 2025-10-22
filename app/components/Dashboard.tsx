'use client';

import React from 'react';
import TaskColumn from './TaskColumn';
import { useTodo } from '../context';
import Image from 'next/image';

const Dashboard: React.FC = () => {
  const { todos, moveTodo } = useTodo();

  // Filter tasks by status
  const todoTasks = todos.filter(todo => todo.status === 'todo');
  const progressTasks = todos.filter(todo => todo.status === 'progress');
  const doneTasks = todos.filter(todo => todo.status === 'done');

  const handleDrop = (status: 'todo' | 'progress' | 'done') => (taskId: string) => {
    moveTodo(taskId, status);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-5 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, Vincent 👋
        </h1>
        <div className='flex gap-7 justify-between items-center'>
          <div>
            <Image src="/search.svg" alt="Search" width={20} height={20} className="dark:invert" />
          </div>
          <div>
            <Image src="/notifications.svg" alt="Notifications" width={20} height={20} className="dark:invert" />
          </div>
          <div className='flex gap-1 justify-between items-center'>
            <div>
              <Image src="/calender.svg" alt="Calendar" width={20} height={20} className="dark:invert" />
            </div>
            <div>
              <h1 className='text-gray-400 dark:text-gray-500 font-semibold'>19 May 2022</h1>
            </div>
          </div>
          <div>
            <Image src="/profile.svg" alt="Profile" width={20} height={20} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2 border-b border-gray-300 dark:border-gray-700">
        <div className="flex">
          <button className="flex justify-between px-5 gap-2 py-4 border-b-2 border-black dark:border-white">
            <Image src="/board.svg" alt="Board view" width={20} height={20} className="dark:invert" />
            <h1 className='font-bold text-[15px] text-black dark:text-white'>Board view</h1>
          </button>
          <button className="flex justify-between w-36 px-5 gap-2 py-4">
            <Image src="/add.svg" alt="Add view" width={20} height={20} className="dark:invert" />
            <h1 className='font-bold text-gray-500 dark:text-gray-400 text-[15px]'>Add view</h1>
          </button>
        </div>
        
        <div className="flex gap-8 items-center">
          <button className="font-bold text-gray-700 dark:text-gray-300 text-[15px]">
            Filter
          </button>
          <button className="font-bold text-gray-500 dark:text-gray-400 text-[15px]">
            Sort
          </button>
          <button className='px-3 py-4 border border-gray-300 dark:border-gray-600 rounded-full'>
            <Image src="/dots.svg" alt="More options" width={20} height={20} className="dark:invert" />
          </button>
          <button className='bg-black dark:bg-white px-5 py-2 rounded-2xl'>
            <h1 className='text-white dark:text-black text-[13px]'>New template</h1>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[-1%]">
        <TaskColumn 
          title="To Do" 
          count={todoTasks.length}
          tasks={todoTasks}
          status="todo"
          onDrop={handleDrop('todo')}
        />
        
        <TaskColumn 
          title="In Progress" 
          count={progressTasks.length}
          tasks={progressTasks}
          status="progress"
          onDrop={handleDrop('progress')}
        />
        
        <TaskColumn 
          title="Done" 
          count={doneTasks.length}
          tasks={doneTasks}
          status="done"
          onDrop={handleDrop('done')}
        />
      </div>
    </div>
  );
};

export default Dashboard;