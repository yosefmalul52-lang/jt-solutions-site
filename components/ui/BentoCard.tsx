"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, motionTransition, viewport as motionViewport } from "@/lib/motion";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: "1" | "2" | "3";
  rowSpan?: "1" | "2";
  delay?: number;
}

export default function BentoCard({
  children,
  className = "",
  delay = 0,
}: BentoCardProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce === true ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={motionViewport.sectionTight}
      transition={motionTransition(reduce, { duration: 0.55, delay, ease: EASE })}
      className={`
        relative rounded-2xl overflow-hidden
        bg-white border border-slate-200
        hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50
        shadow-sm transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
