"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
      <div className="relative flex flex-col items-center">
        {/* Animated Rings */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 h-24"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-l-2 border-blue-500"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-b-2 border-r-2 border-purple-500 opacity-50"
          />
          
          {/* Center Logo/Initial */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white tracking-widest">
              M<span className="text-blue-500">.</span>
            </span>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <div className="h-1 w-32 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-medium">
            Loading Experience
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
