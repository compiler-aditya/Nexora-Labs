"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Cloud,
  Sparkles,
  Database,
  Shield,
  Smartphone,
  BarChart,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    shortDesc: "Tailored solutions built with modern technologies and best practices.",
    benefits: [
      "Scalable architecture designed for growth",
      "Clean, maintainable code following industry standards",
      "Comprehensive testing and quality assurance",
      "Ongoing support and maintenance",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Python"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    shortDesc: "Intelligent solutions that learn and adapt to your business needs.",
    benefits: [
      "Automated decision-making processes",
      "Predictive analytics for better insights",
      "Natural language processing capabilities",
      "Computer vision for image recognition",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Keras"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    shortDesc: "Scalable infrastructure and seamless cloud migration services.",
    benefits: [
      "99.9% uptime guarantee",
      "Auto-scaling for peak performance",
      "Cost-optimized infrastructure",
      "Multi-cloud compatibility",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Innovation Consulting",
    shortDesc: "Strategic guidance for leveraging emerging technologies.",
    benefits: [
      "Technology roadmap development",
      "Digital transformation strategy",
      "Innovation workshops and training",
      "Proof of concept development",
    ],
    technologies: ["Blockchain", "IoT", "AR/VR", "Quantum Computing", "5G"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Database,
    title: "Data Engineering",
    shortDesc: "Build robust data pipelines and analytics platforms.",
    benefits: [
      "Real-time data processing",
      "Data warehouse design and implementation",
      "ETL pipeline development",
      "Big data analytics",
    ],
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Apache Spark", "Snowflake"],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    shortDesc: "Comprehensive security solutions to protect your digital assets.",
    benefits: [
      "Security audits and penetration testing",
      "Compliance and regulatory support",
      "24/7 threat monitoring",
      "Incident response planning",
    ],
    technologies: ["SSL/TLS", "OAuth", "JWT", "Encryption", "Firewall"],
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    shortDesc: "Native and cross-platform mobile applications.",
    benefits: [
      "iOS and Android development",
      "Cross-platform solutions",
      "App Store optimization",
      "Push notifications and analytics",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: BarChart,
    title: "Analytics & BI",
    shortDesc: "Transform data into actionable business insights.",
    benefits: [
      "Custom dashboards and reports",
      "Real-time analytics",
      "Data visualization",
      "KPI tracking and monitoring",
    ],
    technologies: ["Tableau", "Power BI", "Google Analytics", "Mixpanel", "Amplitude"],
    gradient: "from-yellow-500 to-orange-500",
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity and scope. A simple web application might take 6-8 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during the initial consultation.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes! We offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements.",
  },
  {
    question: "Can you work with our existing technology stack?",
    answer:
      "Absolutely. We're experienced in working with a wide range of technologies and can integrate seamlessly with your existing infrastructure.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow rigorous quality assurance processes including code reviews, automated testing, continuous integration, and user acceptance testing to ensure the highest quality deliverables.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/20 to-purple-500/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology solutions designed to transform your business
              and drive innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div
                        className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.shortDesc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  title={faq.question}
                  defaultOpen={index === 0}
                >
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help transform your business with our
              technology solutions.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
