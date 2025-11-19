"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Zap, Shield, Layers } from "lucide-react";

const technologies = [
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "React", icon: Layers },
  { name: "Node.js", icon: Zap },
  { name: "PostgreSQL", icon: Database },
  { name: "Security", icon: Shield },
];

export function TechSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Icon className="h-12 w-12 mb-3 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-center">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
