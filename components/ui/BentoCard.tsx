"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
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
