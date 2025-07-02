# Kanban task management
Built a task management app which helps you plan, organise and ideate your tasks effectively and efficiently.

## Features
- Create separate boards - great for managing multiple projects or areas of work.
- Add customisable columns to structure your workflow
- Add tasks with descriptions and subtasks to breakdown larger tasks into smaller subtasks.
- light mode and dark mode

## Tech Stack
- React.JS + Typescript - Frontend
- Shadcn - components
- dnd-kit - drag and drop functionality
- vercel for hosting

## Folder Structure
```
project-root/
├── public/
├── src/
│   ├── components/     # Reusable components
│   ├── constants/      # Constant data
│   ├── context/        # Board and theme context
│   ├── lib/            # Utility functions
│   ├── types/          # Root type file
│   ├── App.css         # Global styles
│   ├── App.tsx         # Root component
│   └── main.tsx        # App entry point
├── package.json
├── package-lock.json
└── README.md
```
## Deployment
- Live-link - https://task-management-app-kohl-xi.vercel.app/
- Deployed via vercel
