"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cpu, Zap, Globe, Lock } from "lucide-react";

const techIcons = [
  { Icon: Code2, delay: 0, x: "10%", y: "20%" },
  { Icon: Database, delay: 0.5, x: "85%", y: "15%" },
  { Icon: Cpu, delay: 1, x: "15%", y: "70%" },
  { Icon: Zap, delay: 1.5, x: "80%", y: "65%" },
  { Icon: Globe, delay: 2, x: "50%", y: "10%" },
  { Icon: Lock, delay: 2.5, x: "90%", y: "45%" },
];

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techIcons.map((item, index) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30">
                <Icon className="w-10 h-10 text-purple-400" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-30" />
            </div>
          </motion.div>
        );
      })}

      {/* Geometric Shapes */}
      <motion.div
        className="absolute left-[20%] top-[40%] w-16 h-16 border-4 border-purple-500/20 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute right-[15%] top-[30%] w-20 h-20 border-4 border-indigo-500/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[60%] bottom-[20%]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60">
          <polygon
            points="30,10 50,40 10,40"
            className="fill-violet-500/20 stroke-violet-500/40"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </div>
  );
}
