"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    mass: 0.35,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[70] pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, rgba(91,33,182,0.86), rgba(79,70,229,0.82) 55%, rgba(14,165,233,0.78))",
        boxShadow: "0 2px 8px rgba(79,70,229,0.2)",
      }}
    />
  );
}
