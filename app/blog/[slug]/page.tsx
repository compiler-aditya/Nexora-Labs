import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

// Sample blog post data (in a real app, this would come from getPostBySlug())
const samplePosts: Record<string, any> = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js 14: A Comprehensive Guide",
    date: "2024-01-15",
    author: "Sarah Chen",
    category: "Web Development",
    readingTime: "5 min read",
    content: `
# Getting Started with Next.js 14

Next.js 14 represents a significant leap forward in web development, introducing powerful new features and optimizations that make building modern web applications easier than ever.

## What's New in Next.js 14?

The latest version of Next.js brings several exciting improvements:

- **Enhanced App Router**: The App Router is now stable and offers improved performance
- **Server Actions**: Simplified data mutations without API routes
- **Partial Prerendering**: Combine static and dynamic content seamlessly
- **Improved Developer Experience**: Faster builds and better error messages

## Setting Up Your First Project

Getting started with Next.js 14 is straightforward. This will create a new Next.js application with all the latest features configured and ready to use.

## Key Features to Explore

### 1. App Router

The App Router provides a new way to structure your application with improved layouts, loading states, and error handling.

### 2. Server Components

By default, components in the app directory are Server Components, which means they render on the server and send minimal JavaScript to the client.

### 3. Data Fetching

Next.js 14 introduces new patterns for fetching data that work seamlessly with the App Router and React Server Components.

## Conclusion

Next.js 14 is a powerful framework that makes building modern web applications a joy. Whether you're building a small personal project or a large-scale application, Next.js has the tools and features you need.
    `,
  },
  "ai-machine-learning-trends": {
    title: "AI and Machine Learning Trends in 2024",
    date: "2024-01-20",
    author: "Alex Johnson",
    category: "AI & ML",
    readingTime: "7 min read",
    content: `
# AI and Machine Learning Trends in 2024

Artificial Intelligence and Machine Learning continue to evolve at a rapid pace. Here are the key trends shaping the industry in 2024.

## 1. Large Language Models (LLMs)

LLMs have revolutionized how we interact with technology. From chatbots to code generation, these models are becoming increasingly sophisticated and accessible.

### Key Developments:
- More efficient training methods
- Better context understanding
- Multimodal capabilities

## 2. Edge AI

Moving AI processing to edge devices is becoming increasingly important:

- **Faster Response Times**: No need to send data to the cloud
- **Privacy**: Data stays on the device
- **Reliability**: Works without internet connection

## 3. Responsible AI

As AI becomes more prevalent, ensuring ethical and responsible use is crucial.

## The Future of AI

The future of AI is bright, with innovations in:

- Quantum machine learning
- Automated machine learning (AutoML)
- Explainable AI (XAI)
- AI-powered scientific discovery

## Conclusion

Staying updated with AI trends is essential for businesses looking to leverage these technologies. At Nexora Labs, we're committed to helping our clients navigate this exciting landscape.
    `,
  },
  "cloud-computing-best-practices": {
    title: "Cloud Computing Best Practices for Modern Applications",
    date: "2024-01-25",
    author: "Emily Watson",
    category: "Cloud Computing",
    readingTime: "6 min read",
    content: `
# Cloud Computing Best Practices

Cloud computing has become the backbone of modern applications. Here are essential best practices to ensure your cloud infrastructure is secure, scalable, and cost-effective.

## 1. Design for Scalability

Your application should be able to handle varying loads:

- Use auto-scaling groups
- Implement load balancing
- Design stateless services
- Utilize containerization

## 2. Security First

Security should be a top priority with proper encryption, IAM policies, and regular security audits.

## 3. Cost Optimization

Managing cloud costs effectively:

- Right-size your resources
- Use reserved instances for predictable workloads
- Implement auto-shutdown for development environments
- Monitor and analyze usage patterns

## 4. Monitoring and Logging

Comprehensive monitoring is essential:

- Set up centralized logging
- Implement distributed tracing
- Create meaningful alerts
- Use observability tools

## 5. Disaster Recovery

Always have a backup plan:

- Regular automated backups
- Multi-region deployment
- Documented recovery procedures
- Regular disaster recovery drills

## Conclusion

Following these best practices will help you build robust, secure, and cost-effective cloud applications. At Nexora Labs, we help businesses implement these practices to maximize their cloud investment.
    `,
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = samplePosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.split('\n').map((line: string) => {
              if (line.startsWith('# ')) return `<h1>${line.substring(2)}</h1>`;
              if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`;
              if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`;
              if (line.startsWith('- **')) {
                const match = line.match(/- \*\*(.*?)\*\*: (.*)/);
                if (match) return `<li><strong>${match[1]}</strong>: ${match[2]}</li>`;
              }
              if (line.startsWith('- ')) return `<li>${line.substring(2)}</li>`;
              if (line.trim() === '') return '<br/>';
              return `<p>${line}</p>`;
            }).join('') }} />
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-center text-muted-foreground">
              Thank you for reading! Share this article with your network.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
