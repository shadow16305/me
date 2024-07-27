import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";

export const navLinks = [
  {
    name: "My Skills",
    path: "#skills",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Experience",
    path: "#experience",
  },
];

export const socials = [
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/christian-abk/",
    icon: (
      <FaLinkedin
        className="text-white transition-colors hover:text-neutral-300"
        size={28}
      />
    ),
  },
  {
    text: "Telegram",
    link: "https://t.me/Shadow163",
    icon: (
      <FaTelegram
        className="text-white transition-colors hover:text-neutral-300"
        size={28}
      />
    ),
  },
  {
    text: "Github",
    link: "https://github.com/shadow16305",
    icon: (
      <FaGithub
        className="text-white transition-colors hover:text-neutral-300"
        size={28}
      />
    ),
  },
];
