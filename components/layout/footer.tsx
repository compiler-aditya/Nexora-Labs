import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Sparkles, ArrowRight } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "GitHub", href: "#", icon: Github },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Email", href: "mailto:info@nexoralabs.com", icon: Mail },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border/50">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gradient">
                Nexora Labs
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Innovating the future of technology through research, development,
              and cutting-edge solutions that transform businesses worldwide.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-11 h-11 rounded-xl bg-secondary hover:bg-purple-100 dark:hover:bg-purple-900/30 flex items-center justify-center text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 border border-border hover:border-purple-500 hover:shadow-lg group"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest news and updates delivered to your inbox.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:gap-3 transition-all group"
            >
              Subscribe
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Nexora Labs. All rights reserved. Built with{" "}
              <span className="text-gradient font-semibold">passion</span> and{" "}
              <span className="text-gradient font-semibold">innovation</span>.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <span>Made with Next.js</span>
              <span className="hidden md:inline">•</span>
              <span>Powered by Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
