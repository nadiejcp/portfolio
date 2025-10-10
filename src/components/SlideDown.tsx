"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideDownProps {
  children: ReactNode;
  delay?: number;
  amount?: number;
}

export default function SlideDown({ children, delay = 0, amount = 0.3 }: SlideDownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }} // start hidden & upper
      whileInView={{ opacity: 1, y: 0 }} // animate to normal position
      viewport={{ once: true, amount: amount}} // trigger when 20% in view
      transition={{ duration: 0.9, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
