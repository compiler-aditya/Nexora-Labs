"use client";

import { motion } from "framer-motion";

export function AIIllustration() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Neural Network Background */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Nodes */}
        {[
          { cx: 100, cy: 150, delay: 0 },
          { cx: 150, cy: 100, delay: 0.1 },
          { cx: 200, cy: 180, delay: 0.2 },
          { cx: 250, cy: 120, delay: 0.3 },
          { cx: 300, cy: 200, delay: 0.4 },
          { cx: 350, cy: 150, delay: 0.5 },
          { cx: 400, cy: 180, delay: 0.6 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="8"
            className="fill-purple-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ delay: node.delay, duration: 0.5 }}
          />
        ))}

        {/* Connections */}
        <motion.path
          d="M100,150 L150,100 L200,180 L250,120 L300,200 L350,150 L400,180"
          className="stroke-purple-400/30"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Brain */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <ellipse
          cx="250"
          cy="300"
          rx="120"
          ry="140"
          className="fill-gradient-to-br from-purple-500 to-indigo-600"
          opacity="0.1"
        />
        <path
          d="M200,250 Q220,230 240,250 T280,250 Q300,230 320,250"
          className="stroke-purple-500"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M180,280 Q200,260 220,280 T260,280 Q280,260 300,280 T340,280"
          className="stroke-indigo-500"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M190,310 Q210,290 230,310 T270,310 Q290,290 310,310"
          className="stroke-violet-500"
          strokeWidth="3"
          fill="none"
        />
      </motion.g>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.circle
          key={`particle-${i}`}
          cx={Math.random() * 500}
          cy={Math.random() * 500}
          r={Math.random() * 4 + 2}
          className="fill-purple-400"
          opacity={0.3}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </svg>
  );
}
