import type { Metadata } from "next";
import "./globals.css";
import { cn, monaSans } from "@/lib/utils";
import { MainNavigation } from "@/components/main-navigation/main-navigation";
import { MenuContextProvider } from "@/context/menu-context";
import { Menu } from "@/components/main-navigation/menu";

export const metadata: Metadata = {
  title: "Chris A.K.",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-neutral-950 font-sans", monaSans.className)}>
        <MenuContextProvider>
          <MainNavigation />
          <Menu />
          {children}
        </MenuContextProvider>
      </body>
    </html>
  );
}
