"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Cloud, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs, built with the latest technologies and best practices.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to ensure your applications run smoothly and efficiently.",
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.3,
  },
  {
    icon: Sparkles,
    title: "Innovation Consulting",
    description:
      "Strategic guidance to help your organization leverage emerging technologies and stay ahead of the curve.",
    gradient: "from-orange-500 to-rose-500",
    delay: 0.4,
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-40" />

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
              What We Offer
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business and drive sustainable growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: service.delay }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-lg font-semibold text-purple-600 dark:text-purple-400 hover:gap-4 transition-all group"
          >
            View All Services
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
