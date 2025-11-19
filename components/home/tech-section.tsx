"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Zap, Shield, Layers, Sparkles, Cloud, Cpu } from "lucide-react";
import { AIIllustration } from "@/components/illustrations/ai-illustration";
import { CodeIllustration } from "@/components/illustrations/code-illustration";
import { CloudIllustration } from "@/components/illustrations/cloud-illustration";

const technologies = [
  { name: "Next.js", icon: Globe, color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", icon: Code2, color: "from-blue-600 to-blue-800" },
  { name: "React", icon: Layers, color: "from-cyan-500 to-blue-600" },
  { name: "Node.js", icon: Zap, color: "from-green-600 to-green-800" },
  { name: "PostgreSQL", icon: Database, color: "from-blue-500 to-indigo-600" },
  { name: "AI/ML", icon: Cpu, color: "from-purple-600 to-pink-600" },
  { name: "Cloud", icon: Cloud, color: "from-sky-500 to-blue-600" },
  { name: "Security", icon: Shield, color: "from-red-600 to-rose-700" },
];

export function TechSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-grid opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Our Tech Arsenal
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Powered by <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and industry-leading tools to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Illustrations Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 p-8 border border-purple-200 dark:border-purple-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 opacity-60">
              <AIIllustration />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                AI & Machine Learning
              </h3>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Intelligent solutions that adapt and learn
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-8 border border-blue-200 dark:border-blue-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 opacity-60">
              <CodeIllustration />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                Modern Development
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Clean, scalable, and maintainable code
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-900/10 dark:to-sky-900/10 p-8 border border-cyan-200 dark:border-cyan-800"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 opacity-60">
              <CloudIllustration />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mb-2">
                Cloud Infrastructure
              </h3>
              <p className="text-sm text-cyan-700 dark:text-cyan-300">
                Scalable and reliable cloud solutions
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className="relative mb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg mx-auto`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  </div>

                  {/* Name */}
                  <h4 className="text-center font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {tech.name}
                  </h4>

                  {/* Decorative Dots */}
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Sparkle Effect */}
                <motion.div
                  className="absolute -top-2 -right-2 text-yellow-400 opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </motion.div>
            <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">
              Always exploring new technologies and frameworks
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
