# Edomiyas Tesfaye - Portfolio

<div align="center">
  <img alt="Portfolio" src="./public/portfolio-preview.png" width="90%">
  <p align="center">A modern, responsive, and performant portfolio website built with Next.js 14</p>
  
  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdillionverma%2Fportfolio)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Beautiful UI**: Utilizes shadcn/ui components and Magic UI for stunning design
- **Performance Optimized**: Fast loading and smooth animations with Framer Motion
- **Fully Responsive**: Works perfectly on all devices and screen sizes
- **Easy Customization**: Single configuration file for all your personal information
- **Blog Support**: Built-in blog functionality with MDX
- **SEO Optimized**: Next.js optimized for better search engine visibility
- **Dark Mode**: Built-in dark mode support

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📦 Prerequisites

- Node.js 18.0.0 or later
- pnpm (recommended) or npm/yarn
- Git

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/edomiyastesfaye/edomiyastesfayeportfolio.git
cd edomiyastesfayeportfolio
```

### 2. Install dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### 3. Configure your information

Edit the configuration file with your personal information:

```typescript
// src/data/resume.tsx

const resumeData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other personal information
};
```

### 4. Run the development server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 5. Build for production

```bash
pnpm build
pnpm start
```

## 🛠️ Customization

### Update Personal Information
All personal information is stored in `src/data/resume.tsx`. Update this file with your details, work experience, education, skills, and projects.

### Styling
- Global styles can be found in `src/app/globals.css`
- Tailwind configuration is in `tailwind.config.ts`
- Custom colors and theming can be adjusted in `tailwind.config.ts`

### Add Blog Posts
1. Create a new MDX file in the `content/blog` directory
2. Add the following frontmatter to your blog post:

```markdown
---
title: 'Your Blog Post Title'
date: '2023-11-10'
description: 'A brief description of your blog post'
---

Your blog content here...
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Magic UI](https://magicui.design/) for design inspiration
- [Next.js](https://nextjs.org/) for the amazing framework

## 📬 Contact

For any questions or suggestions, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- Twitter: [@yourhandle](https://twitter.com/yourhandle)
