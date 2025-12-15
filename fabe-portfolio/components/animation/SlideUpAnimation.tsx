"use client";

import { motion} from "motion/react";
import { usePathname } from "next/navigation";

export default function SlideUpAnimation({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <motion.div
    key={pathname}
    initial={{ opacity: 0, y: 10 }}     // enter start
    animate={{ opacity: 1, y: 0 }}      // enter end
    exit={{ opacity: 0, y: -10 }}       // exit animation
    transition={{ duration: 0.25 }}
    style={{ width: "100%" }}
    >
        {children}
    </motion.div>
  );
}
