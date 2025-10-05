"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
}

export default function SlideUp({ children, delay = 0 }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // start hidden & lower
      whileInView={{ opacity: 1, y: 0 }} // animate to normal position
      viewport={{ once: true, amount: 0.9 }} // trigger when 20% in view
      transition={{ duration: 0.9, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
