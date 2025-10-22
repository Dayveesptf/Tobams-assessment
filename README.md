# Modern Task Management Dashboard

A sleek, modern task management dashboard built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful dark mode, drag-and-drop functionality, and interactive 3D elements.

##  Live Demo

**[Deployed on Vercel]** - [Add your Vercel deployment URL here]

##  Technologies Used

- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber (Three.js)
- **State Management**: React Context API
- **Deployment**: Vercel
- **Icons**: Custom SVG icons with dark mode support

##  Key Features

- **Dark/Light Mode Toggle** - Seamless theme switching with persistent preferences
- **Responsive Design** - Optimized for desktop and tablet devices
- **Custom Scrollbars** - Dark mode-optimized scrolling experience
- **Smooth Animations** - Hover effects and transition animations


### Key Files Description

- **`Dashboard.tsx`**: Main container managing task state and column layout
- **`TaskColumn.tsx`**: Individual column with drop handlers and task rendering
- **`TaskCard.tsx`**: Draggable task items with progress visualization
- **`Sidebar.tsx`**: Navigation with collapsible dropdown sections
- **`context.tsx`**: Global state management for tasks
- **`StatusCube.tsx`**: 3D interactive cubes with status-based coloring