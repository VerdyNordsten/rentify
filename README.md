# Modern React Starter Kit

A feature-rich, production-ready starter template for building modern web applications with React, TypeScript, and Tailwind CSS. This starter kit comes pre-configured with all the essential tools and best practices to help you kickstart your next project.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

⚡ **Vite** – A blazing-fast development environment with instant Hot Module Replacement (HMR)

🎨 **Shadcn UI** – Beautiful, customizable, and accessible UI components built on Radix UI

🎨 **Tailwind CSS v4** – A utility-first CSS framework for rapid UI development with the latest features

⚛️ **React 19 + TypeScript** – A type-safe and efficient way to build scalable applications

🚏 **React Router v7** – Client-side routing to create dynamic, multi-page applications

🔍 **ESLint + Prettier** – Pre-configured for clean and maintainable code

🌗 **Dark Mode Support** – Integrated theme toggling between light and dark mode with CSS variables

📦 **Path Aliases** – Clean imports with `@/` prefix for better code organization

🎯 **Component Library Ready** – Pre-configured with Shadcn UI components and Lucide icons

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/starter-kit.git
cd starter-kit
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🏗️ Project Structure

```
starter-kit/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Project assets
│   │   └── react.svg      # React logo
│   ├── lib/               # Utility functions
│   │   └── utils.ts       # Tailwind utility function
│   ├── App.css            # App-specific styles
│   ├── App.tsx            # Main App component
│   ├── index.css          # Global styles and Tailwind imports
│   ├── main.tsx           # Application entry point
│   └── vite-env.d.ts      # Vite type definitions
├── components.json        # Shadcn UI configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── tsconfig.app.json      # TypeScript app configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript Node configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Customization

### Adding Shadcn UI Components

This starter kit is pre-configured with Shadcn UI. To add new components:

```bash
npx shadcn@latest add [component-name]
```

For example, to add a button component:

```bash
npx shadcn@latest add button
```

### Theming

The starter kit supports both light and dark themes. The theme is implemented using CSS variables defined in `src/index.css`. To customize the theme:

1. Modify the CSS variables in the `:root` selector for light theme
2. Modify the CSS variables in the `.dark` selector for dark theme

### Path Aliases

The project is configured with path aliases for cleaner imports:

```typescript
import { utils } from '@/lib/utils' // Instead of '../../../lib/utils'
```

Available aliases:
- `@/` → `./src/`
- `@/components` → `./src/components`
- `@/lib` → `./src/lib`
- `@/hooks` → `./src/hooks`

## 🔧 Configuration

### Vite Configuration

The Vite configuration is located in `vite.config.ts` and includes:
- React plugin
- Tailwind CSS plugin
- Path aliases configuration

### ESLint Configuration

The ESLint configuration is located in `eslint.config.js` and includes:
- TypeScript support
- React hooks rules
- React refresh rules

### TypeScript Configuration

The TypeScript configuration is split into multiple files:
- `tsconfig.json` - Base configuration with path aliases
- `tsconfig.app.json` - Application-specific configuration
- `tsconfig.node.json` - Node.js-specific configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - The build tool that makes development fast and enjoyable
- [React](https://reactjs.org/) - The JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs
- [Shadcn UI](https://ui.shadcn.com/) - Beautifully designed components built with Radix UI and Tailwind CSS
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit made by the community

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)