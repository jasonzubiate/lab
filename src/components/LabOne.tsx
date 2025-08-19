"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FaPause } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function LabOne() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      onClick={() => setIsExpanded(!isExpanded)}
      whileTap={{ scale: 0.8 }}
      layout
      style={{
        gap: isExpanded ? "16px" : "8px",
        paddingRight: isExpanded ? "8px" : "12px",
      }}
      animate={isExpanded ? { width: "340px" } : { width: "110px" }}
      className="flex items-center rounded-full bg-zinc-950 pl-2 py-2 scale-100 relative cursor-pointer"
    >
      <div className="h-10 w-10 min-w-10 rounded-full bg-zinc-800 relative overflow-hidden">
        <Image
          src="https://i.scdn.co/image/ab67616d0000b273bfca2b382d53719c9fa1a3db"
          alt="logo"
          fill
        />
      </div>
      <WaveForm isExpanded={isExpanded} />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0, scale: isExpanded ? 1 : 0 }}
      >
        <div className="w-10 h-10 bg-zinc-800/0 hover:bg-zinc-800/100 transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer -ml-2">
          <FaPause className="text-zinc-50 w-4 h-4" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function WaveForm({ isExpanded }: { isExpanded: boolean }) {
  const [heights, setHeights] = useState<number[]>([]);

  const randomizeheights = () => {
    const newheights = Array.from({ length: 36 }, () => {
      return Math.random();
    });
    setHeights(newheights);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      randomizeheights();
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="flex items-center gap-0.5 h-full">
      {/* Minimized view */}
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: `${heights[0] * 100}%` }}
        className="h-full bg-[#db7e91] w-1 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: `${heights[1] * 100}%` }}
        className="h-full bg-[#db7e91] w-1 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: `${heights[2] * 100}%` }}
        className="h-full bg-[#db7e91] w-1 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: `${heights[3] * 100}%` }}
        className="h-full bg-[#db7e91] w-1 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: `${heights[4] * 100}%` }}
        className="h-full bg-[#db7e91] w-1 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: `${heights[5] * 100}%` }}
        className="h-full bg-[#db7e91] w-1 rounded-full"
      ></motion.div>

      {/* Expanded view */}
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[6] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[7] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[8] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[9] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[10] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[11] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[12] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[13] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[14] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[15] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[16] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[17] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[18] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[19] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[20] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[21] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[22] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[23] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[24] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[25] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[26] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[27] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[28] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[29] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[30] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[31] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[32] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[33] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[34] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[35] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "0%", width: "0px", opacity: 0 }}
        animate={{
          height: isExpanded ? `${heights[36] * 100}%` : 0,
          width: isExpanded ? "4px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full bg-zinc-700 rounded-full"
      ></motion.div>
    </motion.div>
  );
}
