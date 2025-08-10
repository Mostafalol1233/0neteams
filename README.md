# ONE TEAM - Soft Skills Mastery Program

A bilingual (English/Arabic) website for ONE TEAM's Soft Skills Mastery program featuring automatic day/night themes and cyberpunk design.

## Features

- 🌐 Bilingual support (English/Arabic) with RTL layout
- 🌙 Automatic day/night theme switching (6 AM - 6 PM light, 6 PM - 6 AM dark)
- 🎨 Cyberpunk design with animated stars and retro grid
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 Focus on ONE TEAM branding with consistent colors

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI**: Tailwind CSS, Radix UI, shadcn/ui
- **Backend**: Express.js, TypeScript
- **State Management**: TanStack Query, React Context
- **Deployment**: Vercel-ready

## Quick Start

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open http://localhost:5000

## Deployment to Vercel

### Method 1: Connect GitHub Repository
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the settings and deploy

### Method 2: Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### Method 3: Drag & Drop
1. Build the project: `npm run build`
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Drag and drop the `dist` folder

## Environment Variables

No environment variables are required for basic functionality. The site works as a static site with client-side features.

## Project Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── lib/         # Utilities and translations
│   │   └── pages/       # Page components
├── server/              # Backend Express server
├── shared/              # Shared types and schemas
└── vercel.json         # Vercel deployment configuration
```

## Features Details

### Automatic Theme Switching
- Light theme: 6 AM - 6 PM
- Dark theme: 6 PM - 6 AM
- Updates every minute
- Smart text contrast adaptation

### Bilingual Support
- English/Arabic language toggle
- RTL layout for Arabic
- Font switching (Inter for English, Noto Sans Arabic for Arabic)
- Consistent branding (ONE TEAM name stays in English)

### Design Elements
- Animated starfield background
- Retro cyberpunk grid overlay
- Gradient text effects
- Glass-morphism cards
- Smooth animations and transitions

## Contact

- Facebook: [ONE TEAM Facebook](https://www.facebook.com/share/p/1B1J1akRUH/)
- Instagram: [ONE TEAM Instagram](https://www.instagram.com/p/DNL1P63o6_R/?igsh=YW93OGtucGV3MWFi)
- Registration: [Program Registration](https://forms.gle/hZqWiy8GRXdG1jMy8)