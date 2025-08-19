"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function LabThree() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 24, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/`}
        className="flex flex-col items-center gap-4 px-3 lg:px-4 pt-3 lg:pt-4 pb-5 lg:pb-6 bg-white cursor-pointer group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden h-[260px] md:h-[350px] lg:h-[clamp(500px,32vw,800px)] w-[clamp(500px,45vw,800px)]">
          <div className="absolute inset-0 bg-neutral-900/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

          <video
            ref={(el) => {
              if (el) {
                if (isHovered) {
                  el.play();
                } else {
                  setTimeout(() => {
                    el.pause();
                    el.currentTime = 0;
                  }, 1000);
                }
              }
            }}
            src="/videos/kickbass-preview-compressed.mp4"
            className="absolute top-1/2 -translate-y-1/12 left-1/2 -translate-x-1/2 w-[clamp(300px,65%,600px)] h-auto object-cover z-20 [clip-path:polygon(30%_50%,70%_50%,70%_50%,30%_50%)] group-hover:[clip-path:polygon(0_100%,100%_100%,100%_0,0_0)] group-hover:-translate-y-6/12 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]"
            muted
            loop
            playsInline
          ></video>

          <div className="w-full h-full">
            <Image
              src="/images/push-01.png"
              alt="/"
              fill
              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-800 ease-in-out"
            />
          </div>
        </div>

        <p className="text-4xl uppercase text-neutral-900 font-black tracking-tight">
          "Kick & Bass"
        </p>

        <div className="flex justify-between items-center w-full relative">
          
          <p className="text-sm font-medium font-mono uppercase text-neutral-700 tracking-tight">
            [ 2024 ]
          </p>
          <p className="text-sm font-medium font-mono uppercase text-neutral-700 tracking-tight">
            [ 3 mo ]
          </p>
          <p className="text-sm font-medium font-mono uppercase text-neutral-700 tracking-tight">
            [ EDM, Coaching, Store ]
          </p>
          <p className="text-sm font-medium font-mono uppercase text-neutral-700 tracking-tight">
            [ Next.js, GSAP, Contentful ]
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
