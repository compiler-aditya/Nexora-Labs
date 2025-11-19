"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Pushing boundaries and exploring new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "Anticipating future trends and preparing our clients for tomorrow's challenges.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Driven by a genuine love for technology and commitment to excellence.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together with our clients as partners to achieve shared success.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "Foundation",
    description: "Nexora Labs was founded with a vision to revolutionize technology solutions.",
  },
  {
    year: "2016",
    title: "First Major Milestone",
    description: "Expanded our team to 20+ members and launched our AI division.",
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "Opened offices in multiple countries and served 100+ international clients.",
  },
  {
    year: "2020",
    title: "Innovation Award",
    description: "Received industry recognition for our groundbreaking cloud solutions.",
  },
  {
    year: "2022",
    title: "Research Lab",
    description: "Established dedicated R&D facilities for emerging technologies.",
  },
  {
    year: "2024",
    title: "Today",
    description: "Leading the industry with 50+ team members and 200+ successful projects.",
  },
];

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years of experience in tech innovation.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Expert in AI and machine learning with a passion for solving complex problems.",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Design",
    bio: "Award-winning designer creating beautiful and functional user experiences.",
  },
  {
    name: "Emily Watson",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in scalable cloud architectures.",
  },
];

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Nexora Labs</h1>
            <p className="text-xl text-muted-foreground">
              We are a team of passionate technologists, innovators, and problem-solvers
              dedicated to creating solutions that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth,
                efficiency, and digital transformation. We believe in creating software that
                not only meets today's needs but anticipates tomorrow's challenges.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To be the global leader in technology innovation, recognized for our
                commitment to excellence, creativity, and the positive impact we make on
                businesses and society. We envision a future where technology seamlessly
                enhances every aspect of life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              A decade of innovation and growth
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-6 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/30 mt-2" />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground">
              The experts driving innovation at Nexora Labs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
