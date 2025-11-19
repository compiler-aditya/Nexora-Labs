"use client";

import { motion } from "framer-motion";

export function CodeIllustration() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Code Editor Window */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Window */}
        <rect
          x="50"
          y="100"
          width="400"
          height="300"
          rx="12"
          className="fill-gray-800 dark:fill-gray-900"
          opacity="0.9"
        />

        {/* Window Header */}
        <rect
          x="50"
          y="100"
          width="400"
          height="40"
          rx="12"
          className="fill-gray-700 dark:fill-gray-800"
        />

        {/* Traffic Lights */}
        <circle cx="70" cy="120" r="6" className="fill-red-500" />
        <circle cx="90" cy="120" r="6" className="fill-yellow-500" />
        <circle cx="110" cy="120" r="6" className="fill-green-500" />

        {/* Code Lines */}
        {[
          { y: 160, width: 200, delay: 0.2 },
          { y: 180, width: 280, delay: 0.3 },
          { y: 200, width: 150, delay: 0.4 },
          { y: 220, width: 320, delay: 0.5 },
          { y: 240, width: 180, delay: 0.6 },
          { y: 260, width: 250, delay: 0.7 },
          { y: 280, width: 200, delay: 0.8 },
          { y: 300, width: 300, delay: 0.9 },
        ].map((line, i) => (
          <motion.rect
            key={i}
            x="80"
            y={line.y}
            width={line.width}
            height="12"
            rx="2"
            className={`fill-${i % 3 === 0 ? 'purple' : i % 3 === 1 ? 'blue' : 'green'}-500`}
            opacity="0.6"
            initial={{ width: 0 }}
            animate={{ width: line.width }}
            transition={{ delay: line.delay, duration: 0.5 }}
          />
        ))}
      </motion.g>

      {/* Floating Code Symbols */}
      <motion.text
        x="420"
        y="80"
        className="fill-purple-500 text-4xl font-bold"
        animate={{ y: [80, 70, 80] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {"</>"}
      </motion.text>

      <motion.text
        x="30"
        y="350"
        className="fill-indigo-500 text-3xl font-bold"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {"{}"}
      </motion.text>

      {/* Cursor Blink */}
      <motion.rect
        x="380"
        y="280"
        width="3"
        height="12"
        className="fill-purple-500"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Decorative Circles */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={`circle-${i}`}
          cx={50 + i * 60}
          cy={450}
          r="8"
          className="fill-purple-500"
          opacity="0.2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </svg>
  );
}
