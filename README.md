# Ishwari Pawar - Developer Portfolio

A modern, responsive developer portfolio website built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design** - Clean, minimal UI with dark theme
- 📱 **Fully Responsive** - Optimized for all devices
- ✨ **Smooth Animations** - Powered by Framer Motion
- 📝 **Blog System** - Dynamic blog with markdown support
- 🚀 **Vercel Ready** - Optimized for deployment on Vercel
- ⚡ **Fast Performance** - Built with Next.js 14 App Router

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: Markdown files with gray-matter
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio3
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio3/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   ├── page.tsx       # Dynamic blog post page
│   │   │   └── not-found.tsx  # 404 page for blog posts
│   │   └── page.tsx            # Blog listing page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── projects/
│   │   └── page.tsx            # Projects page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/
│   ├── BlogHeaderClient.tsx    # Blog header component
│   ├── BlogListClient.tsx      # Blog list component
│   ├── PrimaryButton.tsx       # Primary button component
│   ├── SecondaryButton.tsx     # Secondary button component
│   └── SocialIcons.tsx         # Social media icons
├── content/
│   └── blog/                   # Blog markdown files
│       ├── how-i-became-a-laravel-developer.md
│       ├── building-rest-apis-with-laravel.md
│       └── my-journey-to-mnc-preparation.md
├── lib/
│   └── blog.ts                 # Blog utility functions
└── public/                     # Static assets
```

## Adding Blog Posts

1. Create a new markdown file in `content/blog/` directory
2. Add frontmatter with required fields:
```markdown
---
title: "Your Blog Post Title"
date: "2024-01-01"
description: "A brief description of your post"
---

Your blog content here...
```

3. The blog post will automatically appear on the blog page

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy" and your site will be live!

### Manual Deployment

1. Build the production version:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Customization

### Update Personal Information

Edit the following files to update your information:

- `app/page.tsx` - Homepage content
- `app/contact/page.tsx` - Contact information
- `components/SocialIcons.tsx` - Social media links

### Change Theme Colors

Modify `tailwind.config.ts` to customize colors and theme.

### Add New Pages

Create new directories in `app/` folder following Next.js App Router conventions.

## Performance Optimization

- Static generation for blog posts
- Optimized images (when added)
- Code splitting with Next.js
- CSS optimization with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Ishwari Pawar - PHP Laravel Developer
- Location: India
- Email: ishwari@example.com

---

Built with ❤️ using Next.js and Tailwind CSS

