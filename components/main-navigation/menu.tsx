"use client";

import { navLinks, socials } from "@/constants";
import { MenuContext } from "@/context/menu-context";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";

export const Menu = () => {
  const menuCtx = useContext(MenuContext);

  return (
    <AnimatePresence mode="wait">
      {menuCtx.open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="bg-neutral-950"
        >
          <div>
            <div className="mx-auto max-w-[91%] pb-12 pt-40 2xl:max-w-7xl">
              <ul className="mx-auto flex flex-col justify-between md:flex-row">
                {navLinks.map((link, index) => (
                  <Link
                    href={link.path}
                    key={index}
                    className="w-full border-y border-neutral-800 py-8 text-center text-2xl text-white transition-colors hover:bg-neutral-900 md:border-x md:border-y-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
              <div className="mt-12 flex items-center justify-between text-white">
                <a
                  href="mailto:chris16305@gmail.com"
                  data-after="chris16305@gmail.com"
                  className="pseudo-text-effect font-medium"
                >
                  <span>chris16305@gmail.com</span>
                </a>
                <ul className="flex items-center gap-x-4">
                  {socials.map((social) => (
                    <li key={social.text}>
                      <a href={social.link} target="_blank" rel="noreferrer">
                        {social.iconLg}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
