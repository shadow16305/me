"use client";

import { createContext, useState } from "react";

interface MenuContextObject {
  open: boolean;
  onOpen: () => void;
}

export const MenuContext = createContext<MenuContextObject>({
  open: false,
  onOpen: () => {},
});

export const MenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const contextValue = {
    open: isOpen,
    onOpen: () => setIsOpen(!isOpen),
  };

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};
