"use client";

import { motion} from "motion/react";
import { usePathname } from "next/navigation";

export default function FadeAnimation({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <motion.div
    key={pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    style={{ width: "100%" }}
    >
        {children}
    </motion.div>
  );
}