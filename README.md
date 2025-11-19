# Nexora Labs Website

A modern, professional website for Nexora Labs - a technology company specializing in research, development, and innovative solutions.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Form Validation:** React Hook Form + Zod
- **Content:** MDX for blog posts
- **Email:** Nodemailer
- **Deployment:** Vercel

## 📋 Features

- ✅ Responsive design (mobile-first approach)
- ✅ Dark mode support with system preference detection
- ✅ SEO optimized with meta tags and Open Graph
- ✅ Dynamic sitemap and robots.txt
- ✅ Blog system with MDX support
- ✅ Contact form with validation
- ✅ Cookie consent banner
- ✅ Animated UI with Framer Motion
- ✅ Accessibility compliant (WCAG 2.1)
- ✅ Performance optimized

## 🏗️ Project Structure

```
nexora-labs/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── services/          # Services page
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── home/             # Home page sections
│   ├── layout/           # Layout components
│   ├── ui/               # UI components (shadcn)
│   ├── cookie-consent.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── content/              # Content files
│   └── blog/            # Blog posts (MDX)
├── lib/                 # Utility functions
│   ├── blog.ts          # Blog utilities
│   └── utils.ts         # General utilities
└── public/              # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Nexora-Labs
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (see Environment Variables section below)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration (for contact form)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
SMTP_FROM=noreply@nexoralabs.com
CONTACT_EMAIL=info@nexoralabs.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

See `.env.example` for more details.

## 🎨 Customization

### Colors

Edit the color scheme in `app/globals.css` and `tailwind.config.ts`.

### Content

- **Home Page:** Edit sections in `components/home/`
- **About Page:** Edit `app/about/page.tsx`
- **Services:** Edit `app/services/page.tsx`
- **Blog Posts:** Add MDX files to `content/blog/`

### Blog Posts

Create a new MDX file in `content/blog/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
author: "Author Name"
category: "Category"
tags: ["tag1", "tag2"]
---

Your content here...
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📊 Performance

This website is optimized for performance:

- Server-side rendering (SSR)
- Image optimization with next/image
- Code splitting
- Lazy loading
- Minimal JavaScript bundle

Target Lighthouse scores: 90+ on all metrics

## 🔒 Security

- HTTPS enforced
- Content Security Policy headers
- XSS protection
- CSRF protection
- Input validation and sanitization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@nexoralabs.com or open an issue in the repository.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- shadcn for the beautiful UI components
- Vercel for hosting and deployment

---

Built with ❤️ by Nexora Labs
