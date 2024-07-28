"use client";

import Link from "next/link";
import { useContext } from "react";
import { Hamburger } from "./hamburger";
import { MenuContext } from "@/context/menu-context";
import { cn } from "@/lib/utils";

export const MainNavigation = () => {
  const menuCtx = useContext(MenuContext);

  return (
    <nav className="absolute left-1/2 top-2 z-50 mx-auto flex w-full max-w-[91%] -translate-x-1/2 items-center justify-between pt-14 2xl:max-w-7xl">
      <Link
        href="/"
        className={cn(
          "text-lg font-medium transition-colors",
          menuCtx.open && "text-white",
        )}
      >
        Christian Abu Khalil
      </Link>
      <Hamburger isOpen={menuCtx.open} setIsOpen={menuCtx.onOpen} />
    </nav>
  );
};
