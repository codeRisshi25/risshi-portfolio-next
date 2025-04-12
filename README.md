# Risshi Raj Sen Portfolio

A modern, interactive portfolio website for Risshi Raj Sen, showcasing skills, projects, and experience in backend development.

## Features

- Interactive terminal interface with custom commands
- Light/dark mode toggle with system preference detection
- Auto-sliding tech stack carousel
- Server status visualization
- Responsive design for all devices
- Animated page transitions and components
- Custom cursor effects

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js
- Lucide React Icons
- Radix UI Components
- next-themes for theme management

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/codeRisshi25/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

\`\`\`
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── terminal/         # Terminal page
├── components/           # React components
│   ├── ui/               # UI components
│   ├── about.tsx         # About section
│   ├── hero.tsx          # Hero section
│   ├── skills.tsx        # Skills section
│   ├── theme-provider.tsx # Theme provider
│   ├── theme-toggle.tsx  # Theme toggle button
│   └── ...               # Other components
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...                   # Config files
\`\`\`

## Customization

### Changing Colors

The color scheme is defined in `app/globals.css` using CSS variables. You can modify the colors by changing the values in the `:root` (light mode) and `.dark` (dark mode) selectors.

### Adding Projects

To add new projects, modify the `getFallbackProjects` function in `app/page.tsx` or update the GitHub username in the `GITHUB_USERNAME` constant to fetch your own repositories.

### Adding Skills

To add new skills, modify the `skills` array in `components/skills.tsx`.

### Theme Customization

The theme system uses next-themes for managing light/dark mode. You can customize the theme behavior in `components/theme-provider.tsx` and the theme toggle UI in `components/theme-toggle.tsx`.

## Deployment

This project can be deployed to Vercel, Netlify, or any other static site hosting service.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FcodeRisshi25%2Fportfolio)

### Static Export

To generate a static export, run:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

The static files will be generated in the `out` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
