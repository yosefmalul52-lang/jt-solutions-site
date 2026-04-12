"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pageEnterTransition } from "@/lib/motion";

export default function PageEnter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce === true ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={pageEnterTransition(reduce)}
    >
      {children}
    </motion.div>
  );
}
