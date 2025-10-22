'use client';

import React from 'react';
import { ThemeProvider } from './context/index';
import { TodoProvider } from './context/index';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TodoProvider>
        {children}
      </TodoProvider>
    </ThemeProvider>
  );
}