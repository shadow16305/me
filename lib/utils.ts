import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import MonaSans from "next/font/local";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const monaSans = MonaSans({
  src: [
    {
      path: "../public/fonts/Mona-Sans-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Mona-Sans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Mona-Sans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Mona-Sans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Mona-Sans-Bold.ttf",
      weight: "700",
    },
  ],
});
