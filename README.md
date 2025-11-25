# Task Management Dashboard

A modern, feature-rich task management application built with Next.js 15, TypeScript, and Tailwind CSS. Organize your tasks efficiently with an intuitive interface, powerful filtering, and smooth animations.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://spry-task-manager.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github)](https://github.com/Avinashkumar1307/spry)

![Task Dashboard](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)

## Features

### Core Functionality
- **Task CRUD Operations**: Create, read, update, and delete tasks with ease
- **Task Status Management**: Organize tasks by status (Pending, In Progress, Completed)
- **Due Date Tracking**: Set and monitor task deadlines with overdue indicators
- **Local Storage Persistence**: Your tasks are automatically saved locally
- **Real-time Filtering**: Filter tasks by status instantly
- **Flexible Sorting**: Sort tasks by due date (earliest/latest first)

### UI/UX Highlights
- **Modern Design**: Beautiful gradient backgrounds and smooth animations
- **Toast Notifications**: User-friendly feedback for all actions (success, error, info)
- **Progress Tracking**: Visual progress bars showing task completion percentage
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop
- **Dark Mode Support**: Seamless dark/light theme integration
- **Micro-interactions**: Hover effects, transitions, and loading states
- **Empty States**: Helpful messages and CTAs when no tasks exist
- **Staggered Animations**: Cards fade in sequentially for a polished look

### Advanced Features
- **Dedicated Completed Tasks View**: Celebrate your accomplishments on a separate page
- **Task Statistics**: Summary cards showing total, pending, in-progress, and completed tasks
- **Form Validation**: Client-side validation with helpful error messages
- **Loading Skeletons**: Placeholder components for better perceived performance
- **Overdue Detection**: Automatic highlighting of overdue tasks with pulse animation
- **Status Icons**: Visual indicators for each task status

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **State Management**: React Context API
- **Storage**: Local Storage API
- **Icons**: Inline SVG icons (Heroicons style)

## Project Structure

```
spry/
├── app/
│   ├── completed/
│   │   └── page.tsx          # Completed tasks page
│   ├── layout.tsx             # Root layout with providers
│   ├── page.tsx               # Main dashboard page
│   └── globals.css            # Global styles and animations
├── components/
│   ├── LoadingSkeleton.tsx    # Loading placeholder components
│   ├── TaskCard.tsx           # Individual task card component
│   ├── TaskForm.tsx           # Task creation/editing modal
│   ├── TaskSummary.tsx        # Statistics summary cards
│   └── Toast.tsx              # Toast notification component
├── context/
│   ├── TaskContext.tsx        # Task state management
│   └── ToastContext.tsx       # Toast notification management
├── types/
│   └── task.ts                # TypeScript type definitions
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avinashkumar1307/spry.git
   cd spry
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings
   - Click "Deploy"

3. **Configuration**
   - The `vercel.json` file is included to ensure proper Next.js detection
   - No additional configuration needed
   - Environment variables can be added in Vercel dashboard if needed

4. **Automatic Deployments**
   - Every push to `main` branch triggers a production deployment
   - Pull requests get preview deployments automatically

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the .next folder
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**Traditional Hosting:**
```bash
npm run build
npm start
# Runs on port 3000
```

## Usage Guide

### Creating a Task

1. Click the **"Add New Task"** button on the dashboard
2. Fill in the task details:
   - **Title** (required, min 3 characters)
   - **Description** (optional)
   - **Status** (Pending, In Progress, or Completed)
   - **Due Date** (required)
3. Click **"Create Task"** to save

### Editing a Task

1. Click the **"Edit"** button on any task card
2. Modify the task details in the modal
3. Click **"Update Task"** to save changes

### Deleting a Task

1. Click the **"Delete"** button on any task card
2. Confirm the deletion in the dialog
3. Task will be removed with a smooth animation

### Filtering and Sorting

- Use the **Filter** dropdown to show tasks by status
- Use the **Sort** dropdown to order tasks by due date
- Filters update the view instantly without page reload

### Viewing Completed Tasks

- Click **"Completed"** in the navigation
- See all your finished tasks in one place
- Track your completion statistics

## Key Components

### TaskContext

Manages global task state using React Context API:
- `tasks`: Array of all tasks
- `addTask()`: Create a new task
- `updateTask()`: Update existing task
- `deleteTask()`: Remove a task
- `getTaskById()`: Retrieve specific task

### ToastContext

Handles toast notifications across the app:
- `showToast(message, type)`: Display a notification
- Supports types: success, error, info, warning
- Auto-dismiss after 3 seconds

### TaskCard

Displays individual task with:
- Color-coded status bar
- Status badge with icon
- Due date with overdue detection
- Edit and delete actions
- Smooth hover effects

### TaskForm

Modal form for creating/editing tasks:
- Client-side validation
- Loading states
- Error feedback
- Backdrop blur effect

### TaskSummary

Dashboard statistics showing:
- Total tasks count
- Tasks by status (Pending, In Progress, Completed)
- Completion percentage
- Animated progress bars

## Custom Animations

The app includes custom CSS animations defined in `globals.css`:

- `animate-fade-in`: Fade in with upward slide
- `animate-scale-in`: Scale up effect for modals
- `animate-scale-out`: Scale down for deletions
- `animate-slide-in-right`: Slide from right (toasts)
- `animate-slide-in-left`: Slide from left (headers)
- `animate-progress-fill`: Progress bar fill animation
- `animate-shimmer`: Loading skeleton shimmer

## Data Persistence

Tasks are automatically saved to browser's Local Storage:

- **Storage Key**: `task-management-tasks`
- **Auto-save**: On every create, update, or delete
- **Auto-load**: On application startup
- **Data Format**: JSON stringified array of task objects

**Note**: Data is stored locally in your browser. Clearing browser data will remove all tasks.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- **Code Splitting**: Automatic route-based splitting with Next.js
- **Lazy Loading**: Components load on demand
- **Memoization**: Filtered/sorted tasks use `useMemo`
- **CSS Animations**: GPU-accelerated transforms
- **Small Bundle**: Minimal dependencies, optimized build

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository from [https://github.com/Avinashkumar1307/spry](https://github.com/Avinashkumar1307/spry)
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly before submitting
- Update documentation if needed
- Ensure the build passes: `npm run build`
- Check for linting errors: `npm run lint`

## Future Enhancements

Potential features for future development:

- [ ] Task categories/tags
- [ ] Priority levels (High, Medium, Low)
- [ ] Task search functionality
- [ ] Export tasks (CSV, JSON)
- [ ] Recurring tasks
- [ ] Task attachments
- [ ] Multi-user support with authentication
- [ ] Cloud sync (Firebase, Supabase)
- [ ] Task reminders/notifications
- [ ] Drag-and-drop task reordering
- [ ] Task templates
- [ ] Analytics and insights

## Links

- **Live Demo**: [https://spry-task-manager.vercel.app](https://spry-task-manager.vercel.app)
- **Repository**: [https://github.com/Avinashkumar1307/spry](https://github.com/Avinashkumar1307/spry)
- **Issues**: [Report a bug](https://github.com/Avinashkumar1307/spry/issues)
- **Pull Requests**: [Submit a PR](https://github.com/Avinashkumar1307/spry/pulls)

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Avinash Kumar**
- GitHub: [@Avinashkumar1307](https://github.com/Avinashkumar1307)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons inspired by [Heroicons](https://heroicons.com/)
- Typography using system fonts for optimal performance
- Developed with assistance from [Claude Code](https://claude.com/claude-code)

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**

⭐ Star this repository if you find it helpful!
