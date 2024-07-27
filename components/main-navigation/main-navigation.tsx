"use client";

import Link from "next/link";
import { useContext } from "react";
import { Hamburger } from "./hamburger";
import { MenuContext } from "@/context/menu-context";
import { cn } from "@/lib/utils";

export const MainNavigation = () => {
  const menuCtx = useContext(MenuContext);

  return (
    <nav className="absolute left-1/2 top-2 z-50 mx-auto flex w-full max-w-7xl -translate-x-1/2 items-center justify-between pt-14">
      <Link
        href="/"
        className={cn(
          "text-lg font-medium transition-colors",
          menuCtx.open && "text-white",
        )}
      >
        Christian Abu Khalil
      </Link>
      <div className="flex items-center gap-x-4">
        <Link
          href="#contact"
          className={cn(
            "rounded-3xl bg-neutral-950 px-5 py-1.5 font-medium text-white transition-colors hover:bg-neutral-800",
            menuCtx.open && "bg-white text-black hover:bg-neutral-300",
          )}
        >
          Contact
        </Link>
        <Hamburger isOpen={menuCtx.open} setIsOpen={menuCtx.onOpen} />
      </div>
    </nav>
  );
};
