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

export const projects = [
  {
    id: "project-1",
    title: "Scads",
    imgSrc: "/images/scads.png",
    github_link: "https://github.com/scads-io/frontend",
    site_link: "https://scads.io",
    description: {
      p1: "Scads is a cutting-edge cryptocurrency platform that includes its own token swap functionality. I was responsible for the front-end development and design of the website, collaborating closely with a team of backend developers and blockchain engineers to deliver a seamless user experience.",
      p2: "The intuitive design and reliable performance of the site have been well-received, contributing to the growth and success of the Scads token ecosystem.",
    },
    stack: "NextJS, TypeScript, TailwindCSS, Redux, Shadcn/RadixUI",
  },

  {
    id: "project-2",
    title: "Bayview",
    imgSrc: "/images/bayview.webp",
    github_link: "https://github.com/shadow16305/BayView",
    site_link: "https://Bayviewdiagnostic.ca",
    description: {
      p1: "For this project, I collaborated closely with a designer to create three bespoke websites for clinics located in Toronto, Canada. The primary objective was to develop user-friendly, visually appealing websites that effectively showcased the clinics' services and enhanced their online presence.",
      p2: "The project culminated in the successful launch of three distinct websites, each receiving positive feedback from the client. The clinics reported improved user engagement and satisfaction, marking the project as a significant achievement.",
    },
    stack: "ReactJS, TypeScript, TailwindCSS, Framer-motion",
  },

  {
    id: "project-3",
    title: "Flowcart",
    imgSrc: "/images/flowcart.png",
    github_link: "https://github.com/shadow16305/flowcart",
    site_link: "https://flowcart.vercel.app/",
    description: {
      p1: "A full-stack ecommerce website designed to demonstrate my capabilities in both front-end and back-end development. This project features secure user authentication, allowing for a personalized shopping experience. Users can post reviews to share their opinions and feedback on products. The website also includes a shopping cart system for managing and reviewing items before purchase, and the ability to bookmark favorite products for easy access later. In the near future, I plan to integrate an admin panel to replace the current dummyjson API,",
      p2: null,
    },
    stack: "NextJS, TypeScript, TailwindCSS, MongoDB, Mongoose, Clerk, REST",
  },
  {
    id: "project-4",
    title: "Uma-lab",
    imgSrc: "/images/uma-lab.png",
    github_link: "https://github.com/shadow16305/uma-lab",
    site_link: "https://uma-lab.com.ua/",
    description: {
      p1: "At Uma-lab, a digital marketing agency, I was entrusted with the task of building their website in collaboration with a designer. The goal was to create a dynamic, visually compelling online presence that effectively communicates the agency's services and expertise.",
      p2: "The result was a modern, engaging website that has significantly boosted Uma-lab's online visibility and client engagement. Ongoing maintenance ensures the website remains current and functional, consistently meeting the agency's evolving needs.",
    },
    stack: "ReactJS, JavaScript, TailwindCSS, Framer-motion",
  },
  {
    id: "project-5",
    title: "Entertainment web-app",
    imgSrc: "/images/entertainment-web-app.png",
    github_link: "https://github.com/shadow16305/entertainment-web-app",
    site_link: "https://entertainment-web-app-weld-eight.vercel.app/",
    description: {
      p1: "A website utilizng TMDB (The movie database API), where users can browse all movies and tv shows. I'm also planning on adding a genre filter in the future.",
    },
    stack: "NextJS, TypeScript, TailwindCSS, REST API",
  },
];
