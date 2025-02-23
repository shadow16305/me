import {
  FaLinkedin,
  FaTelegram,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaNodeJs,
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
    path: "#footer",
  },
];

export const socials = [
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/christian-abk/",
    iconLg: (
      <FaLinkedin
        className="text-white transition-colors hover:text-neutral-300"
        size={28}
      />
    ),
    iconSm: (
      <FaLinkedin
        className="text-white transition-colors hover:text-neutral-300"
        size={16}
      />
    ),
  },
  {
    text: "Telegram",
    link: "https://t.me/chris163",
    iconLg: (
      <FaTelegram
        className="text-white transition-colors hover:text-neutral-300"
        size={28}
      />
    ),
    iconSm: (
      <FaTelegram
        className="text-white transition-colors hover:text-neutral-300"
        size={16}
      />
    ),
  },
  {
    text: "Github",
    link: "https://github.com/shadow16305",
    iconLg: (
      <FaGithub
        className="text-white transition-colors hover:text-neutral-300"
        size={28}
      />
    ),
    iconSm: (
      <FaGithub
        className="text-white transition-colors hover:text-neutral-300"
        size={16}
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
    title: "Yonge Potato",
    imgSrc: "/images/potato.png",
    github_link: "https://github.com/shadow16305/yonge-potato",
    site_link: "https://yongepotato.com/",
    description: {
      p1: "I collaborated with a designer to develop a sleek, responsive 3-page website. I ensured pixel-perfect implementation, optimized performance, and integrated a dynamic contact form with validation and email notifications. Additionally, I applied SEO and accessibility best practices to enhance visibility and usability.",
      p2: null
    },
    stack:
      "React, Vite, TypeScript, TailwindCSS, Express, Node.js",
  },
  {
    id: "project-2",
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
    id: "project-3",
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
    id: "project-4",
    title: "Titarenko Fit",
    imgSrc: "/images/titarenko-fit.jpg",
    github_link: "https://github.com/shadow16305/titarenko-fit",
    site_link: "https://titarenko.fit",
    description: {
      p1: "I developed a full-stack e-learning platform for a client with user authentication, a custom admin panel for content management, Stripe integration for secure payments, and a personal client area where users can track progress. I also hosted the website on a VPS.",
      p2: "The platform includes course watching with progress tracking, a dynamic blog section, I18n localization, and over 10 pages with dynamic routing. Collaborating with a UX/UI designer, I ensured a seamless and engaging user experience, delivering a scalable and efficient solution.",
    },
    stack: "Next.js, TypeScript, PostgreSQL, PayloadCMS, Stripe, REST API, Node.js, TailwindCSS, I18n, Framer-motion",
  },
  {
    id: "project-5",
    title: "Flowcart",
    imgSrc: "/images/flowcart.png",
    github_link: "https://github.com/shadow16305/flowcart",
    site_link: "https://flowcart.vercel.app/",
    description: {
      p1: "A full-stack ecommerce website designed to demonstrate my capabilities in both front-end and back-end development. This project features secure user authentication, allowing for a personalized shopping experience. Users can post reviews to share their opinions and feedback on products. The website also includes a shopping cart system for managing and reviewing items before purchase, and the ability to bookmark favorite products for easy access later. In the near future, I plan to integrate an admin panel to replace the current dummyjson API,",
      p2: null,
    },
    stack: "NextJS, TypeScript, TailwindCSS, MongoDB, Mongoose, Clerk, REST API",
  },
  {
    id: "project-6",
    title: "Entertainment web-app",
    imgSrc: "/images/entertainment-web-app.png",
    github_link: "https://github.com/shadow16305/entertainment-web-app",
    site_link: "https://entertainment-web-app-weld-eight.vercel.app/",
    description: {
      p1: "A website utilizng TMDB (The movie database API), where users can browse all movies and tv shows. I'm also planning on adding a genre filter in the future.",
      p2: null,
    },
    stack: "NextJS, TypeScript, TailwindCSS, REST API",
  },
  {
    id: "project-7",
    title: "Modality IT",
    imgSrc: "/images/modality.webp",
    github_link: "https://github.com/shadow16305/modality-it",
    site_link: "https://www.modalityit.ca/",
    description: {
      p1: "Developed a tailored website for an IT support provider specializing in comprehensive support services for diagnostic clinics. Collaborated closely with a UX/UI designer to ensure an intuitive user experience, focusing on the unique needs of healthcare professionals. The project highlights my ability to build functional, user-centered solutions in a specialized industry.",
      p2: null,
    },
    stack: "NextJS, TypeScript, TailwindCSS",
  },
  {
    id: "project-8",
    title: "Atlas Turkish Cuisine",
    imgSrc: "/images/atlas.png",
    github_link: "https://github.com/shadow16305/food-truck-mig",
    site_link: "https://atlasturkishcuisine.com/",
    description: {
      p1: "Built a dynamic website for a Turkish restaurant, translating a UX/UI designer’s vision into a fully functional online presence. Integrated a custom contact form to enhance customer engagement, ensuring a seamless user experience and effective communication for the restaurant.",
      p2: null,
    },
    stack: "ReactJS, TypeScript, TailwindCSS, Express, Vite, Node.js",
  },
  {
    id: "project-9",
    title: "Video production portfolio",
    imgSrc: "/images/video-production.jpg",
    github_link: "https://github.com/shadow16305/video-production-portfolio",
    site_link: "https://inevda.com/",
    description: {
      p1: "I collaborated with a client on Upwork to transform their design into a fully functional and responsive website. I implemented a pixel-perfect UI to match the provided design and integrated a contact form with validation and email functionality. The site was thoroughly tested for responsiveness and cross-browser compatibility, delivering a user-friendly platform that met the client’s vision and expectations.",
      p2: null,
    },
    stack: "ReactJS, TypeScript, TailwindCSS, Express, Vite, Node.js",
  },
  {
    id: "project-10",
    title: "UX/UI designer portfolio",
    imgSrc: "/images/uxui-portfolio.png",
    github_link: "https://github.com/shadow16305/sanemuix",
    site_link: "https://www.sanemuix.com/",
    description: {
      p1: "I was tasked with building a dynamic portfolio website for a client, based on a design they provided. The project involved creating multiple pages with dynamic routes, implementing complex UI elements, and incorporating a variety of animations to enhance user engagement. A key feature was a custom following cursor, adding an interactive and modern touch. The final product was a fully functional, visually captivating website that aligned perfectly with the client's design and objectives.",
      p2: null,
    },
    stack: "NextJS, TypeScript, TailwindCSS, Framer-Motion",
  },
];
