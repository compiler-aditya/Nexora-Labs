"use client";

import { motion } from "framer-motion";

export function CloudIllustration() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Cloud Shape */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ellipse
          cx="250"
          cy="200"
          rx="100"
          ry="60"
          className="fill-blue-400"
          opacity="0.3"
        />
        <circle cx="180" cy="200" r="50" className="fill-blue-400" opacity="0.3" />
        <circle cx="250" cy="180" r="60" className="fill-blue-400" opacity="0.3" />
        <circle cx="320" cy="200" r="50" className="fill-blue-400" opacity="0.3" />
      </motion.g>

      {/* Data Upload/Download Arrows */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.path
            key={`up-${i}`}
            d={`M${150 + i * 80},260 L${150 + i * 80},300`}
            className="stroke-green-500"
            strokeWidth="4"
            strokeLinecap="round"
            animate={{ y: [-10, 0, -10] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {[0, 1, 2].map((i) => (
          <motion.path
            key={`down-${i}`}
            d={`M${170 + i * 80},160 L${170 + i * 80},120`}
            className="stroke-purple-500"
            strokeWidth="4"
            strokeLinecap="round"
            animate={{ y: [10, 0, 10] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.g>

      {/* Server Racks */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {[0, 1, 2].map((i) => (
          <g key={`server-${i}`}>
            <rect
              x={100 + i * 120}
              y={340}
              width="80"
              height="120"
              rx="8"
              className="fill-gray-700 dark:fill-gray-800"
            />
            {[0, 1, 2, 3].map((j) => (
              <g key={`led-${j}`}>
                <rect
                  x={110 + i * 120}
                  y={355 + j * 25}
                  width="60"
                  height="15"
                  rx="2"
                  className="fill-gray-600"
                />
                <motion.circle
                  cx={120 + i * 120}
                  cy={362 + j * 25}
                  r="3"
                  className={`fill-${j % 2 === 0 ? 'green' : 'blue'}-500`}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: (i + j) * 0.2,
                  }}
                />
              </g>
            ))}
          </g>
        ))}
      </motion.g>

      {/* Data Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.circle
          key={`particle-${i}`}
          cx={Math.random() * 500}
          cy={Math.random() * 200 + 100}
          r={2}
          className="fill-cyan-400"
          opacity="0.6"
          animate={{
            y: [0, -30, 0],
            opacity: [0.6, 0, 0.6],
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
