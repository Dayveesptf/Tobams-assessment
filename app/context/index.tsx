'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('darkMode'));
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  purpose: string;
  createdAt: string;
  status: 'todo' | 'progress' | 'done';
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string, purpose: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  moveTodo: (id: string, newStatus: 'todo' | 'progress' | 'done') => void;
  completedCount: number;
  totalCount: number;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      text: 'Design new ui presentation',
      purpose: 'Dribble marketing',
      completed: false,
      createdAt: '24 Aug 2022',
      status: 'todo',
    },
    {
      id: '2',
      text: 'Add more ui/ux mockups',
      completed: false,
      purpose: 'Pinterest promotion',
      createdAt: '25 Aug 2022',
      status: 'todo',
    },
    {
      id: '3',
      text: 'Design few mobile screens',
      completed: false,
      purpose: 'Dropbox mobile app',
      createdAt: '26 Aug 2022',
      status: 'todo',
    },
    {
      id: '4',
      text: 'Create a tweet and promote',
      completed: false,
      purpose: 'Twitter marketing',
      createdAt: '27 Aug 2022',
      status: 'todo',
    },
    {
      id: '5',
      text: 'Design system update',
      purpose: 'Oreo website project',
      completed: false,
      createdAt: '2 Nov 2022',
      status: 'progress',
    },
    {
      id: '6',
      text: 'Create brand guideline',
      purpose: 'Oreo branding project',
      completed: false,
      createdAt: '5 Nov 2022',
      status: 'progress',
    },
    {
      id: '7',
      text: 'Create wireframe for ios app',
      purpose: 'Oreo ios app product',
      completed: false,
      createdAt: '25 Nov 2022',
      status: 'progress',
    },
    {
      id: '8',
      text: 'Add product to the market',
      purpose: 'Ui8 marketplace',
      completed: true,
      createdAt: '3 Jan 2023',
      status: 'done',
    },
    {
      id: '9',
      text: 'Launch product promotion',
      purpose: 'Kickstarter campaign',
      completed: true,
      createdAt: '3 Jan 2023',
      status: 'done',
    },
  ]);

  const addTodo = (text: string, purpose: string = 'General task') => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      purpose,
      completed: false,
      createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'todo',
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const moveTodo = (id: string, newStatus: 'todo' | 'progress' | 'done') => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id 
          ? { 
              ...todo, 
              status: newStatus,
              completed: newStatus === 'done'
            } 
          : todo
      )
    );
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        moveTodo,
        completedCount,
        totalCount,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};