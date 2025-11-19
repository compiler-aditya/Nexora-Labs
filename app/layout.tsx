import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nexora Labs - Innovation Through Technology",
    template: "%s | Nexora Labs",
  },
  description:
    "Nexora Labs is a cutting-edge technology company specializing in research, development, and innovative solutions for the future.",
  keywords: [
    "technology",
    "innovation",
    "research",
    "development",
    "software",
    "AI",
    "machine learning",
  ],
  authors: [{ name: "Nexora Labs" }],
  creator: "Nexora Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexoralabs.com",
    title: "Nexora Labs - Innovation Through Technology",
    description:
      "Nexora Labs is a cutting-edge technology company specializing in research, development, and innovative solutions for the future.",
    siteName: "Nexora Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Labs - Innovation Through Technology",
    description:
      "Nexora Labs is a cutting-edge technology company specializing in research, development, and innovative solutions for the future.",
    creator: "@nexoralabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
