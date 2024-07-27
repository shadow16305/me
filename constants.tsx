import {
  FaLinkedin,
  FaTelegram,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCypress,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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

export const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 size={32} />,
  },
  {
    name: "CSS",
    icon: <FaCss3 size={32} />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript size={32} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={32} />,
  },
  {
    name: "React.js",
    icon: <FaReact size={32} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={32} />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={32} />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={32} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={32} />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={32} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={32} />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={32} />,
  },
  {
    name: "Express",
    icon: <SiExpress size={32} />,
  },
  {
    name: "Cypress",
    icon: <SiCypress size={32} />,
  },
];
