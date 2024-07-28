import type { Metadata } from "next";
import "./globals.css";
import { cn, monaSans } from "@/lib/utils";
import { MainNavigation } from "@/components/main-navigation/main-navigation";
import { MenuContextProvider } from "@/context/menu-context";
import { Menu } from "@/components/main-navigation/menu";
import { Footer } from "@/components/footer/footer";

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
    <html lang="en" className="scroll-smooth text-base">
      <body className={cn("bg-neutral-950 font-sans", monaSans.className)}>
        <MenuContextProvider>
          <MainNavigation />
          <Menu />
          {children}
          <Footer />
        </MenuContextProvider>
      </body>
    </html>
  );
}
