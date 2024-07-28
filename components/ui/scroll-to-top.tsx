"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowRoundUp } from "react-icons/io";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Link
            href="#hero"
            className="fixed bottom-5 right-5 z-20 rounded-full bg-neutral-950 p-2 transition-opacity"
          >
            <IoIosArrowRoundUp className="text-white" size={24} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
