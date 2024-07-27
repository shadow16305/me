import React, { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
  const hamburgerLine = cn(
    "h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300",
    isOpen && "bg-white",
  );

  return (
    <button
      type="button"
      aria-label="Hamburger"
      className={cn(
        "group relative z-50 flex h-12 w-12 flex-col items-center justify-center rounded-full transition-colors hover:bg-neutral-200",
        isOpen && "hover:bg-neutral-700",
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={cn(hamburgerLine, isOpen && "translate-y-1.5 rotate-45")}
      />
      <div
        className={cn(hamburgerLine, isOpen && "-translate-y-1 -rotate-45")}
      />
    </button>
  );
};
